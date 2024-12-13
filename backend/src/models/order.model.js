import { model, Schema } from 'mongoose';
import { OrderStatus } from '../constants/orderStatus.js';
import { FoodStatus } from '../constants/foodStatus.js'; // Assuming you added the FoodStatus constants
import { FoodModel } from './food.model.js';

export const LatLngSchema = new Schema(
  {
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
  {
    _id: false,
  }
);

export const OrderItemSchema = new Schema(
  {
    food: { type: FoodModel.schema, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    _id: false,
  }
);

OrderItemSchema.pre('validate', function (next) {
  this.price = this.food.price * this.quantity;
  next();
});

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    foodStatus: { type: String, default: FoodStatus.PREPARING }, // Added foodStatus field
    user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Add the startFoodStatusTimer method to the schema methods
orderSchema.methods.startFoodStatusTimer = function() {
  const order = this;

  // Change food status to 'READY_FOR_PICKUP' after 3 minutes
  setTimeout(async () => {
    order.foodStatus = FoodStatus.READY_FOR_PICKUP;
    await order.save();
  }, 1 * 60 * 1000); // 3 minutes in milliseconds
};

export const OrderModel = model('order', orderSchema);

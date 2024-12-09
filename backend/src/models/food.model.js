import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    origins: { type: [String], required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String], required: true },
    nutrition: {
      calories: { type: Number, required: true },
      protein: { type: String, required: true },
      carbs: { type: String, required: true },
      fat: { type: String, required: true },
    },
    dietaryNotes: { type: String, required: true },
    allergens: { type: [String], required: true },
    customization: {
      eggStyle: { type: [{ option: String, price: Number }], default: [] },
      toastType: { type: [{ option: String, price: Number }], default: [] },
      addSausages: { type: { available: Boolean, price: Number }, default: { available: false, price: 0 } },
      addCheese: { type: { available: Boolean, price: Number }, default: { available: false, price: 0 } },
      fruitChoice: { type: [{ option: String, price: Number }], default: [] },
      sweetener: { type: [{ option: String, price: Number }], default: [] },
      milkOption: { type: [{ option: String, price: Number }], default: [] },
      syrupType: { type: [{ option: String, price: Number }], default: [] },
      yogurtChoice: { type: [{ option: String, price: Number }], default: [] },
      addFruit: { type: { available: Boolean, price: Number }, default: { available: false, price: 0 } },
      beverageChoice: { type: [{ option: String, price: Number }], default: [] },
      spiciness: { type: [{ option: String, price: Number }], default: [] },
      sideChoice: { type: [{ option: String, price: Number }], default: [] },
      substituteChicken: { type: [{ option: String, price: Number }], default: [] },
      substituteFish: { type: [{ option: String, price: Number }], default: [] },
      sauceLevel: { type: [{ option: String, price: Number }], default: [] },
      pastaType: { type: [{ option: String, price: Number }], default: [] },
      soySauceChoice: { type: [{ option: String, price: Number }], default: [] },
      beefCookStyle: { type: [{ option: String, price: Number }], default: [] },
      fishType: { type: [{ option: String, price: Number }], default: [] },
      soupSpiceLevel: { type: [{ option: String, price: Number }], default: [] },
      addMeat: { type: [{ option: String, price: Number }], default: [] },
      soupType: { type: [{ option: String, price: Number }], default: [] },
      meatOption: { type: [{ option: String, price: Number }], default: [] },
      sauceChoice: { type: [{ option: String, price: Number }], default: [] },
      chickenType: { type: [{ option: String, price: Number }], default: [] },
      sideOption: { type: [{ option: String, price: Number }], default: [] },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model('food', FoodSchema);

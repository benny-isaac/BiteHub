import { Router } from 'express';
import handler from 'express-async-handler';
import auth from '../middleware/auth.mid.js';
import { BAD_REQUEST } from '../constants/httpStatus.js';
import { OrderModel } from '../models/order.model.js';
import { OrderStatus } from '../constants/orderStatus.js';
import { UserModel } from '../models/user.model.js';
import { sendEmailReceipt } from '../helpers/mail.helper.js';

const router = Router();
router.use(auth);

router.post(
  '/create',
  handler(async (req, res) => {
    const order = req.body;

    // Check if cart is empty
    if (order.items.length <= 0) return res.status(BAD_REQUEST).send('Cart Is Empty!');

    // Delete any existing NEW orders for the user
    await OrderModel.deleteOne({
      user: req.user.id,
      status: OrderStatus.NEW,
    });

    // Create the new order with the foodStatus field
    const newOrder = new OrderModel({ ...order, user: req.user.id });

    // Start the food status timer (sets 'PREPARING' and changes to 'READY_FOR_PICKUP' after 3 minutes)
    newOrder.startFoodStatusTimer();

    // Save the new order
    await newOrder.save();

    // Send the newly created order as the response
    res.send(newOrder);
  })
);

router.patch(
  '/:orderId/foodStatus',
  handler(async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body; // Expecting status to be in the request body, e.g., 'PICKEDUP'

    if (status !== 'PICKED UP') {
      return res.status(BAD_REQUEST).send('Invalid status update');
    }

    const order = await OrderModel.findOne({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(UNAUTHORIZED).send('Order not found');
    }

    // Check if current foodStatus is 'READY_FOR_PICKUP'
    if (order.foodStatus !== 'READY FOR PICKUP') {
      return res.status(BAD_REQUEST).send('Food is not ready for pickup');
    }

    // Update the foodStatus to 'PICKEDUP'
    order.foodStatus = 'PICKED UP';
    await order.save();

    res.send(order);
  })
);

router.put(
  '/pay',
  handler(async (req, res) => {
    const { paymentId } = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
      res.status(BAD_REQUEST).send('Order Not Found!');
      return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    sendEmailReceipt(order);

    res.send(order._id);
  })
);

router.get(
  '/track/:orderId',
  handler(async (req, res) => {
    const { orderId } = req.params;
    const user = await UserModel.findById(req.user.id);

    const filter = {
      _id: orderId,
    };

    if (!user.isAdmin) {
      filter.user = user._id;
    }

    const order = await OrderModel.findOne(filter);

    if (!order) return res.send(UNAUTHORIZED);

    return res.send(order);
  })
);

router.get(
  '/newOrderForCurrentUser',
  handler(async (req, res) => {
    const order = await getNewOrderForCurrentUser(req);
    if (order) res.send(order);
    else res.status(BAD_REQUEST).send();
  })
);

router.get('/allstatus', (req, res) => {
  const allStatus = Object.values(OrderStatus);
  res.send(allStatus);
});

router.get(
  '/:status?',
  handler(async (req, res) => {
    const status = req.params.status;
    const user = await UserModel.findById(req.user.id);
    const filter = {};

    if (!user.isAdmin) filter.user = user._id;
    if (status) filter.status = status;

    const orders = await OrderModel.find(filter).sort('-createdAt');
    res.send(orders);
  })
);

const getNewOrderForCurrentUser = async req =>
  await OrderModel.findOne({
    user: req.user.id,
    status: OrderStatus.NEW,
  }).populate('user');
export default router;

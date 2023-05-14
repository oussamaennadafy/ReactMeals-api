const Order = require("./../models/orderModel");
const catchAsync = require("./../utils/catchAsync");

const placeOrder = catchAsync(async (req, res) => {
  const OrderAdded = await Order.create(req.body);
  res.json({
    status: "success",
    data: {
      OrderAdded,
    },
  });
});

module.exports = {
  placeOrder,
};

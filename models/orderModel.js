const mongoose = require("mongoose");

const isPositiveInteger = require("./../helper/isPositiveInteger");

const orderSchema = new mongoose.Schema(
  {
    cart: {
      items: {
        type: [
          {
            id: {
              type: Number,
              required: [true, "id of item is required"],
            },
            quantity: {
              type: Number,
              required: [true, "quantity of item is required"],
              validate: {
                validator: isPositiveInteger,
                message: "please add a valid quantity number",
              },
            },
          },
        ],
        required: [true, "please add items field"],
        validate: {
          validator: function (items) {
            return items.length > 0;
          },
          message: "items list is empty",
        },
      },
      totalAmount: {
        type: Number,
        required: [true, "please add total amount field"],
        validate: {
          validator: isPositiveInteger,
          message: "total amount is not a valid price",
        },
      },
    },
    name: {
      type: String,
      required: [true, "name field is required"],
    },
    address: {
      type: String,
      required: [true, "address field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "name is required"],
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password lenght must be more than 6 character"],
    },
    location: {
      type: String,
      default: "Nigeria",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserModel", userSchema);

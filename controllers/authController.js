const userModels = require("../models/userModels");

const registerController = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    //validate payload

    if (!firstName && !email && !password) {
      return res.status(400).json({
        message: "Please provide the missing data",
        success: false,
      });
    }
    const existingUser = await userModels.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User Already exist please login",
      });
    }
    const user = await userModels.create({ firstName, email, password });
    return res.status(201).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error:Fail to Register user",
      success: false,
      error,
    });
  }
};

module.exports = { registerController };

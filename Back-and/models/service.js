//Create Model product

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength: 150,
      trim: true,
    },

    description: {
      type: String,
      maxLength: 2000,
      require: true,
    },
    
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { 
    type: mongoose.Schema.Types.ObjectId,
    default: function () {
      return this._id;
    },
    required: true, 
    unique: true 
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
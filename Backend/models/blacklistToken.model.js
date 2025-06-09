const mongoose = require('mongoose');
const { Schema } = mongoose;
const blacklistTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1d' // Token will expire after 1 day
  }
});
const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);
module.exports = BlacklistToken;
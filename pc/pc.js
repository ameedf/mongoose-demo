const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcSchema = new Schema(
  {
    configName: {
      type: String,
      enum: ['developers', 'gamers', 'students'],
      required: true,
      default: 'developers',
    },
    ram: Number,
    disk: {
      size: {
        type: Number,
        min: 1
      },
      technology: {
        type: String,
        enum: ['SSD', 'HDD']
      }
    }
  },
  {
    versionKey: false
  });

const PC = mongoose.model('Pc', pcSchema);
module.exports = PC;
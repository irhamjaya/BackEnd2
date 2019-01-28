cons = mongoose = require("mongoose");

let Schema = mongoose.Schema;

let dataSchema = mongoose.Schema;

let dataCPUSchema = new Schema({
    namaCpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

let dataCPU = mongoose.model('data', dataCPUSchema);

module.exports = dataCPU;
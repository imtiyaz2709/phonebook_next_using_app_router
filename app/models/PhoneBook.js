import mongoose from "mongoose";

const PhoneSchema = new mongoose.Schema({
    name:{type:String},
    contact:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.models.Phone || mongoose.model("Phone",PhoneSchema)
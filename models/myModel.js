import mongoose from "mongoose";

const PaginationSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

const PaginationModel = mongoose.model("PaginationModel", PaginationSchema)
export default PaginationModel;


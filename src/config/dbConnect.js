import mongoose from "mongoose";

mongoose.connect("mongodb+srv://backend-compass:admin@backend.wlob9wp.mongodb.net/backend-compass");
let db = mongoose.connection

export default db;

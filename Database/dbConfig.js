import mongoose from "mongoose";

const dbConnect=async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
export default dbConnect;
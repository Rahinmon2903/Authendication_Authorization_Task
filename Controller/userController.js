import Users from "../Model/userSchema.js";


//register

export const userRegister=async (req,res) => {
    try {
        //1st method
        // const {username,email,password}=req.body;
        // const newUser=new Users({username,email,password});
        // await newUser.save();
        //  res.status(200).send({message:"user  registered successfully"})

        //2nd method
         const newUser=new Users(req.body);
         await newUser.save();
         res.status(200).send({message:"user  registered successfully",data:newUser})


        
    } catch (error) {
        res.status(503).send({message:"user not registered error in user register"})
        
    }
    
}
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({ message: "all fields are requrired" });
    }
    
    const hashPassword = await bcryptjs.hashSync(password,10) 

  const newUser = new User({
    username,
    email,
    password:hashPassword,
  });
    
    try {
        await newUser.save();
        res.json("signup successfull");
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

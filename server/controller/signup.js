import { User } from "../module/signup.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const saltRounds = 10;
    // Hash the password synchronously
    const hash = bcryptjs.hashSync(password, saltRounds);
    await User.create({ name, email, password:hash});
    res.status(200).json({ success: true });
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({success:false,message:'Email already used'});
    } else {
      return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
  }
};

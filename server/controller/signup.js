import { User } from "../module/signup.js";

export const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);

    if (error.name === 'MongoServerError' && error.code === 11000) {
      console.log("hiii")
      return res.status(400).json({success:false,message:'Email already used'});
    } else {
      // Handle other errors
      return res.status(500).json({ success: false, message:'Internal Server Error' });
    }
  }
};

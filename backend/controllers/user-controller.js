import User from "../models/user.js";

export const getMe = async (req, res) => {
  try {
    let user = await User.findOne({
      supabaseUserId: req.userData.supabaseUserId,
    });

    if (!user) {
      user = new User({
        supabaseUserId: req.userData.supabaseUserId,
        email: req.userData.email,
        name: req.userData.name || "",
      });

      await user.save();
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("Get me error:", err);
    res.status(500).json({ error: "Failed to fetch user profile." });
  }
};

export const updateMe = async (req, res) => {
  const { name } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { supabaseUserId: req.userData.supabaseUserId },
      {
        name,
        email: req.userData.email,
      },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Update me error:", err);
    res.status(500).json({ error: "Failed to update user profile." });
  }
};
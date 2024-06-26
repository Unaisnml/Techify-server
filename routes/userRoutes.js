import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  verifyOtp,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
// console.log(protect, admin);

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post('/verifyOtp', verifyOtp)
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .post(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

  

export default router;

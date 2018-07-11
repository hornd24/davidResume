import express from "express";
import users from "../controllers/usersController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/i", users.findAll);
router.post("/your/mom",users.Mom);
router.get("/hoe/mom",users.hoeMom);
router.post("/signin", users.signIn);
// router.post("/user", users.create);
router.put("/:id", users.update);
router.delete("/:id", users.remove);

// Export routes for server.js to use.
export default router;

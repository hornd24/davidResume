import express from "express";
import cont from "../controllers/contController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", cont.AllContacts);
router.post("/email", cont.sendInfo);
router.post("/info", cont.create);
router.put("/:id", cont.update);
router.delete("/:id", cont.remove);

// Export routes for server.js to use.
export default router;

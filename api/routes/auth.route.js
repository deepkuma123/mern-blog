import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
// import express from "express";

// const router = express.Router();

// export default router;

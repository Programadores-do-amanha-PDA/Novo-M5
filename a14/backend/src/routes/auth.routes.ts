import { Router } from "express";

import authController from "../controller/auth.controller";
import { authenticateToken } from "../middleware/auth";

const auth = Router();

// POST /auth/register
auth.post("/register", authController.register);

// POST /auth/login
auth.post("/login", authController.login);

// GET /auth/me
auth.get("/me", authenticateToken, authController.me);

// POST /auth/logout
auth.post("/logout", authController.logout);

export default auth;

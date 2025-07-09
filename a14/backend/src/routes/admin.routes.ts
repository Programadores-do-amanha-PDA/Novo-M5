import { Router } from "express";
import userController from "../controller/user.controller";
import { authenticateToken, requireAdmin } from "../middleware/auth";

const admin = Router();

// Aplicar middlewares para todas as rotas
admin.use(authenticateToken); // Está logado?
admin.use(requireAdmin); // É admin?

// Rota para ler todos os usuários
admin.get("/users", userController.getUser);

// Rota para ler as estatísticas dos usuários
admin.get("/stats", userController.stats);

// Rota para deletar usuário pelo id
admin.delete("/users/:id", userController.deleteUserById);

export default admin;

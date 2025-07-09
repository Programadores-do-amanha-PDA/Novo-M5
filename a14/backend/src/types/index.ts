import { User, Role } from "@prisma/client";

export { User, Role };

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role?: Role;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    role: Role;
  };
  token: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: Role;
      };
    }
  }
}

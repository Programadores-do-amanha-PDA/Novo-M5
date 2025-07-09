export interface User {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface ContextProps {
  user: User | null;
  isLoading: boolean;
  login: ({ email, password }: LoginProps) => Promise<void>;
  logout: () => void;
}

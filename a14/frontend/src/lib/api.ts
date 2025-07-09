import { LoginProps } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // URL DA API
  withCredentials: true, // PASSA AS CREDENCIAIS CASO TIVER -> PASSA OS COOKIES AUTOMATICAMENTE
});

class AuthAPI {
  async login({ email, password }: LoginProps) {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  }

  async me() {
    const response = await api.get("/auth/me");
    return response.data;
  }

  logout = () => {
    api.post("/auth/logout");
  };
}

const authAPI = new AuthAPI();
export default authAPI;

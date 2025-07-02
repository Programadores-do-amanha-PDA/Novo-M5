"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

// Schema de validação com Zod
const postSchema = z.object({
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .min(3, "Título deve ter pelo menos 3 caracteres"),
  body: z
    .string()
    .min(1, "Conteúdo é obrigatório")
    .min(10, "Conteúdo deve ter pelo menos 10 caracteres"),
  userId: z.number().min(1, "Selecione um usuário"),
});

type PostFormData = z.infer<typeof postSchema>;

// Tipos para a API
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostForm() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  // Carregar usuários da API
  const loadUsers = async () => {
    if (usersLoaded) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setUsersLoaded(true);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carregar posts existentes
  const loadPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Submeter novo post
  const onSubmit = async (data: PostFormData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar post");
      }

      const newPost = await response.json();

      // Adicionar o novo post à lista (simulação)
      setPosts((prev) => [newPost, ...prev.slice(0, 4)]);

      // Limpar formulário
      reset();

      toast.success("Post criado com sucesso!");
      //   alert("Post criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error);
      toast.error("Erro ao criar post. Tente novamente.");
      //   alert("Erro ao criar post. Tente novamente.");
    }
  };

  // Log de renderização
  useEffect(() => {
    console.log("Componente renderizado");
  }, []); // Esse efeito roda uma vez, quando o componente é montado

  useEffect(() => {
    console.log("Componente renderizado após submissão ou alteração de dados");
  }, [users, posts]); // Aqui você pode monitorar atualizações nos usuários e posts

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-white">
        React Hook Form + Zod + JSONPlaceholder
      </h1>

      {/* Botões para carregar dados */}
      <div className="flex gap-4">
        <button
          onClick={loadUsers}
          disabled={loading || usersLoaded}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {usersLoaded ? "Usuários Carregados" : "Carregar Usuários"}
        </button>

        <button
          onClick={loadPosts}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Carregar Posts
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Criar Novo Post
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Select de usuários */}
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Usuário
              </label>
              <select
                {...register("userId", { valueAsNumber: true })}
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={!usersLoaded}
              >
                <option value="">Selecione um usuário</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
              {errors.userId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.userId.message}
                </p>
              )}
            </div>

            {/* Título */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Título
              </label>
              <input
                {...register("title")}
                type="text"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite o título do post"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Conteúdo */}
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Conteúdo
              </label>
              <textarea
                {...register("body")}
                rows={4}
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite o conteúdo do post"
              />
              {errors.body && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.body.message}
                </p>
              )}
            </div>

            {/* Botão submit */}
            <button
              type="submit"
              disabled={isSubmitting || !usersLoaded}
              className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Criar Post"}
            </button>
          </form>
        </div>

        {/* Lista de posts */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl text-black font-semibold mb-4">
            Posts Recentes
          </h2>

          {loading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2">Carregando...</p>
            </div>
          )}

          {!loading && posts.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              Nenhum post carregado. Clique em &quot;Carregar Posts&quot; para
              ver os posts.
            </p>
          )}

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {post.body.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Post ID: {post.id}</span>
                  <span>User ID: {post.userId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

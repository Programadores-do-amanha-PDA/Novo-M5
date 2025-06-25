"use client";
import Skeleton from "@/skeleton";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(
          "Erro ao tentar fazer requisição ou setar estado do componente",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Users</h1>
      <ul className="flex flex-wrap gap-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded shadow mb-4 text-gray-800"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

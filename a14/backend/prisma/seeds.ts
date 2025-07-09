import bcrypt from "bcryptjs";
import prisma from "../src/prisma";

async function main() {
  console.log("Populando banco de dados...");

  // Criando uma senha teste
  const hashedPassword = await bcrypt.hash("password", 10);

  // Criando um admin super usuário test

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      password: hashedPassword,
      role: "USER",
    },
  });

  console.log("Usuário admin criado:", admin);
  console.log("Usuário comum criado:", user);
}

main();

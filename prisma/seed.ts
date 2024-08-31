import { hashSync } from "bcrypt";
import { prisma } from "./db";

async function mock() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Jimmy Stone',
        email: 'stone.j@gmail.com',
        password: hashSync('112234', 10),
        verified: new Date(),
        role: 'CUSTOMER'
      },
      {
        fullName: 'Erl God',
        email: 'god@gmail.com',
        password: hashSync('112234', 10),
        verified: new Date(),
        role: 'ADMIN'
      },
    ]
  });
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await clear();
    await mock();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

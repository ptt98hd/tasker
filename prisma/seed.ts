import { Prisma, PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'Sh@wn98HD',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@email.com',
    password: 'Sh@wn98HD',
  },
];

async function seedUsers(): Promise<void> {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

export async function main(): Promise<void> {
  seedUsers();
}

main();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createUser = (input: any) => {
  return prisma.user.create({
    data: {...input}
  })
}

export const getAllUsers = () => {
  return prisma.user.findMany()
}

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  })
}

export const updateUser = (id: string, input: any) => {
  return prisma.user.update({
    where: {
      id: id
    },
    data: {
      ...input
    }
  })
}

export const deleteUser = (id: string) => {
  return prisma.user.delete({
    where: {
      id: id
    }
  })
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// CRUD 
// READ - GET
export const getAllProducts = () => {
  return prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      reviews: {
        select: {
          text: true,
          rating: true
        }
      },
      createdAt: true,
      updatedAt: true,
    }
    
    // include: {
    //   reviews: {
    //     select: {
    //       text: true,
    //       rating: true
    //     }
    //   }
    // }
  })
} 

//Create - POST
export const createProduct = (input: any) => {
  return prisma.product.create({
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price)
    }
  })
}

// ReadId - GET
export const getProducById = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      reviews: {
        select: {
          text: true,
          rating: true
        }
      },
      createdAt: true,
      updatedAt: true,
    }
  })
}

//Update - PUT
export const updateProduct = (id: string, input: any) => {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price)
    }
  })
}

export function deleteProduct(id: string) {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
}
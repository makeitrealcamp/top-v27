import { Request, Response, NextFunction } from 'express';

import { getAllProducts, createProduct, getProducById, updateProduct, deleteProduct } from './product.services';

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getAllProducts()
    res.status(200).json({ message: 'Products found', data: products })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await createProduct(req.body)
    res.status(201).json({ message: 'Product created', data: product })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getProducByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const product = await getProducById(id)

    if(!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(201).json({ message: 'Product found', data: product })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}


export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const product = await updateProduct(id, req.body)

    if(!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(201).json({ message: 'Product updated', data: product })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await deleteProduct(id);
    res.json(product);
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}
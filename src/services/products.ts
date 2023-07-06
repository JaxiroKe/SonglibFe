import axios, { AxiosResponse, AxiosError } from 'axios';

import { Product } from '../interfaces/product'
import { productsUrl as server } from "../lib/globals"

//Making CRUD Requests for the Product model:

//Create (POST) request: Save a new Product
export const createProduct = async (product: Product): Promise<AxiosResponse<Product>> => {
  try {
    const response: AxiosResponse<Product> = await axios.post(server, product);
    console.log('Product created:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating product:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch a single Product
export const getProduct = async (id: number): Promise<AxiosResponse<Product>> => {
  try {
    const response: AxiosResponse<Product> = await axios.get(`${server}/${id}`);
    console.log('Product retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving product:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch all the Products
export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(server);
    console.log('Products retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving products:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

//Update (PUT) request: Edit a Product
export const updateProduct = async (id: number, product: Product): Promise<AxiosResponse<Product>> => {
  try {
    const response: AxiosResponse<Product> = await axios.put(`${server}/${id}`, product);
    console.log('Product updated:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating product:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Delete (DELETE) request: Remove a Product from the db
export const deleteProduct = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${server}/${id}`);
    console.log('Product deleted successfully');
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error deleting product:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

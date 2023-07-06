import axios, { AxiosResponse, AxiosError } from 'axios';

import { Category } from '../interfaces/category'
import { categoriesUrl as server } from "../lib/globals"

//Making CRUD Requests for the Category model:

//Create (POST) request: Save a new Category
export const createCategory = async (category: Category): Promise<AxiosResponse<Category>> => {
  try {
    const response: AxiosResponse<Category> = await axios.post(server, category);
    console.log('Category created:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating category:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch a single Category
export const getCategory = async (id: number): Promise<AxiosResponse<Category>> => {
  try {
    const response: AxiosResponse<Category> = await axios.get(`${server}/${id}`);
    console.log('Category retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving category:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch all the Categorys
export const getCategorys = async (): Promise<AxiosResponse<Category[]>> => {
  try {
    const response: AxiosResponse<Category[]> = await axios.get(server);
    console.log('Categorys retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving categorys:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

//Update (PUT) request: Edit a Category
export const updateCategory = async (id: number, category: Category): Promise<AxiosResponse<Category>> => {
  try {
    const response: AxiosResponse<Category> = await axios.put(`${server}/${id}`, category);
    console.log('Category updated:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating category:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Delete (DELETE) request: Remove a Category from the db
export const deleteCategory = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${server}/${id}`);
    console.log('Category deleted successfully');
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error deleting category:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

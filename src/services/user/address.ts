import axios, { AxiosResponse, AxiosError } from 'axios';

import { User } from '../../interfaces/user/user'
import { userAccountsUrl as server } from "../../lib/globals"

//Making CRUD Requests for the User model:

//Create (POST) request: Save a new User
export const createUser = async (user: User): Promise<AxiosResponse<User>> => {
  try {
    const response: AxiosResponse<User> = await axios.post(server, user);
    console.log('User created:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch a single User
export const getUser = async (id: number): Promise<AxiosResponse<User>> => {
  try {
    const response: AxiosResponse<User> = await axios.get(`${server}/${id}`);
    console.log('User retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch all the Users
export const getUsers = async (): Promise<AxiosResponse<User[]>> => {
  try {
    const response: AxiosResponse<User[]> = await axios.get(server);
    console.log('Users retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving users:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

//Update (PUT) request: Edit a User
export const updateUser = async (id: number, user: User): Promise<AxiosResponse<User>> => {
  try {
    const response: AxiosResponse<User> = await axios.put(`${server}/${id}`, user);
    console.log('User updated:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Delete (DELETE) request: Remove a User from the db
export const deleteUser = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${server}/${id}`);
    console.log('User deleted successfully');
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error deleting user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

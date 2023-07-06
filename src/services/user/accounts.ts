import axios, { AxiosResponse, AxiosError } from 'axios';

import { User } from '../../interfaces/user/user'
import { userAccountsUrl as server } from "../../lib/globals"

//Making CRUD Requests for the UserAccount model:

//Create (POST) request: Save a new Account
export const createUserAccount = async (user: UserAccount): Promise<AxiosResponse<UserAccount>> => {
  try {
    const response: AxiosResponse<UserAccount> = await axios.post(server, user);
    console.log('UserAccount created:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch a single Account
export const getUserAccount = async (id: number): Promise<AxiosResponse<UserAccount>> => {
  try {
    const response: AxiosResponse<UserAccount> = await axios.get(`${server}/${id}`);
    console.log('UserAccount retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Read (GET) request: Fetch all the Accounts
export const getUsers = async (): Promise<AxiosResponse<UserAccount[]>> => {
  try {
    const response: AxiosResponse<UserAccount[]> = await axios.get(server);
    console.log('UserAccounts retrieved:', response.data);
    return response;
  } catch (error) {
    console.error('Error retrieving users:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

//Update (PUT) request: Edit an Account
export const updateUserAccount = async (id: number, user: UserAccount): Promise<AxiosResponse<UserAccount>> => {
  try {
    const response: AxiosResponse<UserAccount> = await axios.put(`${server}/${id}`, user);
    console.log('UserAccount updated:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

//Delete (DELETE) request: Remove a UserAccount from the db
export const deleteUserAccount = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${server}/${id}`);
    console.log('UserAccount deleted successfully');
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error deleting user:', (error as AxiosError).message);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

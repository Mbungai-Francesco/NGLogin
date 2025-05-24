import axios from "axios";
import { link } from ".";
import type { User } from "../types";

const route = "api/users";
const loginRoute = "api/login";

export const getUsers = async () => {
  try{
    const res = await axios.get(`${link}/${route}`)
    // console.log(res.data.data);
    return res.data.data as Array<User> 
  }
  catch(error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export const getUser = async () => {
  try{
    const res = await axios.get(`${link}/${route}`)
    // console.log(res.data.data);
    return res.data.data as User
  }
  catch(error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${link}/${loginRoute}`, {
      email,
      password
    });
    return res.data.data as User;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Failed to log in");
  }
}
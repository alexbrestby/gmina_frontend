import { AxiosResponse } from "axios";
import $api from "../http/api";

class UserService {
  public static fetchUsers = async (): Promise<AxiosResponse> => {
    try {
      const response = await $api.get('/user/get-all');
      if (response.status !== 200) {
        throw new Error('Users fetch error');
      }
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
      throw new Error(`Users fetch error: ${errorMessage}`);
    }
  }
}

export default UserService;


import { create } from "zustand";
import axiosRequest from "../service/apiConfig";
import { AxiosError } from "axios";

export const usePostsStore = create((set) => ({
  posts: [],
  isLoading: false,
  error: null as AxiosError | null,

  fetchPosts: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosRequest("GET", "posts");
      set({ posts: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

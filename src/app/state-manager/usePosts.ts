import { create } from "zustand";
import axiosRequest from "../service/apiConfig";
import { AxiosError } from "axios";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Posts[];
  isLoading: boolean;
  error: AxiosError | null;
  fetchPosts: () => Promise<void>;
}

export const usePosts = create<PostsState>((set) => ({
  posts: [],
  isLoading: false,
  error: null,

  fetchPosts: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosRequest<Posts[]>("GET", "posts");
      set({ posts: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

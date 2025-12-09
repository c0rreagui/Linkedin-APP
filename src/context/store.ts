import { createContext, useContext } from "react"
import { type SavedPost } from "@/services/storage/localStore"

export interface DataContextType {
  posts: SavedPost[]
  addPost: (post: Omit<SavedPost, "id" | "createdAt">) => void
  totalPosts: number
}

export const DataContext = createContext<DataContextType>({} as DataContextType)

export const useData = () => useContext(DataContext)

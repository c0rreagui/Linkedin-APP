import { useState, useEffect, type ReactNode } from "react"
import { LocalStore, type SavedPost } from "@/services/storage/localStore"
import { DataContext } from "./store"

export function DataProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<SavedPost[]>([])

  useEffect(() => {
    // Carregar dados iniciais
    setPosts(LocalStore.getPosts())
  }, [])

  const addPost = (newPostData: Omit<SavedPost, "id" | "createdAt">) => {
    const newPost: SavedPost = {
      ...newPostData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    
    LocalStore.savePost(newPost)
    setPosts(prev => [newPost, ...prev])
  }

  return (
    <DataContext.Provider value={{ posts, addPost, totalPosts: posts.length }}>
      {children}
    </DataContext.Provider>
  )
}

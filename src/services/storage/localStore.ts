
export interface SavedPost {
  id: string
  prompt: string
  content: string
  imageUrl?: string
  createdAt: string
  tags?: string[]
}

const STORAGE_KEY = "@lumina_app/posts"

export const LocalStore = {
  savePost: (post: SavedPost) => {
    const existing = LocalStore.getPosts()
    const updated = [post, ...existing]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  },

  getPosts: (): SavedPost[] => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    try {
      return JSON.parse(data)
    } catch {
      return []
    }
  },

  clear: () => {
    localStorage.removeItem(STORAGE_KEY)
  }
}

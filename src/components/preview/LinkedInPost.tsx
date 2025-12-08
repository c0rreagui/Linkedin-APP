import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ThumbsUp, MessageSquare, Send, Globe } from "lucide-react"


interface LinkedInPostProps {
  content?: string
  image?: string | null
  authorName?: string
  authorRole?: string
  authorAvatar?: string
}

export function LinkedInPost({ 
    content = "O conteúdo do seu post aparecerá aqui...", 
    image, 
    authorName = "Seu Nome", 
    authorRole = "UX/UI Designer",
    authorAvatar 
}: LinkedInPostProps) {
  return (
    <Card className="bg-white text-black dark:bg-[#1b1f23] dark:text-white border border-border/20 overflow-hidden shadow-none rounded-lg font-sans">
      {/* Header */}
      <div className="p-4 flex gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
             {authorAvatar ? (
                <img src={authorAvatar} alt={authorName} className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gradient-to-br from-gray-200 to-gray-300">
                    {authorName.charAt(0)}
                </div>
             )}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
                <div>
                     <h3 className="font-semibold text-sm leading-tight hover:text-blue-600 hover:underline cursor-pointer">
                        {authorName}
                    </h3>
                     <p className="text-xs text-muted-foreground truncate">{authorRole}</p>
                     <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <span>1h</span> • <Globe className="w-3 h-3" />
                     </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreHorizontal className="w-5 h-5" />
                </Button>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm whitespace-pre-wrap leading-relaxed"
        >
            {content}
        </motion.p>
      </div>

      {/* Image */}
      {image && (
          <div className="mt-2 w-full bg-gray-100 dark:bg-gray-800 min-h-[300px] flex items-center justify-center overflow-hidden relative group">
              <img src={image} alt="Post Content" className="w-full h-full object-cover max-h-[600px]" />
          </div>
      )}

      {/* Footer Stats (Fake) */}
      <div className="px-4 py-2 flex items-center justify-between text-xs text-muted-foreground border-b border-border/20">
         <div className="flex items-center gap-1.5 hover:text-blue-500 hover:underline cursor-pointer">
            <div className="flex -space-x-1">
                 <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white dark:ring-[#1b1f23]">
                    <ThumbsUp className="w-2 h-2 text-white fill-current" />
                 </div>
            </div>
            <span>842</span>
         </div>
         <div className="flex gap-2 hover:text-blue-500 hover:underline cursor-pointer">
            <span>42 comentários</span> • <span>12 compartilhamentos</span>
         </div>
      </div>

      {/* Action Buttons */}
      <div className="px-2 py-1 flex items-center justify-between">
        <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-muted/50 font-semibold text-sm h-12">
            <ThumbsUp className="w-5 h-5 mb-0.5" />
            Gostei
        </Button>
         <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-muted/50 font-semibold text-sm h-12">
            <MessageSquare className="w-5 h-5 mb-0.5" />
            Comentar
        </Button>
         <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-muted/50 font-semibold text-sm h-12">
            {/* <Repeat2 className="w-5 h-5 mb-0.5" /> */}
            Repostar
        </Button>
         <Button variant="ghost" className="flex-1 gap-2 text-muted-foreground hover:bg-muted/50 font-semibold text-sm h-12">
            <Send className="w-5 h-5 mb-0.5" />
            Enviar
        </Button>
      </div>
    </Card>
  )
}

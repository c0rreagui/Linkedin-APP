import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Wand2, Image as ImageIcon, Send } from "lucide-react"

interface PromptInputProps {
  value: string
  onChange: (value: string) => void
  onGenerate: () => void
  onEnhance: () => void
  isGenerating?: boolean
}

export function PromptInput({ value, onChange, onGenerate, onEnhance, isGenerating = false }: PromptInputProps) {
  return (
    <Card className="p-1.5 bg-card/80 border-primary/20 focus-within:border-primary/60 focus-within:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300">
      <div className="relative">
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Sobre o que você quer postar no LinkedIn hoje? (Ex: Dicas de UX para mobile...)"
            className="w-full min-h-[120px] p-4 bg-transparent border-none text-foreground placeholder:text-muted-foreground/50 resize-none focus:ring-0 text-lg leading-relaxed"
        />
        
        <div className="flex items-center justify-between p-2 border-t border-border/30">
            <div className="flex gap-2">
                 <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={onEnhance}
                    className="text-primary hover:text-primary hover:bg-primary/10 gap-2"
                    title="Melhorar com IA"
                >
                    <Wand2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Magic Enhance</span>
                </Button>
                 <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
                    <ImageIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">Add Referência</span>
                </Button>
            </div>

            <Button 
                variant="neon" 
                size="sm" 
                onClick={onGenerate} 
                disabled={!value.trim() || isGenerating}
                className="gap-2 min-w-[120px]"
            >
                {isGenerating ? (
                    "Gerando..."
                ) : (
                    <>
                        Gerar Post <Send className="w-3 h-3" />
                    </>
                )}
            </Button>
        </div>
      </div>
    </Card>
  )
}

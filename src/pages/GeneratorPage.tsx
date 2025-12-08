import { useState } from "react"
import { motion } from "framer-motion"
import { AppLayout } from "@/components/layout/AppLayout"
import { PromptInput } from "@/components/generator/PromptInput"
import { ImagePreview } from "@/components/generator/ImagePreview"
import { LinkedInPost } from "@/components/preview/LinkedInPost"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy } from "lucide-react"

export function GeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPost, setGeneratedPost] = useState<{ text?: string; image?: string } | null>(null)
  
  // Mock function to simulate AI generation
  const handleGenerate = () => {
    setIsGenerating(true)
    setGeneratedPost(null) // Reset previous result

    // Simulate API delay
    setTimeout(() => {
        setGeneratedPost({
            text: `🚀 Transformando ideias em experiências digitais!\n\n${prompt}\n\nComo UX designer, acredito que cada interação conta. O design não é apenas sobre o visual, mas sobre como as pessoas se sentem ao usar um produto.\n\n💡 Dica do dia: Sempre comece com o "Porquê".\n\n#UX #UI #DesignThinking #UserExperience #Innovation`,
            image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2670&auto=format&fit=crop" // Mock image
        })
        setIsGenerating(false)
    }, 2000)
  }

  const handleEnhance = () => {
    if (!prompt) return
    setPrompt(prev => `[Melhorado pela IA] ${prev} focado em gerar valor e engajamento profissional.`)
  }

  return (
    <AppLayout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
            }
        }}
        className="flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-140px)]"
      >
        
        {/* Left Column: Input & Controls */}
        <motion.div 
            variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
            className="flex-1 flex flex-col gap-6"
        >
            <div>
                <h2 className="text-2xl font-bold font-heading mb-2">Criar Novo Post</h2>
                <p className="text-muted-foreground">Descreva sua ideia e deixe a IA cuidar do resto.</p>
            </div>

            <PromptInput 
                value={prompt} 
                onChange={setPrompt} 
                onGenerate={handleGenerate}
                onEnhance={handleEnhance}
                isGenerating={isGenerating}
            />

            {/* AI Settings / Context (Placeholder) */}
            <Card className="p-4 bg-muted/20 border-border/50">
                 <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    {/* <RefreshCw className="w-4 h-4 text-primary" /> */}
                    Configurações do Modelo
                 </h3>
                 <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" className="text-xs h-7">Tom Profissional</Button>
                    <Button variant="outline" size="sm" className="text-xs h-7">Foco em UX/UI</Button>
                    <Button variant="outline" size="sm" className="text-xs h-7">Viral</Button>
                 </div>
            </Card>
        </motion.div>

        {/* Right Column: Preview */}
        <motion.div 
            variants={{
                hidden: { x: 20, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
            className="flex-1 lg:max-w-md xl:max-w-lg"
        >
             <div className="sticky top-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold font-heading">Preview</h2>
                    {generatedPost && (
                         <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground hover:text-primary">
                            <Copy className="w-3 h-3" /> Copiar Texto
                        </Button>
                    )}
                </div>

                {/* The Preview Card */}
                <div className="relative">
                    {!generatedPost && !isGenerating ? (
                        <div className="w-full aspect-[4/5] rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-center p-8 text-muted-foreground bg-card/30">
                            <p>O preview do seu post aparecerá aqui.</p>
                        </div>
                    ) : (
                        <div className={`transition-all duration-500 ${isGenerating ? 'opacity-50 blur-sm scale-[0.98]' : 'opacity-100 scale-100'}`}>
                             <LinkedInPost 
                                content={isGenerating ? "Gerando conteúdo incrível para você..." : generatedPost?.text}
                                image={isGenerating ? null : generatedPost?.image}
                                authorAvatar="https://github.com/shadcn.png" // Placeholder avatar
                            />
                        </div>
                    )}
                    
                    {/* Loading Overlay acting as Image Preview loader too if needed */}
                    {isGenerating && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <ImagePreview isLoading={true} className="w-32 h-32 md:w-full md:h-full md:opacity-0" /> 
                        </div>
                    )}
                </div>
             </div>
        </motion.div>
      </motion.div>
    </AppLayout>
  )
}

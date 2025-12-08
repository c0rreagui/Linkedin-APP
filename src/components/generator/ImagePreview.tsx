import { cn } from "@/lib/utils"
import { Image as ImageIcon, Loader2 } from "lucide-react"

interface ImagePreviewProps {
    image?: string | null
    isLoading?: boolean
    className?: string
}

export function ImagePreview({ image, isLoading, className }: ImagePreviewProps) {
    if (isLoading) {
        return (
             <div className={cn("w-full aspect-square md:aspect-video rounded-lg border border-border/50 bg-muted/20 flex flex-col items-center justify-center relative overflow-hidden", className)}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-2 relative z-10" />
                <p className="text-sm text-primary font-medium animate-pulse relative z-10">Criando arte...</p>
            </div>
        )
    }

    if (!image) {
        return (
            <div className={cn("w-full aspect-square md:aspect-video rounded-lg border border-dashed border-border/50 bg-muted/10 flex flex-col items-center justify-center text-muted-foreground", className)}>
                <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                <p className="text-sm">A imagem gerada aparecerá aqui</p>
            </div>
        )
    }

    return (
        <div className={cn("w-full rounded-lg overflow-hidden border border-border/50 shadow-md", className)}>
            <img src={image} alt="Generated Preview" className="w-full h-auto object-cover" />
        </div>
    )
}

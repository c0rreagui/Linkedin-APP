
import { AppLayout } from "@/components/layout/AppLayout"
import { Sparkles } from "lucide-react"

export function IdeasPage() {
  return (
    <AppLayout>
       <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-heading flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-secondary" />
            Ideias IA
          </h1>
          <p className="text-muted-foreground">Sugestões de conteúdo baseadas em tendências.</p>
        </div>
        <div className="bg-card border border-border/50 rounded-xl p-12 text-center text-muted-foreground">
            Em breve: Motor de inspiração em tempo real.
        </div>
      </div>
    </AppLayout>
  )
}

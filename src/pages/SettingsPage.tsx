
import { AppLayout } from "@/components/layout/AppLayout"
import { Settings } from "lucide-react"

export function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-heading flex items-center gap-2">
            <Settings className="w-8 h-8 text-muted-foreground" />
            Configurações
          </h1>
          <p className="text-muted-foreground">Ajustes do sistema e preferências globais.</p>
        </div>
         <div className="bg-card border border-border/50 rounded-xl p-12 text-center text-muted-foreground">
            Em breve: Controles avançados do sistema.
        </div>
      </div>
    </AppLayout>
  )
}

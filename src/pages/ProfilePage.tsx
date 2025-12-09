
import { AppLayout } from "@/components/layout/AppLayout"
import { User } from "lucide-react"

export function ProfilePage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
           <h1 className="text-3xl font-bold font-heading flex items-center gap-2">
            <User className="w-8 h-8 text-primary" />
            Seu Perfil
          </h1>
          <p className="text-muted-foreground">Gerencie suas informações e preferências.</p>
        </div>
         <div className="bg-card border border-border/50 rounded-xl p-12 text-center text-muted-foreground">
            Em breve: Configurações de conta e personalização.
        </div>
      </div>
    </AppLayout>
  )
}

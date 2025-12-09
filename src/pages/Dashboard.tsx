
import { AppLayout } from "@/components/layout/AppLayout"

export function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da sua atividade.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Total de Posts</h3>
                <p className="text-2xl font-bold text-primary">12</p>
            </div>
             <div className="bg-card border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Ideias Geradas</h3>
                <p className="text-2xl font-bold text-secondary">48</p>
            </div>
             <div className="bg-card border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Engajamento Médio</h3>
                <p className="text-2xl font-bold text-accent">2.4k</p>
            </div>
        </div>
      </div>
    </AppLayout>
  )
}

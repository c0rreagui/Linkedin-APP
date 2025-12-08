import { Button } from "@/components/ui/button"
import { LayoutDashboard, PenTool, Settings, Sparkles, User } from "lucide-react"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border/40 bg-card/30 backdrop-blur-xl md:flex">
        <div className="flex h-16 items-center px-6 border-b border-border/40">
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NeonPost UI
            </span>
        </div>
        <div className="flex-1 px-4 py-6 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
            </Button>
            <Button variant="neon" className="w-full justify-start gap-2">
                <PenTool className="h-4 w-4" />
                Gerador de Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4" />
                Ideias IA
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Perfil
            </Button>
        </div>
        <div className="p-4 border-t border-border/40">
             <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
                <Settings className="h-4 w-4" />
                Configurações
            </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Header (Mobile only or Global) */}
        <header className="flex h-16 items-center border-b border-border/40 bg-background/50 px-6 backdrop-blur-md md:hidden">
            <span className="text-lg font-bold">NeonPost UI</span>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="mx-auto max-w-6xl space-y-8">
                {children}
            </div>
        </div>
      </main>
    </div>
  )
}

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, PenTool, Settings, Sparkles, User, Menu, X } from "lucide-react"

const NavItems = () => (
  <>
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
  </>
)

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      {/* Sidebar Desktop */}
      <motion.aside 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden w-64 flex-col border-r border-border/40 bg-card/30 backdrop-blur-xl md:flex"
      >
        <div className="flex h-16 items-center px-6 border-b border-border/40">
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lumina
            </span>
        </div>
        <NavItems />
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Header (Mobile only) */}
        <header className="flex h-16 items-center justify-between border-b border-border/40 bg-background/50 px-6 backdrop-blur-md md:hidden z-20 relative">
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lumina</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="absolute inset-y-0 left-0 w-64 bg-background/95 backdrop-blur-3xl border-r border-border/40 z-30 md:hidden flex flex-col pt-16"
                >
                     <NavItems />
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
            />
        )}

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mx-auto max-w-6xl space-y-8"
            >
                {children}
            </motion.div>
        </div>
      </main>
    </div>
  )
}

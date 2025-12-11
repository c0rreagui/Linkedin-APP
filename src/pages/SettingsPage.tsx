import { useState, useEffect } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Settings, Key, Database, Trash2, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useData } from "@/context/store"
import { LocalStore } from "@/services/storage/localStore"

export function SettingsPage() {
  const { totalPosts } = useData()
  const [apiKey, setApiKey] = useState("")
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const key = localStorage.getItem("gemini_api_key")
    if (key) setApiKey(key)
  }, [])

  const handleSaveKey = () => {
    localStorage.setItem("gemini_api_key", apiKey)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleClearData = () => {
    if (confirm("Tem certeza? Isso apagará todos os posts salvos.")) {
      LocalStore.clear()
      window.location.reload() // Simple way to refresh context
    }
  }

  return (
    <AppLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-heading flex items-center gap-2">
            <Settings className="w-8 h-8 text-primary" />
            Configurações
          </h1>
          <p className="text-muted-foreground">Gerencie suas chaves de API e dados do aplicativo.</p>
        </div>

        {/* AI Integration Section */}
        <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-border/40 pb-2">
                <Key className="w-5 h-5 text-neon-cyan" /> Integração IA
            </h2>
            <Card className="p-6 bg-card/50 border-border/50 space-y-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Google Gemini API Key</label>
                    <p className="text-xs text-muted-foreground">Necessária para gerar e melhorar posts. A chave é salva localmente no seu navegador.</p>
                </div>
                <div className="flex gap-4">
                    <input 
                        type="password" 
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Cole sua chave aqui (ex: AIzaSy...)"
                        className="flex-1 h-10 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-mono text-sm"
                    />
                    <Button onClick={handleSaveKey} disabled={!apiKey} variant="neon">
                        {isSaved ? <CheckCircle2 className="w-4 h-4 mr-2" /> : null}
                        {isSaved ? "Salvo!" : "Salvar Chave"}
                    </Button>
                </div>
                <div className="text-xs text-muted-foreground">
                    Não tem uma chave? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">Gerar chave gratuita aqui</a>.
                </div>
            </Card>
        </section>

        {/* Data Management Section */}
        <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-border/40 pb-2">
                <Database className="w-5 h-5 text-neon-pink" /> Dados do Sistema
            </h2>
            <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="font-medium">Limpar Histórico Local</h3>
                        <p className="text-sm text-muted-foreground">
                            Você possui <strong className="text-foreground">{totalPosts} posts</strong> salvos no dispositivo.
                        </p>
                    </div>
                    <Button variant="destructive" onClick={handleClearData} disabled={totalPosts === 0}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Apagar Tudo
                    </Button>
                </div>
            </Card>
        </section>

        {/* System Info */}
        <div className="text-center pt-8 text-xs text-muted-foreground">
            Lumina App v4.0.0 • React + Vite + Tailwind
        </div>

      </div>
    </AppLayout>
  )
}

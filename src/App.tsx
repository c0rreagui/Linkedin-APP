import { Routes, Route, Navigate } from "react-router-dom"
import { GeneratorPage } from "@/pages/GeneratorPage"
import { Dashboard } from "@/pages/Dashboard"
import { IdeasPage } from "@/pages/IdeasPage"
import { ProfilePage } from "@/pages/ProfilePage"
import { SettingsPage } from "@/pages/SettingsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/generator" element={<GeneratorPage />} />
      <Route path="/ideas" element={<IdeasPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App

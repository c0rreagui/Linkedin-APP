# Design System: Neon Genesis (Ultimate Edition)

## 1. Visão Geral

Este Design System "Neon Genesis" foca em interfaces imersivas, fundos escuros profundos, acentos neon vibrantes e texturas de vidro (glassmorphism).

## 2. Paleta de Cores (HSL)

### Backgrounds

- **Deep Space (Main BG)**: `hsl(240, 30%, 8%)` - Um preto-azulado profundo para maximizar o contraste.
- **Card/Surface (Glass)**: `hsla(240, 30%, 12%, 0.6)` - Translúcido com backdrop-blur.
- **Overlay**: `hsla(0, 0%, 0%, 0.7)`

### Brand Colors (Neon)

- **Primary (Electric Purple)**: `hsl(270, 80%, 60%)` - Botões principais, estados ativos.
- **Secondary (Cyber Cyan)**: `hsl(190, 90%, 60%)` - Acentos secundários, ícones, gradientes.
- **Accent A (Hot Pink)**: `hsl(320, 85%, 65%)` - Notificações, destaques de alerta.
- **Accent B (Solar Orange)**: `hsl(30, 90%, 60%)` - Gráficos, avisos.

### Semantic Colors

- **Success**: `hsl(145, 80%, 50%)`
- **Warning**: `hsl(45, 90%, 60%)`
- **Error**: `hsl(0, 90%, 65%)`
- **Info**: `hsl(200, 90%, 60%)`
- **Muted**: `hsl(240, 20%, 30%)`

## 3. Tipografia

**Font Family**: `Inter` (Corpo) / `Outfit` (Headings)

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| H1 | 32px | 700 | 1.2 |
| H2 | 24px | 600 | 1.3 |
| H3 | 20px | 600 | 1.4 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Tiny | 12px | 500 | 1.4 |

## 4. Shapes & Effects

### Border Radius

- **Wrapper/Container**: `24px` (1.5rem)
- **Card**: `20px` (1.25rem)
- **Button**: `12px` (0.75rem) / `9999px` (Pill)

### Shadows & Glows

- **Glow Primary**: `0 0 20px hsla(270, 80%, 60%, 0.4)`
- **Glow Secondary**: `0 0 15px hsla(190, 90%, 60%, 0.3)`
- **Glass Shadow**: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`

### Glassmorphism (Utility)

Classe `.glass-panel`:

- BG: `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Backdrop Filter: `blur(12px)`
- Shadow: `0 4px 30px rgba(0, 0, 0, 0.1)`

## 5. UI Components

### Buttons

- **Primary**: Gradiente linear (Primary -> Secondary), texto branco, sombra suave.
- **Ghost/Outline**: Borda fina (Secondary/White 20%), texto colorido, glow no hover.

### Cards

- Fundo escuro semi-transparente.
- Borda sutil no topo (white 10-20%) para simular iluminação.

import { GoogleGenerativeAI } from "@google/generative-ai"

export const GeminiService = {
  generatePost: async (apiKey: string, prompt: string, context?: string[]) => {
    if (!apiKey) throw new Error("API Key é necessária")

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const systemPrompt = `
      Você é um especialista em Marketing Digital e UX Writer para LinkedIn.
      Crie um post engajador, profissional e humano baseando-se no seguinte pedido do usuário.
      
      Diretrizes:
      - Use emojis com moderação mas efetividade.
      - Separe bem os parágrafos para leitura fácil.
      - Inclua 3-5 hashtags relevantes no final.
      - Tom de voz: Profissional, inspirador, autêntico.
      ${context ? `Contexto adicional: ${context.join(", ")}` : ""}
    `

    const result = await model.generateContent(`${systemPrompt}\n\nPedido do usuário: ${prompt}`)
    const response = await result.response
    return response.text()
  },

  enhancePrompt: async (apiKey: string, currentPrompt: string) => {
    if (!apiKey) throw new Error("API Key é necessária")

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const result = await model.generateContent(`Melhore o seguinte prompt para que ele gere um post de LinkedIn mais efetivo e detalhado. Retorne APENAS o prompt melhorado, sem explicações:\n\n"${currentPrompt}"`)
    const response = await result.response
    return response.text()
  }
}

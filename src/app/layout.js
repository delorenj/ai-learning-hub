import '../styles/globals.css'

export const metadata = {
  title: 'AI Workflow Workshop',
  description: 'Immersive AI Development Workshop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://avmcqr47sbsqzweusz6e2iji.agents.do-ai.run/static/chatbot/widget.js"
          data-agent-id="ad4a5991-3637-11f0-bf8f-4e013e2ddde4"
          data-chatbot-id="W8z7VqXb2MtM0TUj0zNoYlF-_gRBezGX"
          data-name="Jarad, kinda Chatbot"
          data-primary-color="#031B4E"
          data-secondary-color="#E5E8ED"
          data-button-background-color="#0061EB"
          data-starting-message="Hello! How can I help you today?"
          data-logo="/static/chatbot/icons/default-agent.svg">
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

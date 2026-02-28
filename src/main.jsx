import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import Lenis from "lenis"
import "./index.css"
import App from "./App.jsx"

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return children
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>
)
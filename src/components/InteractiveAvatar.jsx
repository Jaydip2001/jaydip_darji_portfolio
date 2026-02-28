import { useEffect, useRef, useState } from "react"

const IMAGE_SRC = "/your-photo.png" // put photo inside public folder

function InteractiveAvatar() {
  const canvasRef = useRef(null)

  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const W = 560
    const H = 640
    canvas.width = W
    canvas.height = H

    const img = new Image()
    img.crossOrigin = "anonymous"

    let animId
    let mouse = { x: -9999, y: -9999 }
    let dots = []

    img.onload = () => {
      const offscreen = document.createElement("canvas")
      offscreen.width = W
      offscreen.height = H
      const octx = offscreen.getContext("2d")

      octx.fillStyle = "#000"
      octx.fillRect(0, 0, W, H)

      const scale = Math.max(W / img.width, H / img.height)
      const sw = img.width * scale
      const sh = img.height * scale
      const sx = (W - sw) / 2
      const sy = (H - sh) / 2
      octx.drawImage(img, sx, sy, sw, sh)

      const imageData = octx.getImageData(0, 0, W, H)
      const data = imageData.data

      function getBrightness(px, py) {
        const idx = (Math.floor(py) * W + Math.floor(px)) * 4
        const r = data[idx]
        const g = data[idx + 1]
        const b = data[idx + 2]
        return (r * 0.299 + g * 0.587 + b * 0.114) / 255
      }

      const THRESHOLD = 0.08
      const spacingX = 9
      const spacingY = 6
      dots = []

      for (let x = 2; x < W; x += spacingX) {
        for (let y = 2; y < H; y += spacingY) {
          const brightness = getBrightness(x, y)
          if (brightness > THRESHOLD) {
            dots.push({
              x,
              y,
              baseX: x,
              baseY: y,
              vx: 0,
              vy: 0,
              brightness,
              w: 3 + brightness * 9,
              h: 1.6,
            })
          }
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, W, H)

        dots.forEach((dot) => {
          const dx = dot.x - mouse.x
          const dy = dot.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 90) {
            const angle = Math.atan2(dy, dx)
            const force = (90 - dist) / 90
            dot.vx += Math.cos(angle) * force * 2.2
            dot.vy += Math.sin(angle) * force * 2.2
          }

          dot.vx += (dot.baseX - dot.x) * 0.07
          dot.vy += (dot.baseY - dot.y) * 0.07
          dot.vx *= 0.82
          dot.vy *= 0.82
          dot.x += dot.vx
          dot.y += dot.vy

          const b = dot.brightness
          const r = Math.floor(10 + b * 30)
          const g = Math.floor(100 + b * 140)
          const bl = Math.floor(130 + b * 100)

          ctx.globalAlpha = 0.45 + b * 0.55
          ctx.fillStyle = `rgb(${r},${g},${bl})`
          ctx.fillRect(dot.x - dot.w / 2, dot.y, dot.w, dot.h)
        })

        ctx.globalAlpha = 1
        animId = requestAnimationFrame(animate)
      }

      animate()
    }

    img.src = IMAGE_SRC

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * (W / rect.width)
      mouse.y = (e.clientY - rect.top) * (H / rect.height)
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div className="relative flex justify-center items-center">
      <canvas
        ref={canvasRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setCursor({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          })
        }}
        className="hover:cursor-none"
       style={{
  width: "clamp(280px, 40vw, 420px)",
  background: "transparent",
}}
      />

      {/* Follow cursor + */}
      {hovered && (
        <div
          className="absolute  pointer-events-none text-teal-400 text-5xl "
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          +
        </div>
      )}
    </div>
  )
}

export default InteractiveAvatar
import { useState } from "react"

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <div
        className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]"
        style={{
          transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
        }}
      />
    </div>
  )
}

export default CursorGlow
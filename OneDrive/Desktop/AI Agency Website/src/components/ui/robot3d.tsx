 'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineRobotProps {
  scene?: string
  className?: string
}

/**
 * Minimal 3D Spline Robot Scene (no UI/card/spotlight)
 * Waits until the container has non-zero size before mounting Spline to avoid WebGL errors.
 */
export function SplineRobot({
  scene = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
  className = 'w-full h-full',
}: SplineRobotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // If element already has size, mark ready
    const rect = el.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) {
      setReady(true)
      return
    }

    // Otherwise observe until it gets a size (handles hidden/zero-size mounts)
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect
        if (cr.width > 0 && cr.height > 0) {
          setReady(true)
          ro.disconnect()
          break
        }
      }
    })

    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {!ready ? (
        <div className="w-full h-full flex items-center justify-center">
          <svg
            className="w-8 h-8 animate-spin text-cyan-400"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-8 h-8 animate-spin text-cyan-400" viewBox="0 0 24 24" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            </div>
          }
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore - the lazy import preserves default export shape from the library */}
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      )}
    </div>
  )
}

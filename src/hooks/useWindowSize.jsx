import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 720

export function useWindowSize() {
  const isClient = typeof window === "object"

  const [size, setSize] = useState(getSize())

  // Add, remove event listeners
  useEffect(() => {
    if (!isClient) return false

    function handleResize() {
      setSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
      mobile: isClient ? window.innerWidth < MOBILE_BREAKPOINT : false,
    }
  }

  return size
}

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactNode,
} from 'react'

interface WindowDimensionContextData {
  windowWidth: number
  windowHeight: number
}

interface WindowDimensionProps {
  children: ReactNode
}

const WindowDimensionContext = createContext<WindowDimensionContextData>(
  {} as WindowDimensionContextData,
)

export const WindowDimensionProvider = ({ children }: WindowDimensionProps) => {
  const getWindowWidth = useCallback((): number => {
    const { innerWidth } = window

    return innerWidth
  }, [])

  const getWindowHeight = useCallback((): number => {
    const { innerHeight } = window

    return innerHeight
  }, [])

  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth())
  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight())

  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(getWindowWidth())
      setWindowHeight(getWindowHeight())
      console.log(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [getWindowHeight, getWindowWidth])

  return (
    <WindowDimensionContext.Provider value={{ windowWidth, windowHeight }}>
      {children}
    </WindowDimensionContext.Provider>
  )
}

export function useWindow(): WindowDimensionContextData {
  const context = useContext(WindowDimensionContext)

  return context
}
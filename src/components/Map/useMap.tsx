import { useContext, useEffect } from 'react'
import { MapContext } from './MapContext'
import { MapComponent } from './MapComponent'

interface useMapArgs {
  height: number,
  data: any,
  center?: [number, number]
}

export const useMap = ({ height, data, center }: useMapArgs) => {
  const { setHeight, setData, setCenter, center: contextCenter } = useContext(MapContext)
  useEffect(() => {
    setHeight(height)
    return () => {
      console.log('CALLED')
      setHeight(0)
    }
  }, [height])

  useEffect(() => {
    if (data !== undefined) {
      setData(data)
    }
  }, [data])

  useEffect(() => {
    if (center && contextCenter[0] !== center[0] && contextCenter[1] !== center[1]) {
      setCenter(center)
    }
  }, [center])
}

useMap.fragments = MapComponent.fragments

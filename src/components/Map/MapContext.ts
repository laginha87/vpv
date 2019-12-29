import { createContext } from 'react'
interface MapContextI {
  data: any;
  setData: (any) => void;
  setHeight: (any) => void;
  setCenter: (any) => void;
  center: [number, number];
  mapHeight: number;
  loading: boolean;
}
export const MapContext = createContext<MapContextI>({
  data: { fires: [], campaigns: [] },
  center: [1, 1],
  mapHeight: 0,
  loading: true,
  setData: () => { },
  setHeight: () => { },
  setCenter: () => {}
})

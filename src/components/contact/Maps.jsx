'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const center = {
  lat: -16.600535,
  lng: -68.176633
}

const Maps = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const placeholderKey = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'
  const hasValidKey = apiKey && apiKey !== placeholderKey

  if (!hasValidKey) {
    return (
      <div className='flex h-full items-center justify-center rounded-3xl bg-slate-900 p-6 text-center text-slate-300'>
        Clave de Google Maps no válida. Reemplaza `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` en `.env.local` con tu clave real y reinicia el servidor.
      </div>
    )
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || '',
    libraries: ['places']
  })

  if (loadError) {
    return (
      <div className='flex h-full items-center justify-center rounded-3xl bg-slate-900 p-6 text-center text-slate-300'>
        <div>
          <p className='font-semibold'>Error al cargar Google Maps.</p>
          <p className='mt-2'>Verifica que la clave API sea válida y que las restricciones del proyecto sean correctas.</p>
          <p className='mt-2 text-sm text-slate-400'>Detalles: {loadError.message}</p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className='flex h-full items-center justify-center rounded-3xl bg-slate-900 p-6 text-center text-slate-300'>
        Cargando mapa...
      </div>
    )
  }

  return (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={13}>
      <Marker position={center} />
    </GoogleMap>
  )
}

export default Maps

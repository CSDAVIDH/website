'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const center = {
    lat: -16.600535,
    lng: -68.176633
  }
  return (

    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} >
      <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={13} >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>

  )

}
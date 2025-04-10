import { useEffect, useState } from 'react'
import { useApi } from './useApi'

export const useAirport = () => {
  const { baseUrl } = useApi()
  const [airports, setAirports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAirports = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/airports`)
      const data = await response.json()
      setAirports(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAirports()
  }, [])

  return { airports, loading, error, reload: fetchAirports }
}

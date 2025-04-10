import { useEffect, useState } from 'react'
import { useApi } from './useApi'

export const usePassengers = () => {
  const { baseUrl } = useApi()
  const [passengers, setPassengers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPassengers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/passengers`)
      const data = await response.json()
      setPassengers(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPassengers()
  }, [])

  return { passengers, loading, error, reload: fetchPassengers }
}

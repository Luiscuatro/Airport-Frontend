import { useEffect, useState } from 'react'
import { useApi } from './useApi'

export const usePlanes = () => {
  const { baseUrl } = useApi()
  const [planes, setPlanes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPlanes = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/planes`)
      const data = await response.json()
      setPlanes(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPlanes()
  }, [])

  return { planes, loading, error, reload: fetchPlanes }
}

import React, { createContext, useState } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

const API_BASE_URL = 'http://localhost:8080/'

export const ApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const get = async (endpoint, params = {}) => {
    setLoading(true)
    try {
      const res = await apiClient.get(endpoint, { params })
      return res.data
    } catch (err) {
      setError(err.response?.data || 'Error')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const post = async (endpoint, data = {}) => {
    setLoading(true)
    try {
      const res = await apiClient.post(endpoint, data)
      return res.data
    } catch (err) {
      setError(err.response?.data || 'Error')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const put = async (endpoint, data = {}) => {
    setLoading(true)
    try {
      const res = await apiClient.put(endpoint, data)
      return res.data
    } catch (err) {
      setError(err.response?.data || 'Error')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const remove = async (endpoint) => {
    setLoading(true)
    try {
      const res = await apiClient.delete(endpoint)
      return res.data
    } catch (err) {
      setError(err.response?.data || 'Error')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return (
    <ApiContext.Provider value={{ get, post, put, remove, loading, error, setError }}>
      {children}
    </ApiContext.Provider>
  )
}

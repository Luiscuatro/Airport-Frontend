import { useState, useEffect, useCallback } from 'react'
import { useApi } from './useApi'

export const useTickets = () => {
  const { get, post, put, remove, loading } = useApi()
  const [tickets, setTickets] = useState([])

  const fetchTickets = useCallback(async () => {
    try {
      const data = await get('/tickets')
      setTickets(data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }, [get])

  const getTicketById = useCallback(async (id) => {
    try {
      return await get(`/tickets/${id}`)
    } catch (error) {
      console.error(`Error fetching ticket with id ${id}:`, error)
      return null
    }
  }, [get])

  const createTicket = useCallback(async (ticketData) => {
    try {
      const newTicket = await post('/tickets', ticketData)
      setTickets(prev => [...prev, newTicket])
      return newTicket
    } catch (error) {
      console.error('Error creating ticket:', error)
      return null
    }
  }, [post])

  const updateTicket = useCallback(async (id, ticketData) => {
    try {
      const updated = await put(`/tickets/${id}`, ticketData)
      setTickets(prev => prev.map(t => (t.id === id ? updated : t)))
      return updated
    } catch (error) {
      console.error(`Error updating ticket ${id}:`, error)
      return null
    }
  }, [put])

  const deleteTicket = useCallback(async (id) => {
    try {
      await remove(`/tickets/${id}`)
      setTickets(prev => prev.filter(t => t.id !== id))
      return true
    } catch (error) {
      console.error(`Error deleting ticket ${id}:`, error)
      return false
    }
  }, [remove])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  return {
    tickets,
    loading,
    fetchTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
  }
}

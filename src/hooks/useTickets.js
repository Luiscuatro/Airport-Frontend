import { useState, useCallback, useEffect } from 'react'
import { useApi } from './useApi'

export const useTickets = () => {
  const { get, post, put, remove, loading } = useApi()
  const [tickets, setTickets] = useState([])

  const fetchTickets = useCallback(async () => {
    try {
      const data = await get('/tickets')
      setTickets(data)
    } catch (err) {
      console.error('Error fetching tickets', err)
    }
  }, [get])

  const getTicketById = useCallback(async (id) => {
    try {
      return await get(`/tickets/${id}`)
    } catch (err) {
      console.error(`Error fetching ticket ${id}`, err)
      return null
    }
  }, [get])

  const createTicket = useCallback(async (ticketData) => {
    try {
      const newTicket = await post('/tickets', ticketData)
      setTickets(prev => [...prev, newTicket])
      return newTicket
    } catch (err) {
      console.error('Error creating ticket', err)
      return null
    }
  }, [post])

  const updateTicket = useCallback(async (id, ticketData) => {
    try {
      const updatedTicket = await put(`/tickets/${id}`, ticketData)
      setTickets(prev =>
        prev.map(t => (t.id === id ? updatedTicket : t))
      )
      return updatedTicket
    } catch (err) {
      console.error(`Error updating ticket ${id}`, err)
      return null
    }
  }, [put])

  const deleteTicket = useCallback(async (id) => {
    try {
      await remove(`/tickets/${id}`)
      setTickets(prev => prev.filter(t => t.id !== id))
      return true
    } catch (err) {
      console.error(`Error deleting ticket ${id}`, err)
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

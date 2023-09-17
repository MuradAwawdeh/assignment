import { useState, useCallback } from 'react';
import tickets from "../data/tickets.json";

const useTickets = () => {
    const [ticketsList, setTicketsList] = useState(tickets);
    const [selectedTicket, setSelectedTicket] = useState(tickets[0]);

    const selectTicket = useCallback((ticket) => {
        setSelectedTicket(ticket);
    }, []);

    const updateTicket = useCallback((id, title, goal) => {
        let updatedTicket;
        setTicketsList(prev => {
            return prev.map(item => {
                if (item._id === id) {
                    updatedTicket = {
                        ...item,
                        Title: title,
                        Goal: goal,
                    };
                    setSelectedTicket(updatedTicket);
                    return updatedTicket;
                }
                return item;
            });
        });
    }, []);

    return {
        ticketsList,
        selectedTicket,
        selectTicket,
        updateTicket,
    };
};

export default useTickets;
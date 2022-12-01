import React from 'react'

const ticketData = [
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: new Date(),
        author: 'Paul Sonda',
        status: 'closed',
    },
]

const TicketStatus = () => {
    return (
        <div>
            <h1>Ticket Status</h1>

            {ticketData.map((ticket) => (
                <div>
                    <div>
                        <h3>{ticket.title}</h3>
                        <p>
                            Created on {ticket.timestamp.toString()} Agent:{' '}
                            {ticket.author}
                        </p>
                    </div>
                    <div>{ticket.status}</div>
                </div>
            ))}
        </div>
    )
}

export default TicketStatus

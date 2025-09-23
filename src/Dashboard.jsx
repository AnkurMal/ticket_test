import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [active, setActive] = useState(0);

  const tickets = [
    {text: "First Ticket"},
    {text: "Second Ticket"}
  ]
  
  return (
    <div className="d-flex flex-row h-100">
      <ul className="list-group list-group-flush border-end border-3">
        <li className="list-group-item">
          <div className="d-flex flex-row justify-content-between gap-5">
            <p className="fs-3 fw-semibold">My Tickets</p>
            <i className="bi bi-filter fs-2"></i>
          </div>
        </li>
        {tickets.map((ticket, index) => 
          <TicketLink 
            key={index} 
            index={index}
            text={ticket.text}>
          </TicketLink>)}
      </ul>
      <div className="p-3">
        <p>YEAH</p>
      </div>
    </div>
  )

  function TicketLink({index, text}) {
    return(
      <Link 
        to="#" 
        className={`list-group-item list-group-item-action ${index===active && "active"}`}
        onClick={() => setActive((active+1) % tickets.length)}>
          {text}
      </Link>
    )
  }
}

export default Dashboard;
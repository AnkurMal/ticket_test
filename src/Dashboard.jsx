import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({username}) {
  const [active, setActive] = useState(0);

  const tickets = [
    {text: "First Ticket"},
    {text: "Second Ticket"}
  ]
  
  return (
    <div className="d-flex flex-row h-100">
      <ul className="list-group list-group-flush border-end border-3" style={{width: '300px'}}>
        <div className="d-flex flex-row list-group-item justify-content-between gap-5">
          <p className="fs-3 fw-semibold m-0">My Tickets</p>
          <i className="bi bi-filter fs-2"></i>
        </div>
        {tickets.map((ticket, index) => 
          <TicketLink 
            key={index} 
            index={index}
            text={ticket.text}>
          </TicketLink>)}
      </ul>
      <div className="d-flex flex-row flex-grow-1 p-2">
        <p className="fs-3 fw-semibold">First Ticket</p>
        {
          username?
            <button type="button" class="btn btn-primary align-self-start ms-auto">{username}</button> :
            <div className="dropdown ms-auto">
              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Login / Register 
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/login" className="dropdown-item">Login</Link></li>
                <li><Link to="/register" className="dropdown-item">Register</Link></li>
              </ul>
            </div>
        }
      </div>
    </div>
  )

  function TicketLink({index, text}) { 
    return( 
      <button 
        type="button"
        className={`list-group-item list-group-item-action ${index===active && "active"}`} 
        style={{wordBreak: 'break-word'}}
        onClick={() => setActive((active+1) % tickets.length)}> 
          {text} 
      </button> 
    ) 
  }
}

export default Dashboard;
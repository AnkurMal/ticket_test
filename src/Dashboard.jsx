import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard({ username, tickets, setTickets, api, Message }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const [gotTickets, setGotTickets] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await fetch(
          `${api}tickets?username=${username.toString()}`,
        );
        const data = await res.json();
        setTickets(data.messages);
        setGotTickets(data.messages.length !== 0);
      } catch {}
    };

    getTickets().then(() => {});
  }, [username]);

  return (
    <div className="d-flex flex-row vh-100">
      {username && tickets?.length > 0 && (
        <ul
          className="list-group list-group-flush border-end border-3 overflow-auto"
          style={{ width: "300px" }}
        >
          <div className="d-flex flex-row list-group-item justify-content-between gap-5">
            <p className="fs-3 fw-semibold m-0">My Tickets</p>
            <i className="bi bi-filter fs-2"></i>
          </div>
          {tickets.map((ticket, index) => (
            <TicketLink
              key={index}
              index={index}
              text={ticket.title}
              date={new Date(Number(ticket.list[0].time))}
            ></TicketLink>
          ))}
        </ul>
      )}

      <div className="d-flex flex-column flex-fill" style={{ minHeight: 0 }}>
        <div className="d-flex flex-row p-2 flex-shrink-0">
          <p className="fs-3 fw-semibold">{tickets[active]?.title}</p>
          <button
            type="button"
            className="btn btn-primary ms-auto me-3 my-auto mt-1"
            onClick={() => navigate("/createticket")}
            disabled={!username && true}
          >
            Create
          </button>
          {username ? (
            <div className="dropdown my-auto mt-1">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {username}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/"
                    className="dropdown-item"
                    onClick={() => localStorage.removeItem("username")}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown my-auto mt-1">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login / Register
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="dropdown-item">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {username ? (
          gotTickets === null ? (
            <p className="placeholder-glow m-3 mt-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className={`placeholder placeholder-lg col-11 mb-4 ms-2`}
                ></span>
              ))}
            </p>
          ) : !gotTickets ? (
            <div className="card mx-3 my-4 border-black">
              <div className="card-header">No Tickets</div>
              <div className="card-body">
                You currently do not have any tickets.
              </div>
            </div>
          ) : (
            <div className="flex-fill overflow-auto px-2">
              <DisplayMessages
                active={active}
                tickets={tickets}
                username={username}
                setTickets={setTickets}
                Message={Message}
              />
            </div>
          )
        ) : (
          <div className="card mx-3 my-4 border-black">
            <div className="card-header">No Tickets</div>
            <div className="card-body">
              Please login/register to view/create tickets.
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function TicketLink({ index, text, date }) {
    return (
      <button
        type="button"
        className={`list-group-item list-group-item-action fw-bold ${
          index === active && "active"
        }`}
        style={{ wordBreak: "break-word" }}
        onClick={() => setActive(index)}
      >
        <div className="d-flex flex-row align-items-center justify-content-between">
          <p className="fw-semibold fs-5 m-0">{text}</p>
          <p className="fw-light m-0">{date.toLocaleDateString()}</p>
        </div>
      </button>
    );
  }
}

function DisplayMessages({ tickets, setTickets, active, username, Message }) {
  console.log(tickets);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const reply = form.reply.value;
    form.reset();

    setTickets((prev) => {
      const newTickets = [...prev];
      const ticket = { ...newTickets[active] };
      ticket.list = [
        ...ticket.list,
        {
          message: reply,
          time: Date.now(),
          by: Message.User,
        },
      ];

      newTickets[active] = ticket;
      return newTickets;
    });
  };

  return (
    <>
      <div className="card mx-1 mb-3 bg-dark-subtle border-black">
        <div className="card-header">Reply</div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="reply"
                name="reply"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      {tickets[active]?.list.map((item, index) => (
        <div
          key={index}
          className={`card mx-1 mb-3 ${Message.User === item.by ? "border-primary" : "border-danger"}`}
        >
          <div className="card-header">{`${Message.User === item.by ? username : "Bot"}, on ${new Date(Number(item.time))}`}</div>
          <div className="card-body">{item.message}</div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;

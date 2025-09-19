function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100">
      <a href="/" className="d-flex align-items-center link-dark text-decoration-none">
        <span className="fs-4">BOA</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-people me-2"></i>
            Customers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-calendar-event me-2"></i>
            Meeting
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-ticket-detailed me-2"></i>
            Tickets
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-chat-dots me-2"></i>
            Messages
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-gear me-2"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
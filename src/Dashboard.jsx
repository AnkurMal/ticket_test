function Dashboard() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="d-flex flex-row justify-content-between">
          <p class="fs-3 fw-semibold">My Tickets</p>
          <i class="bi bi-filter fs-2"></i>
        </div>
      </li>
      <li className="list-group-item">First ticket</li>
      <li className="list-group-item">Second ticket</li>
    </ul>
  )
}

export default Dashboard;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollasped] = useState(false);

  const links = [
    { href: "/", text: "Dashboard", icon: "bi-speedometer2" },
    { href: "/customers", text: "Customers", icon: "bi-people" },
    { href: "/meeting", text: "Meeting", icon: "bi-calendar-event" },
    { href: "/tickets", text: "Tickets", icon: "bi-ticket-detailed" },
    { href: "/messages", text: "Messages", icon: "bi-chat-dots" },
    { href: "/settings", text: "Settings", icon: "bi-gear" },
  ];

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 vh-100 bg-dark">
      <div className="d-flex flex-row justify-content-between">
        {!collapsed &&
        <a href="/" className="d-flex text-decoration-none link-light me-3">
          <span className="fs-4">Ticketing System</span>
        </a>}
        <button 
          type="button" 
          className="btn btn-secondary bg-dark" 
          onClick={() => setCollasped(!collapsed)}>
            <i className={`bi ${collapsed ? "bi-chevron-bar-right" : "bi-chevron-bar-left"}`}></i>
        </button>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map((link, index) => (
          <SidebarLink
            key={index}
            href={link.href}
            text={link.text}
            icon={link.icon}
            collapsed={collapsed}
          />
        ))}
      </ul>
    </div>
  );
}

function SidebarLink({ href, text, icon, collapsed }) {
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <li>
      <Link to={href} className={`nav-link link-light  ${active && "active"}`}>
        <i className={`bi ${icon} ${!collapsed && "me-2"}`}></i>
        {!collapsed && text}
      </Link>
    </li>
  );
}

export default Sidebar;
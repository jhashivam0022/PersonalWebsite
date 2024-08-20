
import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu Icon */}
      <div className="navbar-header">
        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" className="title">Company LOGO</Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <DropdownButton id="dropdown-basic-button" title="Project Management">
          <Dropdown.Item href="#">Project Requirements</Dropdown.Item>
          <Dropdown.Item href="#">OTDs/KPIs</Dropdown.Item>
          <Dropdown.Item href="#">Risk Management</Dropdown.Item>
          <Dropdown.Item href="#">SOW/Quarterly</Dropdown.Item>
          <Dropdown.Item href="#">Reports</Dropdown.Item>
          <Dropdown.Item href="#">Budgeting</Dropdown.Item>
          <Dropdown.Item href="#">Innovation (PLM)</Dropdown.Item>
          <Dropdown.Item href="#">Third Party Management</Dropdown.Item>
          <Dropdown.Item href="https://outlook.live.com/mail/about/index_en.html">Outlook</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Work Force Management">
          <Dropdown.Item href="#">Time & Attendance</Dropdown.Item>
          <Dropdown.Item href="#">Leaves</Dropdown.Item>
          <Dropdown.Item href="#">Remote Work</Dropdown.Item>
          <Dropdown.Item href="#">Performance Management</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Talent Acquisition">
          <Dropdown.Item href="#">WorkForce Planning</Dropdown.Item>
          <Dropdown.Item href="#">Recruitment</Dropdown.Item>
          <Dropdown.Item href="#">Onboarding</Dropdown.Item>
          <Dropdown.Item href="#">Gap Analysis</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Payroll & Expense">
          <Dropdown.Item href="#">Payroll & Management</Dropdown.Item>
          <Dropdown.Item href="#">Awards & Recognition</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Asset Tracking (SW)">
          <Dropdown.Item href="#">L&D Skillmap</Dropdown.Item>
          <Dropdown.Item href="#">IT-itop</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="CI/CD">
          {/* Uncomment if you want to add items */}
          {/* <Dropdown.Item href="#">JIRA</Dropdown.Item>
          <Dropdown.Item href="#">Confluence</Dropdown.Item>
          <Dropdown.Item href="#">BitBucket</Dropdown.Item> */}
        </DropdownButton>

        <li>
          <NavLink to="/help" activeClassName="active">Help</NavLink>
        </li>
      </ul>
    </nav>
  );
};

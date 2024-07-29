import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav class="navbar navbar-dark bg-primary">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </head>
      <ul className="menuOpen">
        <li>
          <Link to="/" className="title">Company LOGO</Link>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>

        {/* <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li> */}
        <DropdownButton id="dropdown-basic-button" title="Project Management">
          <Dropdown.Item href="">Project Requirements</Dropdown.Item>
          <Dropdown.Item href="">OTDs/KPIs</Dropdown.Item>
          <Dropdown.Item href="">Risk Management</Dropdown.Item>
          <Dropdown.Item href="">SOW/Quarterly</Dropdown.Item>
          <Dropdown.Item href="">Reports</Dropdown.Item>
          <Dropdown.Item href="">Budgetting</Dropdown.Item>
          <Dropdown.Item href="">Innovation (PLM)</Dropdown.Item>
          <Dropdown.Item href="">Thrid Party Management</Dropdown.Item>
          <Dropdown.Item href="https://outlook.live.com/mail/about/index_en.html">Outlook</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Work Force Management">
          <Dropdown.Item href="">Time & Attendance</Dropdown.Item>
          <Dropdown.Item href="">Leaves</Dropdown.Item>
          <Dropdown.Item href="">Remote Work</Dropdown.Item>
          <Dropdown.Item href="">Performance Managment</Dropdown.Item>
        </DropdownButton>
        
        <DropdownButton id="dropdown-basic-button" title="Talent Acquisition">
          <Dropdown.Item href="">WorkForce Planning</Dropdown.Item>
          <Dropdown.Item href="">Recruitment</Dropdown.Item>
          <Dropdown.Item href="">Onboarding</Dropdown.Item>
          <Dropdown.Item href="">Gap Analysis</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Payroll & Expense">
          <Dropdown.Item href="https://www.helpdesk.com/">payroll & Management</Dropdown.Item>
          <Dropdown.Item href="">Awards & Recognition</Dropdown.Item>
        </DropdownButton>
        
        <DropdownButton id="dropdown-basic-button" title="Asset Tracking (SW)">
          <Dropdown.Item href="">L&D Skillmap</Dropdown.Item>
          <Dropdown.Item href="">IT-itop</Dropdown.Item>
        </DropdownButton>
        
        <DropdownButton id="dropdown-basic-button" title="CI/CD">
          {/* <Dropdown.Item href="">JIRA</Dropdown.Item>
          <Dropdown.Item href="">Confluence</Dropdown.Item>
          <Dropdown.Item href="">BitBucket</Dropdown.Item> */}
        </DropdownButton>
        <li>
          <NavLink to="/help" activeClassName="active">Help</NavLink>
        </li>
      </ul>

    </nav>
  );
};

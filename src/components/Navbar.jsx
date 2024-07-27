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
        <DropdownButton id="dropdown-basic-button" title="HR">
          <Dropdown.Item href="https://hrmshry.nic.in/">MEMS</Dropdown.Item>
          <Dropdown.Item href="https://outlook.live.com/mail/about/index_en.html">Outlook</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="PMO">
          <Dropdown.Item href="https://www.atlassian.com/software/jira">JIRA</Dropdown.Item>
          <Dropdown.Item href="https://www.atlassian.com/software/confluence">Confluence</Dropdown.Item>
          <Dropdown.Item href="https://bitbucket.org/product/">BitBucket</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="IT Support">
          <Dropdown.Item href="https://www.helpdesk.com/">iTop</Dropdown.Item>
          <Dropdown.Item href="https://www.mca.gov.in/content/mca/global/en/home.html">OneMO</Dropdown.Item>
          <Dropdown.Item href="https://www.naukri.com/">PLM</Dropdown.Item>
        </DropdownButton>
        <li>
          <NavLink to="/help" activeClassName="active">Help</NavLink>
        </li>
      </ul>

    </nav>
  );
};

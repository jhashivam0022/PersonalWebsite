import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiFillCaretDown } from "react-icons/ai";

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
        {/* <Link to="/" className="title">MOSS</Link> */}&nbsp;
        <Link to="/" className="title" style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textDecoration: 'none', fontFamily:"Times New Roman"}}>
          MOSS
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <DropdownButton id="dropdown-basic-button" title={<span>Project Management < AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">JIRA</Dropdown.Item>
          <Dropdown.Item href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer">Confluence</Dropdown.Item>
          <Dropdown.Item href="https://bitbucket.org/product" target="_blank" rel="noopener noreferrer">BitBucket</Dropdown.Item>
          <Dropdown.Item href="https://hbr.org/2012/06/managing-risks-a-new-framework" target="_blank" rel="noopener noreferrer">Risk Management</Dropdown.Item>
          <Dropdown.Item href="https://mint.intuit.com/" target="_blank" rel="noopener noreferrer">Budget</Dropdown.Item>
          <Dropdown.Item href="https://www.sap.com/products/scm/plm-r-d-engineering/what-is-product-lifecycle-management.html" target="_blank" rel="noopener noreferrer">PLM</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title={<span>Human Resource <AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://www.zoho.com/in/payroll/help/employee/portal-overview.html" target="_blank" rel="noopener noreferrer">MEMS</Dropdown.Item>
          <Dropdown.Item href="https://www.ismartrecruit.com/blog-employee-onboarding-portal" target="_blank" rel="noopener noreferrer">Onboarding</Dropdown.Item>
          <Dropdown.Item href="#" target="_blank" rel="noopener noreferrer">Purchase Portal</Dropdown.Item>
          <Dropdown.Item href="#" target="_blank" rel="noopener noreferrer">Training Portal</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title={<span>IT Support <AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://www.microsoft.com/en-in/microsoft-365/outlook/web-email-login-for-outlook" target="_blank" rel="noopener noreferrer">OutLook</Dropdown.Item>
          <Dropdown.Item href="https://www.onedesk.com/customer-apps/ticket-portal-software/" target="_blank" rel="noopener noreferrer">Itop</Dropdown.Item>
          <Dropdown.Item href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">SPS</Dropdown.Item>
          <Dropdown.Item href="https://nsg.gov.in/" target="_blank" rel="noopener noreferrer">Security Portal</Dropdown.Item>
          <Dropdown.Item href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer">Teams</Dropdown.Item>
        </DropdownButton>

        {/* <DropdownButton id="dropdown-basic-button" title={<span>Payroll & Expense <AiFillCaretDown /></span>}>
          <Dropdown.Item href="#" target="_blank" rel="noopener noreferrer">Payroll & Management</Dropdown.Item>
          <Dropdown.Item href="#" target="_blank" rel="noopener noreferrer">Awards & Recognition</Dropdown.Item>
        </DropdownButton> */}

        <DropdownButton id="dropdown-basic-button" title={<span>Asset Tracking <AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://www.tdmsystems.com/en/solutions/tool-management/what-is-tool-data-management/" target="_blank" rel="noopener noreferrer">Tool Management</Dropdown.Item>
          <Dropdown.Item href="https://www.link-labs.com/asset-tracking" target="_blank" rel="noopener noreferrer">Asset Tracking</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title={<span>Employee Portal <AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://www.olx.com/" target="_blank" rel="noopener noreferrer">Mobis Kart</Dropdown.Item>
          <Dropdown.Item href=" https://hyundaimobisin.com/" target="_blank" rel="noopener noreferrer">Mobis Portal</Dropdown.Item>
          <Dropdown.Item href="https://www.blablacar.in/ride-sharing/hyderabad" target="_blank" rel="noopener noreferrer">Ride Sharing</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title={<span>Help <AiFillCaretDown style={{ marginLeft: "5px", verticalAlign: "middle" }} /></span>}>
          <Dropdown.Item href="https://hyundaimobisin.com/products/genuine-parts" target="_blank" rel="noopener noreferrer">Company Products</Dropdown.Item>
          <Dropdown.Item href="https://www.gadgets360.com/news" target="_blank" rel="noopener noreferrer">Technology updates</Dropdown.Item>
          <Dropdown.Item href="https://business.udemy.com/" target="_blank" rel="noopener noreferrer">Trainings tutorial</Dropdown.Item>
        </DropdownButton>
      </ul>
    </nav>
  );
};

import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessIcon from '@mui/icons-material/Business';
import BarChartIcon from '@mui/icons-material/BarChart';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { FaDatabase } from "react-icons/fa";
import { PiDatabase } from "react-icons/pi";
import FolderIcon from '@mui/icons-material/Folder';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import BackupIcon from '@mui/icons-material/Backup';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import PanoramaPhotosphereOutlinedIcon from '@mui/icons-material/PanoramaPhotosphereOutlined';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import LanIcon from '@mui/icons-material/Lan';
import RouterIcon from '@mui/icons-material/Router';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = ({ isVisible }) => {
  const [open, setOpen] = useState({
    cloud: false,
    billing: false,
    domain: false,
    tickets: false,
    utilities: false,
  });

  const handleClick = (section) => {
    setOpen((prevState) => {
      const newState = {
        cloud: false,
        billing: false,
        domain: false,
        tickets: false,
        utilities: false,
      };

      return {
        ...newState,
        [section]: !prevState[section],
      };
    });
  };


  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'collapsed'}`}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Cloud Section */}
        <ListItem button onClick={() => handleClick("cloud")}>
          <ListItemText primary="Cloud" />
          {open.cloud ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.cloud} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem button className="nested">
              <ListItemIcon>
                <TableRowsIcon />
              </ListItemIcon>
              <ListItemText primary="Instances" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <FolderIcon/>
              </ListItemIcon>
              <ListItemText primary="Clusters" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
              <FolderIcon/>
              </ListItemIcon>
              <ListItemText primary="Cluster Templates" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
              <PiDatabase />
              </ListItemIcon>
              <ListItemText primary="Database Instances" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <NetworkCheckIcon />
              </ListItemIcon>
              <ListItemText primary="Networks" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <RouterIcon />
              </ListItemIcon>
              <ListItemText primary="Router" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <LanIcon />
              </ListItemIcon>
              <ListItemText primary="Port" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <PanoramaPhotosphereOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Zones" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <SecurityOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Security Groups" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <CallSplitIcon />
              </ListItemIcon>
              <ListItemText primary="Floating IPs" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <KeyOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="SSH Keys" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <FaDatabase />
              </ListItemIcon>
              <ListItemText primary="Volumes" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
              <FaDatabase />
              </ListItemIcon>
              <ListItemText primary="Volume Backups" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
              <FaDatabase />
              </ListItemIcon>
              <ListItemText primary="Volume SnapShots" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <BackupIcon />
              </ListItemIcon>
              <ListItemText primary="My images" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <PermMediaIcon />
              </ListItemIcon>
              <ListItemText primary="Object Store" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Heat stacks" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Heat resource type" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Heat template versions" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <AltRouteIcon />
              </ListItemIcon>
              <ListItemText primary="Load Balancer" />
            </ListItem>
          </List>
        </Collapse>

        {/* Billing Section */}
        <ListItem button onClick={() => handleClick("billing")}>
          <ListItemText primary="Billing" />
          {open.billing ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.billing} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem button className="nested">
              <ListItemIcon>
                <RestorePageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="Invoices" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <Inventory2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Order services" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <ShoppingCartIcon/>   
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Billing History" />
            </ListItem>
          </List>
        </Collapse>

        {/* Domain Section */}
        <ListItem button onClick={() => handleClick("domain")}>
          <ListItemText primary="Domain" />
          {open.domain ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.domain} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="nested">
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="My Domain" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <BusinessIcon/>
              </ListItemIcon>
              <ListItemText primary="Domain Contact" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="Register Domain" />
            </ListItem>
            <ListItem button className="nested">
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="Transfer Domain" />
            </ListItem>
          </List>
        </Collapse>

        {/* Tickets Section */}
        <ListItem button onClick={() => handleClick("tickets")}>
          <ListItemText primary="Tickets" />
          {open.tickets ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.tickets} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className="nested">
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick("utilities")}>
          <ListItemText primary="Utilities" />
          {open.utilities ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open.utilities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/utilities" className="nested">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Operations" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
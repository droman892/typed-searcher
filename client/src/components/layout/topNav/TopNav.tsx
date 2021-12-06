import React from 'react';
import './TopNav.css';
import { Navbar, Tabs, Tab, Icon, NavItem, Divider, Dropdown } from 'react-materialize';
import { BiBookOpen } from "react-icons/bi";

const TopNav = () => {
    
    return (

        <Navbar
            alignLinks="right"
            brand={
                <a className="brand-logo" href="#">
                    <BiBookOpen/>
                </a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            extendWith={
                <Tabs className="tabs-transparent">
                    <Tab active className="white-text" title="Best Sellers"/>
                    <Tab className="white-text" title="Deals"/>
                    <Tab className="white-text" title="Coupons"/>
                    <Tab className="white-text" title="Buy Again"/>
                </Tabs>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="#">
                About
            </NavItem>
            <NavItem href="#">
                News
            </NavItem>
            <NavItem href="#">
                Contact
            </NavItem>

            <Dropdown
                id="Dropdown_14"
                options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    outDuration: 250
                }}
                trigger={<a href="#">Account{' '}<Icon right>arrow_drop_down</Icon></a>}
            >
                <a href="#">
                    Profile
                </a>
                <a href="#">
                    Orders
                </a>
                <a href="#">
                    Subscribe
                </a>
                <a href="#">
                    Billing
                </a>
                <a href="#">
                    Switch Account
                </a>
                <Divider />
                <a href="#">
                    Sign Out
                </a>
            </Dropdown>
        </Navbar>
            
    )
}

export default TopNav;
import React from 'react';
import {HeaderContainer, LogoContainer} from "../UI/Containers";
import {UsersIcon} from "../../assets/Icons";
import {Nav} from "../UI/Nav";
import {Link, NavLink} from "react-router-dom";
import {SmallLabel} from "../UI/Labels";

const Header = () => {
    let activeStyle = {borderBottom: "3px solid #3D9AED"};
    return (
        <HeaderContainer>
            <Link to="/">
                <LogoContainer>
                    <UsersIcon/>
                </LogoContainer>
            </Link>
            <Nav>
                <NavLink
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    to="customers"><SmallLabel>dashboard</SmallLabel>
                </NavLink>
                <NavLink
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined}
                    to="Average"><SmallLabel>average ages</SmallLabel></NavLink>
                <NavLink
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined}
                    to="new"><SmallLabel>new Customer</SmallLabel></NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;

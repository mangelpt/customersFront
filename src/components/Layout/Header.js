import React from 'react';
import {HeaderContainer, LogoContainer} from "../UI/Containers";
import {UsersIcon} from "../../assets/Icons";
import {Nav} from "../UI/Nav";
import {Link} from "react-router-dom";
import {SmallLabel} from "../UI/Labels";

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <LogoContainer>
                    <UsersIcon/>
                </LogoContainer>
            </Link>
            <Nav>
                <Link to="customers"><SmallLabel>dashboard</SmallLabel></Link>
                <Link to="Average"><SmallLabel>average ages</SmallLabel></Link>
                <Link to="new"><SmallLabel>new Customer</SmallLabel></Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;

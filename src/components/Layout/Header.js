import React from 'react';
import {HeaderContainer, LogoContainer} from "../UI/Containers";
import {UsersIcon} from "../../assets/Icons";
import {Nav} from "../UI/Nav";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <UsersIcon/>
            </LogoContainer>

            <Nav>

            </Nav>
        </HeaderContainer>
    );
};

export default Header;

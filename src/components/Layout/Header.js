import React from "react";
import styled from "styled-components";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <HeaderDiv>
            <header className="header">
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="Meals Image" />
            </div>
        </HeaderDiv>
    );
};

export default Header;

const HeaderDiv = styled.div`
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 5rem;
        background-color: #8a2b06;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 10;
    }

    .main-image {
        width: 100%;
        height: 25rem;
        z-index: -1;
        overflow: hidden;
    }

    img {
        width: 110%;
        height: 100%;
        object-fit: cover;
        transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
`;

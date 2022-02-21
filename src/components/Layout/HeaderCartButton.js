import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styled from "styled-components";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const btnClasses = `button ${btnHighlighted ? "bump" : ""}`;
    useEffect(() => {
        if (items.length === 0) return;
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <CartButton>
            <button className={btnClasses} onClick={props.onClick}>
                <span className="icon">
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className="badge">{numberOfCartItems}</span>
            </button>
        </CartButton>
    );
};

export default HeaderCartButton;

const CartButton = styled.div`
    .button {
        cursor: pointer;
        font: inherit;
        border: none;
        background-color: #4d1601;
        color: white;
        padding: 0.75rem 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 25px;
        font-weight: bold;
    }

    .button:hover,
    .button:active {
        background-color: #2c0d00;
    }

    .icon {
        width: 1.35rem;
        height: 1.35rem;
        margin-right: 0.5rem;
    }

    .badge {
        background-color: #b94517;
        padding: 0.25rem 1rem;
        border-radius: 25px;
        margin-left: 1rem;
        font-weight: bold;
    }

    .button:hover .badge,
    .button:active .badge {
        background-color: #92320c;
    }

    .bump {
        animation: bump 300ms ease-out;
    }

    @keyframes bump {
        0% {
            transform: scale(1);
        }
        10% {
            transform: scale(0.9);
        }
        30% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }
`;

import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItem = (
        <ul className="cart-items">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            {/* Here we use bind to Bind null object and 2nd Args as we can pass an argument to the function */}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            <CartDiv>
                {cartItem}
                <div className="total">
                    <span>Total Amount</span>
                    <span>&#8377;{totalAmount}</span>
                </div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onClose}>
                        Close
                    </button>
                    {hasItem && <button className="button">Order</button>}
                </div>
            </CartDiv>
        </Modal>
    );
};

export default Cart;

const CartDiv = styled.div`
    .cart-items {
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 20rem;
        overflow: auto;
    }

    .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .actions {
        text-align: right;
    }

    .actions button {
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #8a2b06;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
    }

    .actions button:hover,
    .actions button:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    }

    .actions .button--alt {
        color: #8a2b06;
    }

    .actions .button {
        background-color: #8a2b06;
        color: white;
    }
`;

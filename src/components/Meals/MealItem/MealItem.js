import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <MealItemDiv>
            <li className="meal">
                <div>
                    <h3>{props.name}</h3>
                    <div className="description">{props.description}</div>
                    <div className="price">&#8377;{price}</div>
                </div>
                <div>
                    <MealItemForm
                        onAddToCart={addToCartHandler}
                        id={props.id}
                    />
                </div>
            </li>
        </MealItemDiv>
    );
};

export default MealItem;

const MealItemDiv = styled.div`
    .meal {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
    }

    h3 {
        margin: 0 0 0.25rem 0;
    }

    .description {
        font-style: italic;
    }

    .price {
        margin-top: 0.25rem;
        font-weight: bold;
        color: #ad5502;
        font-size: 1.25rem;
    }
`;

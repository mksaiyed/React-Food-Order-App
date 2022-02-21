import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Hyderabadi biryani",
        description: "Biryani cooked in hyderabadi style",
        price: 199.99,
    },
    {
        id: "m2",
        name: "Amritsari kulcha",
        description: "	mildly leavened flatbread",
        price: 120.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 149.99,
    },
    {
        id: "m4",
        name: "Chicken Tikka",
        description: "Chicken with spices served on a skewer",
        price: 299.99,
    },
    {
        id: "m5",
        name: "Jalebi",
        description:
            "A North Indian twisted noodle like sweet dish dipped in sugary syrup",
        price: 49.99,
    },
    {
        id: "m6",
        name: "Palak paneer",
        description: "Paneer cubes in spinach gravy",
        price: 189.5,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        ></MealItem>
    ));
    return (
        <Section>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </Section>
    );
};

export default AvailableMeals;

const Section = styled.section`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: meals-appear 1s ease-out forwards;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @keyframes meals-appear {
        from {
            opacity: 0;
            transform: translateY(3rem);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

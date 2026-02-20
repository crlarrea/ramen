"use client";
import styles from "@/app/page.module.scss";
import Item from "./item";
import { useState } from "react";
export default function Gallery() {
  const data = [
    {
      dish: "Hug-in-a-Bowl Tonkotsu",
      image: "/beef.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Beefy Dumpling Snuggle",
      image: "/beef_2.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Teriyaki Tickle Noodles",
      image: "/chicken.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Tokyo Midnight Diner",
      image: "/japanese.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Coral Reef Ramen",
      image: "/seafood.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "ire-Kissed Bacon Love Bowl",
      image: "/spicy.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Coconut Kiss Thai Dream",
      image: "/thai.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Mushroom Fairy Forest Bowl",
      image: "/vegetarian.png",
      ingredients: ["a", "b", "c"],
    },
    {
      dish: "Lime Basil Bliss Phở-m ramen",
      image: "/vietnamese.png",
      ingredients: ["a", "b", "c"],
    },
  ];

  const [dishState, setDishState] = useState({ dish: null, ingredients: null });
  const updateDish = (dish, ingredients) => {
    setDishState({ dish: dish, ingredients: ingredients });
  };
  return (
    <>
      <article className={styles.gallery}>
        {data.map((entry) => {
          const { dish, image, ingredients } = entry;
          return (
            <Item
              dish={dish}
              image={image}
              ingredients={ingredients}
              updateDish={updateDish}
              key={dish}
            />
          );
        })}
      </article>
      <article className={styles.description}>
        <h2>{dishState.dish}</h2>
        <p className={styles.ingredients}>
          {/* {dishState.ingredients.map((entry) => {
            return <li>{entry}</li>;
          })} */}
        </p>
      </article>
    </>
  );
}

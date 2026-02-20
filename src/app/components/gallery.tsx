"use client";

import styles from "@/app/page.module.scss";
import Item from "./item";
import { useState } from "react";

interface Dish {
  dish: string;
  image: string;
  ingredients: string[];
}

interface SelectedDish {
  dish: string | null;
  ingredients: string[];
}

export default function Gallery() {
  const data: Dish[] = [
    {
      dish: "Hug-in-a-Bowl Tonkotsu",
      image: "/beef.png",
      ingredients: [
        "beef",
        "ajitsuke tamago",
        "gyōza",
        "negi",
        "beni shōga",
        "masago",
      ],
    },
    {
      dish: "Beefy Dumpling Snuggle",
      image: "/beef_2.png",
      ingredients: [
        "chashu",
        "kamaboko",
        "sesame",
        "ajitsuke tamago",
        "negi",
        "beni shōga",
      ],
    },
    {
      dish: "Teriyaki Tickle Noodles",
      image: "/chicken.png",
      ingredients: [
        "teriyaki",
        "ajitsuke tamago",
        "negi",
        "beni shōga",
        "teriyaki sauce",
        "narutomaki",
      ],
    },
    {
      dish: "Tokyo Midnight Diner",
      image: "/japanese.png",
      ingredients: [
        "chashu pork",
        "ajitsuke tamago",
        "ebi tempura",
        "nori",
        "enoki",
        "negi",
        "beni shōga",
        "narutomaki",
      ],
    },
    {
      dish: "Coral Reef Ramen",
      image: "/seafood.png",
      ingredients: [
        "salmon sashimi",
        "shrimp",
        "scallops",
        "ika",
        "ikura",
        "tobiko",
        "beni shōga",
      ],
    },
    {
      dish: "Fire-Kissed Bacon Love Bowl",
      image: "/spicy.png",
      ingredients: [
        "bacon",
        "teriyaki chicken",
        "ajitsuke tamago",
        "chili paste",
        "beni shōga",
        "kimchi",
      ],
    },
    {
      dish: "Coconut Kiss Thai Dream",
      image: "/thai.png",
      ingredients: [
        "ajitsuke tamago",
        "nam prik pao",
        "peanuts",
        "kaffir lime leaf",
        "beni shōga",
        "nori",
        "chicken",
      ],
    },
    {
      dish: "Mushroom Fairy Forest Bowl",
      image: "/vegetarian.png",
      ingredients: [
        "ajitsuke tamago",
        "shiitake",
        "oyster mushrooms",
        "enoki mushrooms",
        "gyōza",
        "menma",
        "masago",
      ],
    },
    {
      dish: "Lime Basil Bliss Ramen",
      image: "/vietnamese.png",
      ingredients: [
        "bean sprouts",
        "ajitsuke tamago",
        "scallions",
        "sriracha",
        "cinnamon",
        "shallots",
      ],
    },
  ];

  const [dishState, setDishState] = useState<SelectedDish>({
    dish: null,
    ingredients: [],
  });

  const updateDish = (dish: string, ingredients: string[]): void => {
    setDishState({ dish, ingredients });
  };

  return (
    <>
      <article className={styles.gallery}>
        {data.map(({ dish, image, ingredients }) => (
          <Item
            key={dish}
            dish={dish}
            image={image}
            ingredients={ingredients}
            updateDish={updateDish}
          />
        ))}
      </article>

      <article className={styles.description}>
        <h2>{dishState.dish}</h2>

        <div className={styles.ingredients}>
          <span>ingredients</span>
          <ul>
            {dishState.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}

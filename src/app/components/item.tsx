"use client";

import styles from "@/app/page.module.scss";
import Image from "next/image";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

/* ------------------ Types ------------------ */

interface ItemProps {
  dish: string;
  image: string;
  ingredients: string[];
  updateDish: (dish: string, ingredients: string[]) => void;
}

export default function Item({
  dish,
  image,
  ingredients,
  updateDish,
}: ItemProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      updateDish(dish, ingredients);
    }
  }, [entry?.isIntersecting, dish, ingredients, updateDish]);

  return (
    <div className={styles.item} ref={ref}>
      <Image
        src={image}
        fill
        alt={dish}
        sizes="(max-width: 1024px) 300px"
        className={entry?.isIntersecting ? styles.active : styles.inactive}
      />
    </div>
  );
}

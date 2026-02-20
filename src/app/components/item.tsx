"use client";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";
export default function Item({ dish, image, ingredients, updateDish }) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    updateDish(dish, ingredients);
  }, [entry?.isIntersecting]);
  {
    entry?.isIntersecting && console.log(dish);
  }
  return (
    <div className={styles.item} ref={ref}>
      <Image
        src={image}
        fill
        alt={dish}
        sizes="(max-width_1024px) 300px"
        className={entry?.isIntersecting ? styles.active : styles.inactive}
      />
    </div>
  );
}

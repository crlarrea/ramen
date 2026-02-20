import Gallery from "./components/gallery";
import styles from "./page.module.scss";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.page}>
        <h1 className={styles.headline}>ramen</h1>

        <span className={styles.backgroundText}>
          {"ramen".padEnd(8, "·").repeat(6)}
        </span>

        <Gallery />

        <DotLottieReact
          src="/animation.json"
          loop
          autoplay
          className={styles.animation}
        />
      </section>
    </main>
  );
}

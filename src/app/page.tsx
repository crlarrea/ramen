import Gallery from "./components/gallery";
import styles from "./page.module.scss";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <section className={styles.page}>
        <h1 className={styles.headline}>ramen</h1>
        <Gallery />
      </section>
    </main>
  );
}

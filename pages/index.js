import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clay Tablet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button>登録</button>
        <button>参照</button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

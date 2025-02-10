import { GetServerSideProps } from "next";
import { getLocatii, LocatieTuristica } from "../lib/contentful";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

interface Props {
  locatii: LocatieTuristica[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const locatii = await getLocatii(); // Folosește GraphQL pentru a obține locațiile
  return {
    props: { locatii },
  };
};

export default function Home({ locatii }: Props) {
  return (
    <>
      <header className={styles.header}>
          <h1>Greece</h1>
          <p>Just explore</p>
        </header>
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <div className={styles.cardsContainer}>
          {locatii.map((locatie) => (
            <Card key={locatie.sys.id} locatie={locatie} />
          ))}
        </div>
        </div>

      </div>
        <footer className={styles.footer}>
          <p>© 2025 Greece - All rights reserved.</p>
        </footer>
      </>
  );
}

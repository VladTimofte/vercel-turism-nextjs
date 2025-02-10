import { GetServerSideProps } from "next";
import { getLocatieById, LocatieTuristica } from "../../lib/contentful";
import Image from "next/image";
import styles from "../../styles/Locatie.module.css";

interface Props {
  locatie: LocatieTuristica;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const locatie = await getLocatieById(id);
  return {
    props: { locatie },
  };
};

const LocatieDetaliu: React.FC<Props> = ({ locatie }) => {
  return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>{locatie.locationName}</h1>
                <p className={styles.subtitle}>Just explore!</p>
            </header>
            <div className={styles.container}>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                <Image
                    src={locatie.image.url}
                    alt={locatie.image.title}
                    width={1200}
                    height={500}
                    objectFit="cover"
                    className={styles.image}
                    />
                </div>

                <div className={styles.details}>
                <p className={styles.description}>{locatie.description}</p>
                <h2>Have a look on the map:</h2>
                <div
                    className={styles.map}
                    dangerouslySetInnerHTML={{ __html: locatie.mapIframe }}
                    />
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <p>© 2025 Greece - All rights reserved.</p>
        </footer>
    </>
  );
};

export default LocatieDetaliu;

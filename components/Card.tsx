import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LocatieTuristica } from '../lib/contentful';

import styles from '../styles/Card.module.css';

interface CardProps {
  locatie: LocatieTuristica;
}

const Card: React.FC<CardProps> = ({ locatie }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={locatie.image.url} alt={locatie.image.title} width={400} height={300} objectFit="cover" />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{locatie.locationName}</h2>
        <p className={styles.cardDescription}>{locatie.description.slice(0, 200)}...</p>
        <Link href={`/locatie/${locatie.sys.id}`} passHref>
          <button className={styles.btn}>Vezi detalii</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import styles from "./VerticalAccordion.module.css";
import Image from 'next/image';
import Link from "next/link";


const VerticalAccordion = ({accordionData}) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className={styles.main}>
        {Object.keys(accordionData).map((key, index) => {
          const item = accordionData[key]; // Accessing the current item
          return (
            <div
              key={key}
              className={`${styles.column} ${expandedIndex === index ? styles.expanded : ""}`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <Link className={styles.innerElement + (expandedIndex === index ? ` ${styles.active}` : "")} href={item.link}>
                <div className={styles.ParentFlex}>
                  <div className={styles.flexContainer}>
                    <Image
                      alt=""
                      aria-hidden="true"
                      src="https://site-assets.plasmic.app/bdfefeb5670e3e8dd3371c4f3cad4dbb.svg"
                      width={15}
                      height={15}
                    />
                    <div className={`${styles.text} ${styles.blueGradientText}`}>{item.infoTxt}</div>
                  </div>
                  <Image width={56} height={32} className={styles.arrowImg} src="https://site-assets.plasmic.app/cb0794dc56bf4ae822fe18927653d0b6.svg" />
                </div>
                <Image width={200} height={200} className={styles.mainImg} src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Link>
              <div className={styles.collapsedTitle}>{item.title}</div>
            </div>
          );
        })}
      </div>
    );
};

export default VerticalAccordion;

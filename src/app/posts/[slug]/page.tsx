import { Comments } from '@/components';
import Image from 'next/image';

import styles from './posts.module.css';

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });
//
//   if (!res.ok) {
//     throw new Error("Failed");
//   }
//
//   return res.json();
// };

const SinglePage = async () => {
  // const { slug } = params;

  // const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={'/p1.jpeg'} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur
          </div>
          {/* <div */}
          {/*   className={styles.description} */}
          {/*   dangerouslySetInnerHTML={{ __html: data?.desc }} */}
          {/* /> */}
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </div>
  );
};

export default SinglePage;

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import styles from './categoryList.module.css';

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/categories', {
      headers: {
        'Cache-Control': 'no-store'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed');
  }
};

interface Data {
  _id: string;
  slug: string;
  title: string;
  img: string;
}

export async function CategoryList() {
  const data = (await getData()) as Data[];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: Data) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

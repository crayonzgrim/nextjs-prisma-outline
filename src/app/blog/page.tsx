import { CardList, Menu } from '@/components';

import styles from './blogPage.module.css';

const BlogPage = () => {
  // const page = parseInt(searchParams.page) || 1;
  // const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;

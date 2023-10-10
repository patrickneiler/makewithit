import styles from './vera-react-feature-blog.module.css';

/* eslint-disable-next-line */
export interface VeraReactFeatureBlogProps {}

export function VeraReactFeatureBlog(props: VeraReactFeatureBlogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VeraReactFeatureBlog!</h1>
    </div>
  );
}

export default VeraReactFeatureBlog;

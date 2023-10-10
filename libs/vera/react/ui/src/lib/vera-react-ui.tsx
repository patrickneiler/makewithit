import styles from './vera-react-ui.module.css';

/* eslint-disable-next-line */
export interface VeraReactUiProps {}

export function VeraReactUi(props: VeraReactUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VeraReactUi!</h1>
    </div>
  );
}

export default VeraReactUi;

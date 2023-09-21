import styles from './lib-t-1.module.css';

// import DemoForImport from '@libT1/demo';
// import DemoForImport from 'src/demo';
// import DemoForImport from '../demo';

/* eslint-disable-next-line */
export interface LibT1Props {}

export function LibT1(props: LibT1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibT1!</h1>
      {/* <DemoForImport /> */}
    </div>
  );
}

export default LibT1;

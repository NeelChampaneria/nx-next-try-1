import styles from './index.module.css';

import { LibT1 } from '@org/lib-t-1';

// import { Template, Error401 } from '@org/template';
// import { Error401 } from '@org/template';

import Error401 from './../../../libs/template/src/lib/src/pages/401';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <LibT1 />
      <Error401 />
    </div>
  );
}

export default Index;

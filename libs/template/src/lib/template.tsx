import styles from './template.module.css';

/* eslint-disable-next-line */
export interface TemplateProps {}

export function Template(props: TemplateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Template!</h1>
    </div>
  );
}

export default Template;

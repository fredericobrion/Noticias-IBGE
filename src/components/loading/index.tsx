import styles from './loading.module.css';

function Loading() {
  return <div data-testid="loading-element" className={ styles.spinner }></div>;
}

export default Loading;

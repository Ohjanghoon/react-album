import styles from "./CommonFooter.module.scss";

function CommonFooter() {
  return (
    // 시멘틱 태그를 활용하여 코드의 명확성 증대
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        <span>1</span>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;

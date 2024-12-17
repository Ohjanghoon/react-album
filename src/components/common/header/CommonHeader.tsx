import { useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

function CommonHeader() {
  const navigate = useNavigate();
  // 북마크 페이지로 이동
  const moveToPage = (path: string) => {
    let navPath = "/";
    switch (path) {
      case "main":
        navPath = "/";
        break;
      case "bookmark":
        navPath = "/bookmark";
        break;
    }
    navigate(navPath);
  };

  return (
    // 시멘틱 태그를 활용하여 코드의 명확성 증대
    <header className={styles.header}>
      <div
        className={styles.header__logoBox}
        onClick={() => moveToPage("main")}
      >
        <img
          className={styles.header__logoBox__logo}
          src="/src/assets/images/image-logo.png"
          alt=""
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button
          className={styles.header__profileBox__button}
          onClick={() => moveToPage("bookmark")}
        >
          북마크
        </button>
        <span className={styles.header__profileBox__useName}>
          Ollie | ollie@gmail.com
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;

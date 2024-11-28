import { useState } from "react";
import { Link } from "react-router-dom";

import navJson from "./nav.json";
import styles from "./CommonNav.module.scss";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출해보도록 한다.
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link to={item.path} key={item.path} className={styles.navigation__menu}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });
  return <div className={styles.navigation}>{navLinks}</div>;
}

export default CommonNav;

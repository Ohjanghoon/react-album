import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import navJson from "./nav.json";
import styles from "./CommonNav.module.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState } from "@/store/atoms/pageState";
import { searchState } from "@/store/atoms/searchState";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);

  useEffect(() => {
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;

      if (
        nav.path === location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    });
    setNavigation([...navigation]);
  }, [location.pathname]);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출해보도록 한다.
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        to={item.path}
        key={item.path}
        className={
          item.isActive
            ? `${styles.navigation__menu} ${styles.active}`
            : `${styles.navigation__menu} ${styles.inactive}`
        }
      >
        {item.label}
      </Link>
    );
  });

  // 시멘틱 태그를 활용하여 코드의 명확성 증대
  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;

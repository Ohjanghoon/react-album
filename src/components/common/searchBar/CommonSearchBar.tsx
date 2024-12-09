import { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/store/atoms/searchState";

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [text, setText] = useState("");

  // input 입력창에 따른 값 업데이트
  const onChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  // 검색 버튼을 클릭했을 때 발생하는 이벤트
  const onSearch = () => {
    if (text === "") {
      // input 태그 안에 빈 값을 검색하였을 때 => searching default value
      setSearch("Korea");
    } else {
      // 작성한 input value 값 할당
      setSearch(text);
    }
  };

  // Enter 키를 눌렀을 때 발생하는 이벤트
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (text === "") {
        // input 태그 안에 빈 값을 검색하였을 때 => searching default value
        setSearch("Korea");
      } else {
        // 작성한 input value 값 할당
        setSearch(text);
      }
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색해주세요."
          className={styles.searchBar__search__input}
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default CommonSearchBar;

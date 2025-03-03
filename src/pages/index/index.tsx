import { useMemo, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { imageData } from "@/store/selecotrs/imageSelector";

// CSS
import styles from "./styles/index.module.scss";

// components
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";
import Loading from "./components/Loading";

import { CardDTO } from "./types/card";

function index() {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImageData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생(관리) State

  const CARD_LIST = useMemo(() => {
    // imgSelector.state = hasValue or loading
    if (imgSelector.state === "hasValue") {
      const result = imgSelector.contents.results.map((card: CardDTO) => {
        return (
          <Card
            data={card}
            key={card.id}
            handleOpenDialog={setOpen}
            handleSetData={setImageData}
          />
        );
      });
      return result;
    } else {
      return <Loading />;
    }
  }, [imgSelector]);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI */}
      <CommonHeader />
      {/* 공통 네비게이션 UI */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* 공통 푸터 UI */}
      <CommonFooter />
      {open && <DetailDialog data={imgData} handleOpenDialog={setOpen} />}
    </div>
  );
}

export default index;

import { selector } from "recoil";

import axios from "axios";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

// 오픈 API 호출 관련 값
const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "S8CiHkFrEjdA2JCNJQNxMHbRTWT9HiX4lEqv9vwC1WY";
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // API 호출
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );

      // console.log("selector ===> ", res);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
});

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateSearchQuery,
  updateFilterDifficulty,
  updateSortType,
} from "store/songsSlice";
import { SortType } from "store/songsSlice";

export function useUrlParams() {
  // odpala sie przy uruchomieniu apki
  // odczytuje parametry z url ?search=to&filter=1,2,3,4,5&sort=sortArtistAZ
  // zmienia stan store

  useEffect(() => {
    console.log("hook!");
    updateStore();
  }, []);

  const fullUrl = document.URL;
  const url = new URL(fullUrl);
  const searchParams = url.searchParams;
  const search = searchParams.get("search");
  // const filter = searchParams.get("filter");
  const sort = searchParams.get("sort");

  // const filterSplited = filter?.split(",");
  // const filterNums = filterSplited?.map((str) => parseInt(str));
  // const filterArr = filterNums?.filter((num) => num > 0 && num <= 5);

  const filter = searchParams
    .get("filter")
    ?.split(",")
    ?.map((str) => parseInt(str))
    ?.filter((num) => num > 0 && num <= 5)
    ?.filter((value, index, array) => array.indexOf(value) === index);
  console.log(filter);

  const dispatch = useDispatch();
  const updateStore = () => {
    if (typeof search === "string") {
      dispatch(updateSearchQuery(search));
    }
    if (typeof filter !== "undefined") {
      dispatch(updateFilterDifficulty(filter));
    }
    if (typeof sort === "string") {
      //@ts-ignore
      dispatch(updateSortType(sort));
    }
  };
}

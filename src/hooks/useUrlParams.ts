import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSearchQuery,
  updateFilterDifficulty,
  updateSortType,
} from "store/songsSlice";
import { searchQuerySelector } from "store/selectors";
import { useSearchParams } from "react-router-dom";
import { SortType } from "store/songsSlice";

export function useUrlParams() {
  // odpala sie przy uruchomieniu apki
  // odczytuje parametry z url ?search=to&filter=1,2,3,4,5&sort=sortArtistAZ
  // zmienia stan store
  const searchQuery = useSelector(searchQuerySelector);
  useEffect(() => {
    updateStore();
  }, []);
  useEffect(() => {
    setQueryParams();
  }, [searchQuery]);

  const fullUrl = document.URL;
  const url = new URL(fullUrl);
  const searchParams = url.searchParams;
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  const filter = searchParams
    .get("filter")
    ?.split(",")
    ?.map((str) => parseInt(str))
    ?.filter((num) => num > 0 && num <= 5)
    ?.filter((value, index, array) => array.indexOf(value) === index);

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

  const [params, setParams] = useSearchParams();

  const setQueryParams = () => {
    setParams({ search: searchQuery });
  };
}

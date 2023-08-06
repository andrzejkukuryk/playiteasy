import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSearchQuery,
  updateFilterDifficulty,
  updateSortType,
} from "store/songsSlice";
import { updateActivePage } from "store/controlsSlice";
import {
  searchQuerySelector,
  difficultyFiltersSelector,
  sortTypeSelector,
  activePageSelector,
  numberOfPagesSelector,
} from "store/selectors";
import { useSearchParams } from "react-router-dom";
import { SortType } from "store/songsSlice";

export function useUrlParams() {
  const searchQuery = useSelector(searchQuerySelector);
  const difficultyFilter = useSelector(difficultyFiltersSelector).toString();
  const sortType = useSelector(sortTypeSelector);
  const activePage = useSelector(activePageSelector).toString();
  const numberOfPages = useSelector(numberOfPagesSelector);
  useEffect(() => {
    updateStore();
  }, []);
  useEffect(() => {
    setQueryParams();
  }, [searchQuery, difficultyFilter, sortType, activePage]);

  const fullUrl = document.URL;
  const url = new URL(fullUrl);
  const searchParams = url.searchParams;
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const page = Number(searchParams.get("page"));

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
    if (typeof page === "number") {
      dispatch(updateActivePage(page));
      // pageCheck();
    }
  };

  console.log("active: ", activePage, "numberOfPages: ", numberOfPages);
  const pageCheck = () => {
    if (numberOfPages > 0) {
      if (page <= numberOfPages) {
        dispatch(updateActivePage(page));
      } else {
        dispatch(updateActivePage(numberOfPages));
      }
    }
  };

  const [params, setParams] = useSearchParams();

  const setQueryParams = () => {
    setParams({
      search: searchQuery,
      filter: difficultyFilter,
      sort: sortType,
      page: activePage,
    });
  };
}

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
  statusSelector,
} from "store/selectors";
import { useSearchParams } from "react-router-dom";
import { SortType } from "store/songsSlice";

export function useUrlParams() {
  const searchQuery = useSelector(searchQuerySelector);
  const difficultyFilter = useSelector(difficultyFiltersSelector).toString();
  const sortType = useSelector(sortTypeSelector);
  const activePage = useSelector(activePageSelector).toString();
  const numberOfPages = useSelector(numberOfPagesSelector);
  const status = useSelector(statusSelector);
  useEffect(() => {
    if (status === "completed") {
      updateStore();
    }
  }, [status]);
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
      //TODO: typeguard
      //@ts-ignore
      dispatch(updateSortType(sort));
    }
    if (typeof page === "number") {
      pageCheck();
    }
  };

  const pageCheck = () => {
    if (numberOfPages > 0) {
      if (page <= numberOfPages) {
        if (page > 0) {
          dispatch(updateActivePage(page));
        } else {
          dispatch(updateActivePage(1));
        }
      } else {
        dispatch(updateActivePage(numberOfPages));
      }
    }
  };

  const [params, setParams] = useSearchParams();

  const setQueryParams = () => {
    if (status === "completed") {
      setParams({
        search: searchQuery,
        filter: difficultyFilter,
        sort: sortType,
        page: activePage,
      });
    }
  };
}

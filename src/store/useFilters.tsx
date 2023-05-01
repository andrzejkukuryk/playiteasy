import { useEffect, useState } from "react";
import { RootState } from "./store";
import { useSelector } from "react-redux";

export function useFilters() {
  const [checked, setChecked] = useState<number[]>([]);

  const filters = useSelector((state: RootState) => state.filters);
  useEffect(() => {
    setChecked(filters);
  }, [filters]);
  return checked;
}

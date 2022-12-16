import storage from "../lib/storage";
import useSWR from "swr";

export default function useStorage() {
  const { data = [] } = useSWR("waikiki_basket_guest", storage);
  return data;
}

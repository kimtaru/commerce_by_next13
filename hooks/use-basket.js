import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useBasket() {
  const { data, mutate, error } = useSWR(
    "http://localhost:8080/get-basket",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const loading = !data && !error;

  return {
    loading,
    cart: data,
    mutate,
  };
}

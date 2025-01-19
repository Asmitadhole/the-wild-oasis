import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

const useCabins = () => {
  const {
    isLoading,
    data: cabins,
    // error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins, // Fetch data every minute
  });

  return { isLoading, cabins };
};

export default useCabins;

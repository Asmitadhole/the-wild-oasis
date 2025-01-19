import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    error,
    data: booking,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId), // Replace with your own function to fetch booking data
    // You can also use a custom cache policy here
    retry: false,
  });

  return { isLoading, error, booking };
}

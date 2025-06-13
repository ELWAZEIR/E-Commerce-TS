  import { useState } from "react";
  import axios from "axios";

  type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

  // ضبط الـ baseURL مرة واحدة لكل طلبات axios
  axios.defaults.baseURL = "https://redux-tolkit.onrender.com";

  const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] = useState<TStatus>("idle");
    const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

    const checkEmailAvailability = async (email: string) => {
      setEnteredEmail(email);
      setEmailAvailabilityStatus("checking");
      try {
        const response = await axios.get(`/users?email=${email}`);
        if (!response.data.length) {
          setEmailAvailabilityStatus("available");
        } else {
          setEmailAvailabilityStatus("notAvailable");
        }
      } catch (error: any) {
        console.error("Failed to check email availability:", error?.response?.status, error?.message);
        setEmailAvailabilityStatus("failed");
      }
    };

    const resetCheckEmailAvailability = () => {
      setEmailAvailabilityStatus("idle");
      setEnteredEmail(null);
    };

    return {
      emailAvailabilityStatus,
      enteredEmail,
      checkEmailAvailability,
      resetCheckEmailAvailability,
    };
  };

  export default useCheckEmailAvailability;

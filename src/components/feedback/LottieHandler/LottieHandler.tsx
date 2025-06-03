import Lottie from "lottie-react";
import NotFound from "@assets/LottieFiles/NotFound.json";
import Shopping from "@assets/LottieFiles/Shopping.json";
import ShoppingEmpty from "@assets/LottieFiles/ShoppingEmpty.json";
import error from "@assets/LottieFiles/error.json"
import loading from "@assets/LottieFiles/loading.json"
import successPlaceOrder from "@assets/LottieFiles/successPlaceOrder.json"

const lottieFilesMap = {
  NotFound,
  Shopping,
  ShoppingEmpty,
  error,
  loading,
  successPlaceOrder
};
type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <Lottie  loop={2} animationData={lottie} style={{ width: "400px" }} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};


export default LottieHandler;

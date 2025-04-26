import { TLoading } from "@types";
import CategorySkeleton from "./Skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "./Skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "./Skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "./LottieHandler/LottieHandler";

const SkeletonsTypes={
  product:ProductSkeleton,
  cart:CartSkeleton,
  category:CategorySkeleton
}

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type:keyof typeof SkeletonsTypes
};


const Loading = ({ status, error, children,type }: LoadingProps) => {

  const Component=SkeletonsTypes[type]

  if (status === "pending") {
    return <Component/>;
  }
  if (status === "failed") {
    return <div><LottieHandler type="error" message={error as string}/></div>;
  }
  return <div>{children}</div>;
};

export default Loading;
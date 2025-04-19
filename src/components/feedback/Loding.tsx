import { TLoading } from "@types";
import CategorySkeleton from "./CategorySkeleton/CategorySkeleton";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <CategorySkeleton/>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
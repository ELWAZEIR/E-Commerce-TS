import { Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

function PageSuspenseFallback({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <LottieHandler type="Shopping" message="loading please wait.." />
      }
    >
      {children}
    </Suspense>
  );
}

export default PageSuspenseFallback;

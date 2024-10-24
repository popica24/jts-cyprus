import { Suspense } from "react";
import Loading from "./components/loading";
import Router from "./router";

const App = () => {
  
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
};

export default App;

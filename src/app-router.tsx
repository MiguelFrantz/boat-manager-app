import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {

  const List = lazy(() => import("./screens/boats/list/list"));
  const Detail = lazy(() => import("./screens/boats/detail/detail"));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:boatId" element={<Detail />} />
        </Routes>
      </Suspense >
    </Router>
  );
}

export { AppRouter };

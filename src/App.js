import React, {Suspense } from 'react'
import { useRoutes } from 'react-router-dom';
import './App.css'
import Spinner from './Components/molecules/Spinners/Spinner';
import ErrorBoundary from './Components/organisms/ErrorBoundary/ErrorBoundary';
import { router as routes } from "./routes/ProtectedRoute/router";
 
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          {router}
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default App

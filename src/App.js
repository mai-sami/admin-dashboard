import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css'
import Spinner from './Components/molecules/Spinners/Spinner';
import ErrorBoundary from './Components/organisms/ErrorBoundary/ErrorBoundary';
import AuthRouter from './routes/ProtectedRoute/AuthRouter';
import UserRouter from './routes/ProtectedRoute/UserRouter';

const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Router>
            <Switch>
              {AuthRouter()}
              {UserRouter()}
            </Switch>
    
          </Router>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default App

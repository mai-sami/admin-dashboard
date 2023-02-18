import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css'
import Spinner from './Components/molecules/Spinners/Spinner';
import ErrorBoundary from './Components/organisms/ErrorBoundary/ErrorBoundary';
import UserRouter from './routes/ProtectedRoute/UserRouter';
 function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Router>
            <Switch>
              {UserRouter()}
            </Switch>
            
          </Router>
        </ErrorBoundary>
      </Suspense>

    </>
  )
}

export default App

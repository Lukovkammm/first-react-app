import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import People from './pages/People';
import Detail from './components/detail/Detail';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/error/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<People />}>
        <Route path=":peopleId" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;

import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './Utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainController from './components/MainController';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children: [
    {
      path:"/",
      element:<MainController/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div>
        <Head/>
       <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, MainLayout } from './pages';
const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

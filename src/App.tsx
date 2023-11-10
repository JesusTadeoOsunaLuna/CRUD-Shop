import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainScreen } from "./screens/MainScreen";
import { useManagementRoutes } from "./routes/managementRoutes";

function App() {
   const managementRoutes = useManagementRoutes();

   const router = createBrowserRouter(createRoutesFromElements(managementRoutes));

   return (
      <RouterProvider router={router} fallbackElement={<div className="h-full">cargando</div>}>
         <MainScreen />
      </RouterProvider>
   );
}

export default App;

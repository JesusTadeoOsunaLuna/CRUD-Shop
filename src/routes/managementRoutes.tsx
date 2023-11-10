import { Route } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { MainScreen } from "../screens/MainScreen";

export const useManagementRoutes = () => {
   return (
      <>
         <Route path="/" element={<HomeScreen />}></Route>
         <Route path="/items" element={<MainScreen />}></Route>
      </>
   );
};

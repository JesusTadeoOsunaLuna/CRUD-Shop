import { SearchBarComponent } from "../components/SearchBarComponent";
import { ShopArticlesComponent } from "../components/ShopArticlesComponent";

export const MainScreen = () => {
   return (
      <div className="bg-teal-600 flex flex-col">
         <SearchBarComponent />
         <ShopArticlesComponent />
      </div>
   );
};

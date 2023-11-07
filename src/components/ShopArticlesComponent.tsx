import { useSetData } from "../hooks/useFetch";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const ShopArticlesComponent = () => {
   const data = useSetData();

   return (
      <article className="bg-slate-300 flex justify-center">
         <ul>
            {!data ? (
               <LoadingSpinner />
            ) : (
               data.map((data, index) => (
                  <li className="m-4 mb-10  flex justify-start" key={index}>
                     <img className="h-auto w-60 max-w-sm border" src={data.thumbnail} />
                     <div className="flex flex-col">
                        <p className="text-lg font-bold ">{data.title}</p>
                        <p>{data.description}</p>
                     </div>
                  </li>
               ))
            )}
         </ul>
      </article>
   );
};

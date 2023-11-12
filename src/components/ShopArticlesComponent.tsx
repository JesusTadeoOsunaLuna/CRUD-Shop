import { useSetData } from '../hooks/useFetch'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { useNavigate } from 'react-router-dom'

export const ShopArticlesComponent = () => {
    const data = useSetData()
    const navigate = useNavigate()
    console.log({ data: data })
    return (
        <article className="bg-slate-300 flex justify-center">
            <ul>
                {!data ? (
                    <LoadingSpinner />
                ) : (
                    data.map((data, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(`/items/${data.id}`)}
                        >
                            <li className="m-4 mb-10  flex justify-start">
                                <img
                                    className="h-auto w-60 max-w-sm border"
                                    src={data.thumbnail}
                                />
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold ">
                                        {data.title}
                                    </p>
                                    <p>{data.description}</p>
                                </div>
                            </li>
                        </button>
                    ))
                )}
            </ul>
        </article>
    )
}

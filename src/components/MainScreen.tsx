import { useSetData } from '../hooks/useFetch'
import { LoadingSpinner } from './LoadingSpinner'

export const MainScreen = () => {
    const data = useSetData()

    return (
        <article>
            <ul>
                {!data ? (
                    <LoadingSpinner />
                ) : (
                    data.map((data, index) => (
                        <li className="m-4 mb-10" key={index}>
                            <img
                                className="h-auto w-auto max-w-sm rounded-full border"
                                src={data.thumbnail}
                            />
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                        </li>
                    ))
                )}
            </ul>
        </article>
    )
}

import { useItemSelected } from '../hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import { LoadingSpinner } from './LoadingSpinner'
import { ImagesCarousel } from './ImagesCarousel'

export const ItemSelected = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const product = useItemSelected(id)
    return (
        <>
            {product ? (
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 m-2"
                    >
                        <svg
                            className="w-5 h-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                        <span>Go back</span>
                    </button>
                    <div className="flex flex-col items-start justify-start p-4">
                        <header>
                            <h1 className="text-xl font-bold">
                                {product?.title}
                            </h1>
                        </header>
                        <section>
                            <ImagesCarousel images={product?.images} />
                        </section>
                        <p className="text-3xl font-body">$ {product.price}</p>
                        <p>{product?.description}</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center p-48 ">
                    <LoadingSpinner />
                </div>
            )}
        </>
    )
}

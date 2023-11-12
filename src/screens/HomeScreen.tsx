import { useNavigate } from 'react-router-dom'
import { SearchBarComponent } from '../components/SearchBarComponent'

export const HomeScreen = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-gray-500  min-h-screen">
                <header className="flex justify-center items-center pt-10">
                    <h1 className="text-5xl  font-bold">Little Shop</h1>
                </header>
                <section className="mt-20 flex justify-center  items-center ">
                    <SearchBarComponent />
                </section>
                <article className="flex justify-center items-start">
                    <button onClick={() => navigate('/items')}>
                        Ver catalogo
                    </button>
                </article>
            </div>
        </>
    )
}

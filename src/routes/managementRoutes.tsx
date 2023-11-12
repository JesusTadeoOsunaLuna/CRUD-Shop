import { Route } from 'react-router-dom'
import { HomeScreen } from '../screens/HomeScreen'
import { MainScreen } from '../screens/MainScreen'
import { ItemScreen } from '../screens/ItemScreen'

export const useManagementRoutes = () => {
    return (
        <>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/items" element={<MainScreen />}></Route>
            <Route path="/items/:id" element={<ItemScreen />} />
        </>
    )
}

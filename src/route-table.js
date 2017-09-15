import Home from './pages/home/index'
import Search from './pages/search/index'
import Pickers from './pages/pickers/index'

const RouteTable = {
    home:{
        path:'home',
        action:Home
    },
    search:{
        path:'search',
        action:Search
    },
    pickers:{
        path:'pickers',
        action:Pickers
    }
}

export default RouteTable
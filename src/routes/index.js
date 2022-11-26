import routesConfig from '~/config/routes.js'

//layouts
import { HeaderOnly } from '~/components/Layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Puclic Routes
const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout:HeaderOnly},
    {path: routesConfig.search, component: Search, layout:null}
]
const privateRoutes = []

export {publicRoutes, privateRoutes}
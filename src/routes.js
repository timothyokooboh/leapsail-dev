import Home from './views/Home'
import NotFound from './views/NotFound'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound
  }

]
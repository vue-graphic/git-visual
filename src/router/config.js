import Flocking from '@/pages/Flocking'
import Fibonacci from '@/pages/Fibonacci'
import Beehive from '@/pages/Beehive'
import Voronoi from '@/pages/Voronoi'

export default [
  {
    path: '/',
    name: 'Flocking',
    component: Flocking
  },
  {
    path: '/voronoi',
    name: 'voronoi',
    component: Voronoi
  },
  {
    path: '/bee',
    name: 'bee',
    component: Beehive
  },
  {
    path: '/fibonacci',
    name: 'fibonacci',
    component: Fibonacci
  }
]

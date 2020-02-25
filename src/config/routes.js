import Home from '../components/Home/Home';

import Ex00 from '../components/Ex00/Ex00';
import Ex01 from '../components/Ex01/Ex01';
import Ex02 from '../components/Ex02/Ex02';
import Ex03 from '../components/Ex03/Ex03';
import Ex04 from '../components/Ex04/Ex04';
import Ex05 from '../components/Ex05/Ex05';
import Ex06 from '../components/Ex06/Ex06';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Accueil',
  },
  {
    path: '/exercices/00',
    exact: true,
    component: Ex00,
    name: 'Ex00',
  },
  {
    path: '/exercices/01',
    exact: true,
    component: Ex01,
    name: 'Ex01',
  },
  {
    path: '/exercices/02',
    exact: true,
    component: Ex02,
    name: 'Ex02',
  },
  {
    path: '/exercices/03',
    exact: true,
    component: Ex03,
    name: 'Ex03',
  },
  {
    path: '/exercices/04',
    exact: true,
    component: Ex04,
    name: 'Ex04',
  },
  {
    path: '/exercices/05',
    exact: true,
    component: Ex05,
    name: 'Ex05',
  },
  {
    path: '/exercices/06',
    exact: true,
    component: Ex06,
    name: 'Ex06',
  },
];

export default routes;

import HomePage from "../pages/HomePage/HomePage";
import TeamPage from "../pages/TeamPage/TeamPage";

export const links = [
  {
    path: '',
    name: 'Start',
    active: false,
  },
  {
    path: '',
    name: 'Team',
    active: false,
  },
  {
    path: '',
    name: 'Discords',
    active: false,
  },
];

export const routes = [
  { path: '/', component: HomePage },
  { path: '/team*', component: TeamPage },
  // { path: '/discords*', component: Services },
];
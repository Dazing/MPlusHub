import HomePage from "../pages/HomePage/HomePage";
import TeamPage from "../pages/TeamPage/TeamPage";
import { Page } from "../models/Page";

export const pages: Array<Page> = [
  new Page('Start', ''),
  new Page('Team', 'team'),
];

export const routes = [
  { path: '/', component: HomePage },
  { path: '/team*', component: TeamPage },
];
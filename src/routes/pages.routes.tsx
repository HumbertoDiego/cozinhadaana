import { ListItemsPage } from '../pages/Home'

const APP_ROUTES = [
  {
    label: 'Tradicional',
    path: '/',
    component: <ListItemsPage category="tradicional" />,
  },
  {
    label: 'Gourmet',
    path: 'gourmet',
    component: <ListItemsPage category="gourmet" />,
  },
  {
    label: 'Sopas',
    path: 'sopas',
    component: <ListItemsPage category="sopas" />,
  },
];

export default APP_ROUTES
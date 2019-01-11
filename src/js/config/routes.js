import {
	Home,
	EditDojo,
	Dojos,
} from '../views';

const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/edit',
		component: EditDojo,
		exact: true
	},
	{
		path: '/search',
		component: Dojos,
		// exact: true
	},
];

export default routes;
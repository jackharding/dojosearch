import {
	Home,
	EditDojo,
	Dojos,
	Dojo,
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
	{
		path: '/dojos/:slug',
		component: Dojo,
		// exact: true
	},
];

export default routes;
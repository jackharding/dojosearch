import {
	Home,
	EditDojo
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
];

export default routes;
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const API_KEY = '6410346f89264d6e919165208231505';

const cache = setupCache({
	maxAge: 5 * 1000 * 60,
	exclude: { methods: ['post', 'put', 'patch', 'delete'] },
});

export const weatherInstance = axios.create({
	baseURL: 'http://api.weatherapi.com/v1/forecast.json',
	params: {
		key: API_KEY,
		days: 1,
	},
	adapter: cache.adapter,
});

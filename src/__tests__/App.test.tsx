import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import App from '../App';
import { weatherInstance } from '../lib';
import WeatherCard from '../components/weatherCard/WeatherCard';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

test('Renders App', () => {
	render(<App />);
	const formLabel = screen.getByText('Enter city');
	expect(formLabel).toBeInTheDocument();
});

test('Submit form success', async () => {
	render(<App />);

	weatherInstance({
		params: {
			q: 'Dnipro',
		},
	})
		.then(({ data }) => {
			render(<WeatherCard weather={data} />);
		})
		.catch((error) => {
			render(<ErrorMessage errorMessage={error.response?.data.error.message || error.message} />);
		});

	await waitFor(() => {
		expect(screen.getByText('Dniprorudne')).toBeInTheDocument();
	});
});

test('Submit form. City not found', async () => {
	render(<App />);

	weatherInstance({
		params: {
			q: 'Zaporizhia',
		},
	})
		.then(({ data }) => {
			render(<WeatherCard weather={data} />);
		})
		.catch((error) => {
			render(<ErrorMessage errorMessage={error.response?.data.error.message || error.message} />);
		});

	await waitFor(() => {
		expect(screen.getByText('No matching location found.')).toBeInTheDocument();
	});
});

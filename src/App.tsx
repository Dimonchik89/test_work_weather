import { Box } from '@mui/material';
import Form from './components/form/Form';
import { useState } from 'react';
import { weatherInstance } from './lib';
import { AxiosError } from 'axios';
import { IResponseError, WeatherResponse } from './types/types';
import WeatherCard from './components/weatherCard/WeatherCard';
import Spinner from './components/spinner/Spinner';
import ErrorMessage from './components/errorMessage/ErrorMessage';

import './styles/app.css';

function App() {
	const [weather, setWeather] = useState<WeatherResponse | null>(null);
	const [error, setError] = useState<AxiosError<IResponseError> | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const city = (e.currentTarget.elements.namedItem('city') as HTMLInputElement).value.trim();

		setWeather(null);
		setError(null);
		setIsLoading(true);

		if (!city) {
			const errorMessage: IResponseError = {
				error: {
					code: 400,
					message: 'The string cannot be empty',
				},
			};
			setError({ message: errorMessage.error.message } as AxiosError<IResponseError>);
			setIsLoading(false);
			return;
		}

		weatherInstance({
			params: {
				q: city,
			},
		})
			.then(({ data }) => {
				setWeather(data);
			})
			.catch((error: AxiosError) => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Box className="container">
			<Form handleSubmit={handleSubmit} />

			{isLoading ? <Spinner /> : null}
			{error ? <ErrorMessage errorMessage={error.response?.data.error.message || error.message} /> : null}
			{weather ? <WeatherCard weather={weather} /> : null}
		</Box>
	);
}

export default App;

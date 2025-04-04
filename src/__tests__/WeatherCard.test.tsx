import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import WeatherCard from '../components/weatherCard/WeatherCard';
import { data } from '../mock';

test('Renders weatherCard', () => {
	render(<WeatherCard weather={data} />);
	expect(screen.getByText('Dniprorudne')).toBeInTheDocument();
});

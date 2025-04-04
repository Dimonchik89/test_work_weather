import React from 'react';
import { WeatherResponse } from '../../types/types';
import { Box, Paper, Typography } from '@mui/material';

import '../../styles/weather.css';

interface Props {
	weather: WeatherResponse;
}

const WeatherCard: React.FC<Props> = ({ weather }) => {
	return (
		<Paper className="content-wrapper">
			<Box className="flex flex-col items-center">
				<img src={weather.current.condition.icon} alt={weather.current.condition.text} />
				<Box className="flex flex-col items-center weater-conetnt__wrapper">
					<Typography variant="h5" component="h5" fontWeight={600}>
						{weather.location.name}
					</Typography>
					<Typography variant="body2" component="span" fontWeight={500}>
						Last update: {weather.current.last_updated}
					</Typography>

					<Typography variant="body1" fontWeight={500} component="span">
						{weather.current.condition.text}
					</Typography>
					<Typography variant="body1" component="span" fontWeight={600}>
						{weather.current.temp_c}°C
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

export default WeatherCard;

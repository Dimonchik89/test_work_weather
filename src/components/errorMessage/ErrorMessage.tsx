import { Typography } from '@mui/material';
import React from 'react';

interface Props {
	errorMessage: string;
}

const ErrorMessage: React.FC<Props> = ({ errorMessage }) => {
	return (
		<div className="flex justify-center">
			<Typography variant="h5" color="error">
				{errorMessage}
			</Typography>
		</div>
	);
};

export default ErrorMessage;

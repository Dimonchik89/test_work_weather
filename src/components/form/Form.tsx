import React from 'react';
import { Box, Button, Input, InputLabel, Paper } from '@mui/material';

import '../../styles/form.css';

interface Props {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ handleSubmit }) => {
	return (
		<Paper className="content-wrapper">
			<form onSubmit={handleSubmit} className="form" role="form">
				<Box>
					<InputLabel className="text-center" htmlFor="my-input">
						Enter city
					</InputLabel>
					<Input id="my-input" name="city" className="width-full" />
				</Box>

				<Button type="submit">Send</Button>
			</form>
		</Paper>
	);
};

export default Form;

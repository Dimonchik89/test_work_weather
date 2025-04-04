import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import Form from '../components/form/Form';

const handleSubmit = jest.fn();

test('Renders form', () => {
	render(<Form handleSubmit={handleSubmit} />);
	expect(screen.getByText('Enter city')).toBeInTheDocument();
});

test('Click submit', () => {
	render(<Form handleSubmit={handleSubmit} />);

	fireEvent.submit(screen.getByRole('form'));
	expect(handleSubmit).toHaveBeenCalledTimes(1);
});

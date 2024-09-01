import { useState } from 'react';

const useTextInput = (initialValue: string = '') => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const reset = () => {
		setValue('');
	};

	return {
		value,
		handleChange,
		reset,
	};
};

export default useTextInput;

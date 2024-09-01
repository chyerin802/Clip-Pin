import React, { useState } from 'react';
import Icon from './Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: 'text' | 'password' | 'email';
	label?: string;
	error?: string;
	onReset?: () => void;
}

const TextInput = ({
	type,
	value,
	label,
	id,
	error,
	onReset,
	...props
}: InputProps) => {
	const [newType, setNewType] = useState(type);

	return (
		<div>
			{label && (
				<label
					htmlFor={id}
					className="mb-1 block pl-1 text-left text-sm font-medium leading-6 text-neutral-primary"
				>
					{label}
				</label>
			)}
			<div className="relative">
				<input
					id={id}
					type={newType}
					value={value}
					{...props}
					className={`block w-full rounded-xl py-3 pl-4 pr-16 text-lg leading-7 text-neutral-primary shadow-sm placeholder:text-neutral-secondary focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50 sm:text-sm sm:leading-6 ${
						error
							? 'border-error-primary ring-2 ring-error-secondary ring-opacity-50'
							: 'border-neutral-tertiary'
					}`}
				/>
				{value && (
					<div className="absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center gap-2">
						{type === 'password' && (
							<button
								type="button"
								onClick={() =>
									newType === 'password'
										? setNewType('text')
										: setNewType('password')
								}
								aria-label={
									newType === 'password'
										? 'Show password'
										: 'Hide password'
								}
							>
								<Icon
									name={
										newType === 'password'
											? 'visibility'
											: 'visibilityOff'
									}
									className="size-5 text-neutral-tertiary"
								/>
							</button>
						)}
						<button type="button" onClick={onReset}>
							<Icon
								name="cancel"
								className="size-4 text-neutral-primary"
							/>
						</button>
					</div>
				)}
			</div>
			{error && (
				<div className="mt-1 text-right text-sm text-error-primary">
					{error}
				</div>
			)}
		</div>
	);
};

export default TextInput;

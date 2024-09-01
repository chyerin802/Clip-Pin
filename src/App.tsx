import { useState } from 'react';
import './App.css';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
};

export default App;

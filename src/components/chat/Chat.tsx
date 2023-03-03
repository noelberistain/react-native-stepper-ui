import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const Chat = () => {
	const userContext = useContext(UserContext);
	return (
		<div>
			Chat - {JSON.stringify(userContext)}
			<Link to={'/'}>
				<button>Go Home</button>
			</Link>
		</div>
	);
};

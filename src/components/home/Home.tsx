import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../context/types';
import { UserContext } from '../../context/UserContext';
import { RoomList } from './RoomList';
import { IRoom } from './types';

export const Home = () => {
	// const { setUser, user } = useContext(UserContext);
	const userContext = useContext(UserContext);
	const rooms: IRoom[] = [
		{
			name: 'room1',
			_id: '123',
		},
		{
			name: 'room2',
			_id: '456',
		},
	];
	const setAsJohn = () => {
		const John: User = {
			name: 'John',
			email: 'john@email.com',
			password: '123',
			id: '123',
		};
		userContext?.setUser(John);
	};
	const setAsTom = () => {
		const Tom: User = {
			name: 'Tom',
			email: 'tom@email.com',
			password: '234',
			id: '234',
		};
		userContext?.setUser(Tom);
	};
	return (
		<div>
			<div className='row'>
				<div className='col s12 m6'>
					<div className='card blue-grey darken-1'>
						<div className='card-content white-text'>
							<span className='card-title'>{`Welcome ${
								userContext?.user ? userContext?.user.name : ''
							}`}</span>
							<form>
								<div className='row'>
									<div className='input-field col s12'>
										<input
											id='room'
											type='text'
											className='validate'
											placeholder='Enter a room name'
										/>
										<label htmlFor='room'>Room</label>
									</div>
									<button className='btn'>Create room</button>
								</div>
							</form>
						</div>
						<div className='card-action'>
							<a href='#' onClick={setAsJohn}>
								Set John
							</a>
							<a href='#' onClick={setAsTom}>
								set Tom
							</a>
						</div>
					</div>
				</div>
				<div className='col s6 m5 offset-1'>
					<RoomList rooms={rooms} />
				</div>
			</div>

			<Link to={'/chat'}>
				<button>Go To Chat</button>
			</Link>
		</div>
	);
};

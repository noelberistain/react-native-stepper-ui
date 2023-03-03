import { Room } from './Room';
import { IRoom } from './types';

interface IRoomList {
	rooms: IRoom[];
}

export const RoomList = ({ rooms }: IRoomList) => {
	return (
		<>
			{rooms
				? rooms.map(({ _id, name }) => <Room key={_id} name={name} />)
				: 'No rooms available'}
		</>
	);
};

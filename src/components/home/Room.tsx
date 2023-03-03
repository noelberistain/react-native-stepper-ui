import React from 'react';
import { IRoom } from './types';

export const Room = ({ name }: Pick<IRoom, 'name'>) => (
	<div className='card horizontal'>
		<div className='card-stacked'>
			<div className='card-content'>
				<p>{name}</p>
			</div>
		</div>
	</div>
);

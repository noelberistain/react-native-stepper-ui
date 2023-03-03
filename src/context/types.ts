import React from 'react';

export type UserContextType = {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
} | null;

export type User = {
	name: string;
	email: string;
	password: string;
	id: string;
} | null;

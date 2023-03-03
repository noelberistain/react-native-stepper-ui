import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import { Home } from './components/home/Home';
import { Chat } from './components/chat/Chat';
import { User } from './context/types';
import { NavBar } from './components/layout/navbar';

function App() {
	const [user, setUser] = useState<User>(null);
	return (
		<Router>
			<div className='App'>
				<UserContext.Provider value={{ user, setUser }}>
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/chat' element={<Chat />} />
					</Routes>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default App;

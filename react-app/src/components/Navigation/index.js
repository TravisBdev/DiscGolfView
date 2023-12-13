import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav className='nav-bar'>
			<ul className='nav-list'>
				<li className='nav-item'>
					<NavLink exact to="/">Home</NavLink>
				</li>
				{sessionUser && 
					<>
					<li className='nav-item'>
						<NavLink exact to="/current">Your Discs</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink exact to="/new">Add Disc</NavLink>
					</li>
					</>
				}
			{isLoaded && (
				<li className='nav-item'>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			</ul>
		</nav>
	);
}

export default Navigation;
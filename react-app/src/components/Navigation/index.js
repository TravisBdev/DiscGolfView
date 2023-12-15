import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../assets/DGLogo.png'
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav className='nav-bar'>
			
				<div className='nav-item'>
					<NavLink exact to="/"><img className="dgv-logo" src={logo} alt="" /></NavLink>
				</div>
				{sessionUser && 
					<>
					<div className='nav-item'>
						<NavLink exact to="/current">Your Discs</NavLink>
					</div>
					<div className='nav-item'>
						<NavLink exact to="/new">Add Disc</NavLink>
					</div>
					</>
				}
			{isLoaded && (
				<div className='nav-item'>
					<ProfileButton user={sessionUser} />
				</div>
			)}
			
		</nav>
	);
}

export default Navigation;
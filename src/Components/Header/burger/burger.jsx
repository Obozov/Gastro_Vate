import h from './burger.module.css'
import { NavLink } from 'react-router-dom';


const Burger = () => {




	return (
		<div className={h.header_burger}>
			<div className={h.item}>
				<NavLink className={({ isActive }) => isActive ? `${h.active_link}` : ''} to="/list">list of restaurants</NavLink>
			</div>
			<div className={h.item}>
				<NavLink className={({ isActive }) => isActive ? `${h.active_link}` : ''} to="/map">map of restaurants</NavLink>
			</div>
			<div className={h.item}>
				<NavLink className={({ isActive }) => isActive ? `${h.active_link}` : ''} to="/users">users</NavLink>
			</div>
			<div className={h.item}>
				<NavLink className={({ isActive }) => isActive ? `${h.active_link}` : ''} to="/about">about us</NavLink>
			</div>
			<div className={h.item} >
				<NavLink className={({ isActive }) => isActive ? `${h.active_link}` : ''} to="/acc">account</NavLink>
			</div>

		</div>
	)
}

export default Burger;

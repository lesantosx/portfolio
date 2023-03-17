import { Link, useLocation } from 'react-router-dom'

import styles from './MenuLink.module.scss'

export default function MenuLink({ menus }) {
	const location = useLocation()

  return (
		<>
			{menus.map((menu) => {
				return (
					<Link 
						key={menu.children}		
						className={`${styles.link} ${ location.pathname === menu.to ? styles.link_active : ''}`} 
						to={menu.to}>
						{menu.children}
					</Link>
				)
			})}
		</>    
  )
}

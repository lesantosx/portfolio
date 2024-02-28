import '../../i18n'

import MenuLink from '../MenuLink'
import styles from './Menu.module.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Menu() {
	const menus = [
		{
			children: 'Home',
			to: '/'
		},
		{
			children: 'About me',
			to: '/'
		},
		{
			children: 'Skills',
			to: '/'
		},
		{
			children: 'Projects',
			to: '/projects'
		}
	]

  return (
    <header>
			<nav id="header" className={styles.nav}>
				<div></div>
				<MenuLink menus={menus} />
				<span>
					<button type='button' className={styles.btn__i18n}>PT</button><ArrowDropDownIcon className={styles.icon} />
				</span>				
			</nav>			
    </header>
  )
}

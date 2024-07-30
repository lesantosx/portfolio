import '../../i18n'
import styles from './Header.module.scss'

export default function Header() {
	const menus = [
		{
			title: 'Home',
			to: 'banner'
		},
		{
			title: 'About me',
			to: 'about'
		},
		{
			title: 'Skills',
			to: 'skills'
		},
		{
			title: 'Projects',
			to: 'projects'
		}
	]

	const goTo = (section) => {
		const element = document.getElementById(section)
    element.scrollIntoView()
	}

  return (
    <header className={styles.header}>
			<nav id="header" className={styles.nav}>
				<div></div>
				<ul className={styles.menus}>
					{menus.map((menu) => {
						return (
							<li key={menu.title} className={styles.title} onClick={() => goTo(menu.to)}>{menu.title}</li>
						)
					})}
				</ul>							
			</nav>			
    </header>
  )
}

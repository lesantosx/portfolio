import '../../i18n'
import styles from './Header.module.scss'

export default function Header() {
	const menus = [
		{
			title: 'Home',
			to: '/'
		},
		{
			title: 'About me',
			to: '/'
		},
		{
			title: 'Skills',
			to: '/'
		},
		{
			title: 'Projects',
			to: '/'
		}
	]

  return (
    <header className={styles.header}>
			<nav id="header" className={styles.nav}>
				<div></div>
				<ul className={styles.menus}>
					{menus.map((menu) => {
						return (
							<li key={menu.title} className={styles.title}>{menu.title}</li>
						)
					})}
				</ul>							
			</nav>			
    </header>
  )
}

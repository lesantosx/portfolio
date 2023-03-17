import MenuLink from '../MenuLink'
import styles from './Menu.module.scss'

export default function Menu() {
	const menus = [
		{
			children: 'Home',
			to: '/'
		},
		{
			children: 'Projects',
			to: '/projects'
		},
		{
			children: 'About Me',
			to: '/aboutme'
		}
	]

  return (
    <header>
        <nav className={styles.nav}>
          <MenuLink menus={menus} />
        </nav>
    </header>
  )
}

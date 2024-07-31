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

	const easeInOutCubic = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t * t + b;
		t -= 2;
		return c / 2 * (t * t * t + 2) + b;
	}

	const handleScroll = (sectionId) => {
		const target = document.getElementById(sectionId)
		const offset = -100
		const start  = window.scrollY
		const distance = target.offsetTop - start + offset
		const duration = 500
		let startTime  = null

		function step(timestamp) {
			if (!startTime) {
				startTime = timestamp;
			}
			const progress = timestamp - startTime;
			window.scrollTo(0, easeInOutCubic(progress, start, distance, duration));
			if (progress < duration) {
				window.requestAnimationFrame(step);
			}
		}

    window.requestAnimationFrame(step);
  }

  return (
    <header className={styles.header}>
			<nav id="header" className={styles.nav}>
				<div></div>
				<ul className={styles.menus}>
					{menus.map((menu) => {
						return (
							<li
								key={menu.title}
								className={styles.title}
								onClick={() => handleScroll(menu.to)}
							>
								{menu.title}
							</li>
						)
					})}
				</ul>							
			</nav>			
    </header>
  )
}

import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"

export function Footer() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<footer className={theme === "light" ? "light-footer" : "dark-footer"}>
			<section>
				<ul className="links">
					<li><a href="/">About</a></li>
					<li><a href="/">Login</a></li>
					<li><a href="/">Join</a></li>
				</ul>
				<p>Copyright &copy; App 2025. All rights reserved.</p>
			</section>
			
			<section>
				<div className="tools">
					<button>Language</button>
					<button onClick={toggleTheme}>
						{theme === "light" ? "Dark mode" : "Light mode"}
					</button>
				</div>
			</section>
		</footer>
	)
}

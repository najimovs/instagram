import { NavLink } from "react-router"
import { Language } from "@components/Language/Language"
import { Theme } from "@components/Theme/Theme"
import { Text } from "@components/Text/Text"

export function Footer() {

	return (
		<footer>
			<section>
				<ul className="links">
					<li>
						<NavLink to="/about" end>
							<Text name="page_about" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/login" end>
							<Text name="page_login" />
						</NavLink>
					</li>
					<li>
						<NavLink to="/join" end>
							<Text name="page_join" />
						</NavLink>
					</li>
				</ul>
				<p>Copyright &copy; App 2025. <Text name="rights" /></p>
			</section>
			<section>
				<div className="tools">
					<Language />
					<Theme />
				</div>
			</section>
		</footer>
	)
}

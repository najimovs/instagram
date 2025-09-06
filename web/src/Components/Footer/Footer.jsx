import { Language } from "@components/Language/Language"
import { Theme } from "@components/Theme/Theme"
import { Text } from "@components/Text/Text"

export function Footer() {

	return (
		<footer>
			<section>
				<ul className="links">
					<li>
						<a href="/">
							<Text name="page_about" />
						</a>
					</li>
					<li>
						<a href="/">
							<Text name="page_login" />
						</a>
					</li>
					<li>
						<a href="/">
							<Text name="page_join" />
						</a>
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

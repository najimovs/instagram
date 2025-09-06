import { useContext } from "react"
import { LanguageContext } from "../../Contexts/LanguageContext"
import { text } from "../../translate"

export function Footer() {

	const [language] = useContext(LanguageContext)

	return (
		<footer>
			<section>
				<ul className="links">
					<li>
						<a href="/">{text[language].about}</a>
					</li>
					<li>
						<a href="/">{text[language].login}</a>
					</li>
					<li>
						<a href="/">{text[language].join}</a>
					</li>
				</ul>
				<p>{text[language].rights}</p>
			</section>
			<section>
				<div className="tools">
					<button>{text[language].language}</button>
					<button>{text[language].lightMode}</button>
				</div>
			</section>
		</footer>
	)
}

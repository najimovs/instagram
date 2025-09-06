import { useContext } from "react"
import { LanguageContext } from "../../Contexts/LanguageContext"
import { text } from "../../translate"

export function Header() {

	const [language] = useContext(LanguageContext)

	return (
		<header>
			<nav>
				<ul>
					<li>
						<button className="goHome">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
								<g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-362.000000, -101.000000)">
									<path d="M392,129 C392,130.104 391.104,131 390,131 L384.832,131 L377.464,123.535 L386,114.999 L392,120.999 L392,129 L392,129 Z M366,131 C364.896,131 364,130.104 364,129 L364,128.061 L371.945,120.945 L382.001,131 L366,131 L366,131 Z M370,105 C372.209,105 374,106.791 374,109 C374,111.209 372.209,113 370,113 C367.791,113 366,111.209 366,109 C366,106.791 367.791,105 370,105 L370,105 Z M390,101 L366,101 C363.791,101 362,102.791 362,105 L362,129 C362,131.209 363.791,133 366,133 L390,133 C392.209,133 394,131.209 394,129 L394,105 C394,102.791 392.209,101 390,101 L390,101 Z M370,111 C371.104,111 372,110.104 372,109 C372,107.896 371.104,107 370,107 C368.896,107 368,107.896 368,109 C368,110.104 368.896,111 370,111 L370,111 Z">
									</path>
								</g>
							</svg>
						</button>
					</li>
					<li>
						<button>
							<span>{text[language].login}</span>
						</button>
					</li>
					<li>
						<button>
							<span>{text[language].join}</span>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

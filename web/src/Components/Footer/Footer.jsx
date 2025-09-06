import { Theme } from "../Theme/Theme"

export function Footer() {

	return (
		<footer>
			<section>
				<ul className="links">
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Login</a>
					</li>
					<li>
						<a href="/">Join</a>
					</li>
				</ul>
				<p>Copyright &copy; App 2025. All rights reserved.</p>
			</section>
			<section>
				<div className="tools">
					<button>Language</button>
					<Theme />
				</div>
			</section>
		</footer>
	)
}

// Function Footer to return the element:
function Footer() {
	return (
		<footer className="footer mt-auto py-3 bg-dark">
			<div className="container">
				<p className="text-light">
					App desenvolvido por{" "}
					<a
						text-decoration="none"
						href="https://www.linkedin.com/in/nicolas-s%C3%A1-de-souza-307597176/"
						target="_blank"
						rel="noreferrer"
					>
						Nicolas Sá de Souza
					</a>
				</p>
				<p className="text-light">
					<small>
						<strong>Semana Spring React</strong>
						<br />
						Evento promovido pela escola DevSuperior:{" "}
						<a
							href="https://instagram.com/devsuperior.ig"
							target="_blank"
							rel="noreferrer"
						>
							@devsuperior.ig
						</a>
					</small>
				</p>
			</div>
		</footer>
	);
}

export default Footer;

import Footer from "components/Footer";
import NavBar from "components/NavBar/indext";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<NavBar />
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">DSVendas</h1>
					<p className="lead">
						Analise o desempenho das suas vendas por diferentes perspectivas
					</p>
					<hr />
					<p>
						Esta aplicação consiste em exibir um dashboard a partir de dados
						fornecidos por um back end construído com Spring Boot.
					</p>
					{/* From react router dom, it allows navigation between components. Using the className from bootstrap to customize it */}
					<Link className="btn btn-primary btn-large" to="/dashboard">
						Access Dashboard
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;

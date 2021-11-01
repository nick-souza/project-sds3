import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar/indext";

function App() {
	return (
		// When returning this function, only one element is allowed. So we use the fragment, the empty <>;
		<>
			{/* Importing the NavBar from the components folder, using the same function as the App(); */}
			<NavBar />
			{/* Using the className container from bootstrap to set the right padding for the elements */}
			<div className="container">
				<h1 className="text-primary">Hello World</h1>
				<DataTable />
			</div>
			{/* Importing the Footer from the components folder: */}
			<Footer />
		</>
	);
}

export default App;

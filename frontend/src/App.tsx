import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChat";
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
				<h1 className="text-primary py-3">Sales Dashboard</h1>

				{/* Using the row element from bootstrap to organize the content in rows and a paddin to x of 3 px: */}
				<div className="row px-3">
					{/* Setting the colum grid spacement to 6 units, since bootstrap separates the horizontal layout in 12 parts, so we are using half of it  */}
					<div className="col-sm-6">
						{/* Using bootstrap to aligh center and set as the secundary header */}
						<h5 className="text-center text-secondary">Success Rate (%)</h5>
						{/* Including the barchart React component from the components folder */}
						<BarChart />
					</div>

					<div className="col-sm-6">
						<h5 className="text-center text-secondary">All Sales</h5>
						{/* Including the barchart React component from the components folder */}
						<DonutChart />
					</div>
				</div>

				<div className="py-3">
					<h2 className="text-primary">All Sales</h2>
				</div>

				{/* Importing the table component */}
				<DataTable />
			</div>
			{/* Importing the Footer from the components folder: */}
			<Footer />
		</>
	);
}

export default App;

import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "type/sale";
import { BASE_URL } from "utils/requests";

//Type to insert the data coming from the backend into the chart
type ChartData = {
	series: number[];
	labels: string[];
};

function DonutChart() {
	let chartData: ChartData = { labels: [], series: [] };

	//Using axios to make the request to be able to populate the chart with the data coming from the backend
	//Getting the base url from the utils/request
	//This method get from axios returns a promise, to make the request async
	axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
		//We also have to define the type to be the SaleSum
		const data = response.data as SaleSum[];
		//We have to convert the response type to be the same as the chart requires, just an array with the values;
		const myLabels = data.map((x) => x.sellerName);
		const mySeries = data.map((x) => x.sum);

		//Now adding to the chartData to finally be able to use on the chart:
		chartData = { labels: myLabels, series: mySeries };

		console.log(chartData);
	});

	// const mockData = {
	// 	series: [477138, 499928, 444867, 220426, 473088],
	// 	labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
	// };

	const options = {
		legend: {
			show: true,
		},
	};

	return (
		<Chart
			// Referencing the options from the object created above, to set up the options for the bar chart:
			// Also using the spread operator to get the properties from the obeject option and use in the chart element:
			options={{ ...options, labels: chartData.labels }}
			// In the bar chart, the data has to be in a list format, so we reference mockdata.series which is already in a list:
			series={chartData.series}
			// Setting the bar type and the height:
			type="donut"
			height="240"
		/>
	);
}

export default DonutChart;

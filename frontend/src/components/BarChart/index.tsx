import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "type/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

//Type to get the data from the backend and insert into the chart:
type ChartData = {
	labels: {
		categories: string[];
	};
	series: [
		{
			name: string;
			data: number[];
		}
	];
};

function BarChart() {
	const [chartData, setChartData] = useState<ChartData>({
		labels: {
			categories: [],
		},
		series: [
			{
				name: "",
				data: [],
			},
		],
	});

	useEffect(() => {
		//Using axios to make the request to be able to populate the chart with the data coming from the backend
		//Getting the base url from the utils/request
		//This method get from axios returns a promise, to make the request async
		axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
			//We also have to define the type to be the SaleSum
			const data = response.data as SaleSuccess[];
			//We have to convert the response type to be the same as the chart requires, just an array with the values;
			const myLabels = data.map((x) => x.sellerName);
			//This data we want to be in percentage, so we are calculating e then using the helper function to round it:
			const mySeries = data.map((x) => round((100.0 * x.deals) / x.visited, 1));

			//Now adding to the chartData to finally be able to use on the chart:
			setChartData({
				labels: {
					categories: myLabels,
				},
				series: [
					{
						name: "Success Rate",
						data: mySeries,
					},
				],
			});
		});
		//Since this is a async call, it will start to load and then move down to display the chart before the request is completed. So it will display with the empty data. We have to use the useEffect
	}, []);

	// Since every React Component is a function with a return, we can add code before the return, and then just return what we want:
	// And since we installed the ApexChart, we can return it with the data we get before:

	// Object Options for the BarChart:
	const options = {
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
	};

	// Mock data for the chart:
	// const mockData = {
	// 	labels: {
	// 		categories: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
	// 	},
	// 	series: [
	// 		{
	// 			name: "% Sucesso",
	// 			data: [43.6, 67.1, 67.7, 45.6, 71.1],
	// 		},
	// 	],
	// };

	//Now returnin the Chart imported element with the data from the code before the return:
	return (
		<Chart
			// Referencing the options from the object created above, to set up the options for the bar chart:
			// Also using the spread operator to get the properties from the obeject option and use in the chart element:
			// Referencing the X axix with the labels to set the category:
			options={{ ...options, xaxis: chartData.labels }}
			// In the bar chart, the data has to be in a list format, so we reference mockdata.series which is already in a list:
			series={chartData.series}
			// Setting the bar type and the height:
			type="bar"
			height="240"
		/>
	);
}

export default BarChart;

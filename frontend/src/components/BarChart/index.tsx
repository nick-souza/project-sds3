import Chart from "react-apexcharts";

function BarChart() {
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
	const mockData = {
		labels: {
			categories: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
		},
		series: [
			{
				name: "% Sucesso",
				data: [43.6, 67.1, 67.7, 45.6, 71.1],
			},
		],
	};

	//Now returnin the Chart imported element with the data from the code before the return:
	return (
		<Chart
			// Referencing the options from the object created above, to set up the options for the bar chart:
			// Also using the spread operator to get the properties from the obeject option and use in the chart element:
			// Referencing the X axix with the labels to set the category:
			options={{ ...options, xaxis: mockData.labels }}
			// In the bar chart, the data has to be in a list format, so we reference mockdata.series which is already in a list:
			series={mockData.series}
			// Setting the bar type and the height:
			type="bar"
			height="240"
		/>
	);
}

export default BarChart;

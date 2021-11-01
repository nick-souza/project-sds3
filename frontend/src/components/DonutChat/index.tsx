import Chart from "react-apexcharts";

function DonutChart() {
	const mockData = {
		series: [477138, 499928, 444867, 220426, 473088],
		labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
	};

	const options = {
		legend: {
			show: true,
		},
	};

	return (
		<Chart
			// Referencing the options from the object created above, to set up the options for the bar chart:
			// Also using the spread operator to get the properties from the obeject option and use in the chart element:
			options={{ ...options, labels: mockData.labels }}
			// In the bar chart, the data has to be in a list format, so we reference mockdata.series which is already in a list:
			series={mockData.series}
			// Setting the bar type and the height:
			type="donut"
			height="240"
		/>
	);
}

export default DonutChart;

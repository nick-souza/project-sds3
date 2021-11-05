import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "type/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

function DataTable() {
	//Function to move between pages:
	const [activePage, setActivePage] = useState(0);

	const changePage = (index: number) => setActivePage(index);

	//UseState to import the data from the backend
	const [page, setPage] = useState<SalePage>({
		first: true,
		last: true,
		number: 0,
		totalElements: 0,
		totalPages: 0,
	});

	useEffect(() => {
		axios
			.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
			.then((response) => {
				setPage(response.data);
			});
	}, [activePage]);

	return (
		<>
			<Pagination page={page} onPageChange={changePage} />
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th>Date</th>
							<th>Salesman</th>
							<th>Clients Visited</th>
							<th>Deals Closed</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{/* Making this Tbody dynamic, to scale according to the data from the backend */}
						{page.content?.map((x) => (
							<tr key={x.id}>
								{/* Formating the date using the helper function */}
								<td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
								<td>{x.seller.name}</td>
								<td>{x.visited}</td>
								<td>{x.deals}</td>
								<td>{x.amount.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default DataTable;

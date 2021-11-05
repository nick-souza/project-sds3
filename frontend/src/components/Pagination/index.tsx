import React from "react";
import { SalePage } from "type/sale";

type Props = {
	page: SalePage;
	onPageChange: Function;
};

function Pagination({ page, onPageChange }: Props) {
	return (
		<div className="row d-flex justify-content-center">
			<nav>
				<ul className="pagination">
					{/* if we are on the first page, we need to disable the previous btn, because there is nowhere to go. */}
					<li className={`page-item ${page.first ? "disabled" : ""}`}>
						{/* Calling the onPageChange function when the btn is clicked */}
						<button
							className="page-link"
							onClick={() => onPageChange(page.number - 1)}
						>
							Previous
						</button>
					</li>
					<li className="page-item disabled">
						<span className="page-link">{page.number + 1}</span>
					</li>
					<li className={`page-item ${page.last ? "disabled" : ""}`}>
						<button
							className="page-link"
							onClick={() => onPageChange(page.number + 1)}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Pagination;

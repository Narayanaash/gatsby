import { Link } from 'gatsby'
import React from 'react'

export default function Pagination() {
    return (
        <div className="pagination paddingTop--small">
            <div className="pagination__prev disabled"><Link to="javascript:void();" className="transition">Previous</Link></div>
                <ul className="pagination__list d-flex">
                    <li className="pagination__item">
                        <Link to="javascript:void();" className="pagination__link active">1</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="#!" className="pagination__link transition">2</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="#!" className="pagination__link transition">3</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="#!" className="pagination__link transition">4</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to="#!" className="pagination__link transition">5</Link>
                    </li>
                </ul>
            <div className="pagination__next"><Link to="#!" className="transition">Next</Link></div>
        </div>
    )
}

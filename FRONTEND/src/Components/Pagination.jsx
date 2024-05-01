export default function Pagination({ booksPerPage, totalBooks, currentPage, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a onClick={() => paginate(currentPage - 1)} href='!#' className='page-link'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li className='page-item'>
                    <a onClick={() => paginate(currentPage + 1)} href='!#' className='page-link'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
}

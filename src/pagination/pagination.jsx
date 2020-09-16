import React, {useState, useEffect} from 'react';

const Pagination = props => {

    const {totalResults, currentPageData} = props;
    const totalPages = Math.floor(totalResults/10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {

            currentPageData(currentPage,'zindagi');

        }, [currentPage]);

    if(!totalResults){
        return ''
    }

    return (
        <div>
            <div onClick={() => setCurrentPage(currentPage - 1)}>Prev</div>
                {`${currentPage} of ${totalPages}` }
            <div onClick={() => setCurrentPage(currentPage + 1)}>Next</div>    
        </div>
    )
}

export default Pagination;
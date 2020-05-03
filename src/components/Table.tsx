import React, { FunctionComponent, useState } from 'react';
import cn from 'classnames';

const DEFAULT_ITEMS_PER_PAGE = 10;

interface TableProps {
  images: string[];
  itemsPerPage?: number;
}

const Table: FunctionComponent<TableProps> = (props) => {
  const { images, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const numPages = Math.ceil(props.images.length / props.itemsPerPage);
  const imagesInPage = images.slice(
    currentPage * itemsPerPage,
    Math.min((currentPage + 1) * itemsPerPage, images.length));

  return (
    <>
      <ul className='pagination'>
        <li className='page-item'>
          <button className={cn('btn btn-primary', { disabled: currentPage === 0 })}
            onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        </li>
        <li className='page-item'>
          <span>Page {currentPage + 1}/{numPages}</span>
        </li>
        <li className='page-item'>
          <button className={cn('btn btn-primary', { disabled: currentPage === numPages - 1 })}
            onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </li>
      </ul>
      <div>
        {imagesInPage.map(imageName => (
         <>
          <b>{imageName}</b> <br />
          <img src={`/${imageName}`} />
          <br /><br/>
         </> 
        ))}
      </div>
    </>
  );
};

Table.defaultProps = {
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
};

export default Table;

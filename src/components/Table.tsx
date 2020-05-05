import React, { FunctionComponent, useState, useEffect } from 'react';
import cn from 'classnames';

import s from './Table.module.scss';

const DEFAULT_ITEMS_PER_PAGE = 12;

interface TableProps {
  images: string[];
  itemsPerPage?: number;
}

const Table: FunctionComponent<TableProps> = (props) => {
  const { images, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log('Resetting current page');
    setCurrentPage(0);
  }, [props.images]);

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
          <span>Page {currentPage + 1}/{Math.max(numPages, 1)}</span>
        </li>
        <li className='page-item'>
          <button className={cn('btn btn-primary', { disabled: currentPage >= numPages - 1 })}
            onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </li>
      </ul>
      <div className={s['table-container']}>
        {imagesInPage.map(imageName => (
         <div className={s.element} key={imageName}>
          <b>{imageName}</b>
          <img src={`/${imageName}`} />
         </div> 
        ))}
      </div>
    </>
  );
};

Table.defaultProps = {
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
};

export default Table;

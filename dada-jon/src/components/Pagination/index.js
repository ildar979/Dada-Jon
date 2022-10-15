import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const handleChangeCurrentPage = (event) => {
    dispatch(setCurrentPage(event.selected + 1));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handleChangeCurrentPage}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

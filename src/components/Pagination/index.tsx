import { SetStateAction, useEffect, useState } from 'react';
import * as styles from './styled';
import { BsChevronLeft, BsChevronRight, BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

type PaginationType = {
  currentPage: number;
  handlePagination: (value: number) => void;
  pages: number | any;
};

export const Pagination = ({ currentPage, handlePagination, pages }: PaginationType) => {
  const [pagination, setPagination] = useState<number>(currentPage);

  const handleChevronDoubleLeft = () => {
    setPagination(1);
  };

  const handleChevronLeft = () => {
    setPagination(pagination - 1);
  };

  const handleChevronRight = () => {
    setPagination(pagination + 1);
  };

  const handleChevronDoubleRight = () => {
    setPagination(pages);
  };

  useEffect(() => {
    handlePagination(pagination);
  }, [pagination]);

  return (
    <styles.Container>
      <button onClick={handleChevronDoubleLeft} disabled={pagination === 1}>
        <BsChevronDoubleLeft />
      </button>

      <button onClick={handleChevronLeft} disabled={pagination === 1}>
        <BsChevronLeft />
      </button>

      <strong>
        {pagination}/{pages}
      </strong>

      <button onClick={handleChevronRight} disabled={pages === pagination}>
        <BsChevronRight />
      </button>

      <button onClick={handleChevronDoubleRight} disabled={pages === pagination}>
        <BsChevronDoubleRight />
      </button>
    </styles.Container>
  );
};

import React from "react";

const PaginationGallery = ({ imgsPerPage, totalImgs, paginate }) => {
  let PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalImgs / imgsPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <>
      <div>
        <ul className="pagination">
          {PageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default PaginationGallery;

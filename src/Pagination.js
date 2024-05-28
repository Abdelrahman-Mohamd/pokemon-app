import React from "react";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage}>previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>next</button>}
    </div>
  );
};

export default Pagination;

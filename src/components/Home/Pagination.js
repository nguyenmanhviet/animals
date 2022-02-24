import React from "react";
import classes from "./Pagination.module.css";
import { totalPage, window } from "../../Data/animals";

function Pagination(prosp) {
  let maxLeft = prosp.pageNumber - Math.round(window /2);
  let maxRight = prosp.pageNumber + Math.round(window /2);

  if(maxLeft < 1) {
    maxLeft = 1;
    maxRight = window;
  }

  if(maxRight > totalPage) {
    maxLeft = totalPage - (window - 1);
    if(maxLeft < 1) maxLeft = 1;
    maxRight = totalPage;
  }

  const listPageNumber = [];
  for(let i = maxLeft; i <= maxRight; i++){
    listPageNumber.push(<li key={i}>
      <button style={i === prosp.pageNumber ? {background: "#741188"} : {}} onClick={() => prosp.onChangePage(i)}>{i}</button></li>)
  }

  return (
    <div className={classes.pagination}>
      <ul>
        {listPageNumber}
      </ul>
    </div>
  );
}

export default Pagination;

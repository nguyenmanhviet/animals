import React, { useContext, useState } from "react";

import Card from "../UI/Card/Card";

import SingleAnimal from "./SingleAnimal";
import classes from "./Home.module.css";
import { Data } from "../../index";
import Pagination from "./Pagination";
import {rows} from '../../Data/animals'

const Home = (props) => {
  const data = useContext(Data);
  
  const [currentPage, setPage] = useState(1);

  const handleChangePage = (page) => {
    setPage(page);
  }

  const dataAnimals = data.slice((currentPage-1)*rows, currentPage*rows);

  return (
    <>
      <Card className={classes.home}>
        {dataAnimals.map((animal) => {
          return (
            <Card key={animal.id} className={classes.item}>
              {<SingleAnimal data={animal}></SingleAnimal>}
            </Card>
          );
        })}
      </Card>
      <Pagination pageNumber={currentPage} onChangePage={handleChangePage}></Pagination>
    </>
  );
};

export default Home;

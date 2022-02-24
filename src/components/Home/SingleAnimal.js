import React from "react";
import classes from "./SingleAnimals.module.css";
import Button from "../UI/Button/Button";

function SingleAnimal(prosp) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>
        <img src={prosp.data.photo.full} alt={prosp.data.name}></img>
      </div>
      <div>
        <Button>{prosp.data.name}</Button>
      </div>
    </div>
  );
}
export default SingleAnimal;

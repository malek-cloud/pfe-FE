import React from "react";
import Categories from "./categories";
import Formations from "./formations";
import Formulaire from "./formulaire";
import DetailedFormation from "./detailedFormation";
import { useState } from "react";
import "./education.css";
function Stomach() {
  const [category, setCategory] = useState("Systéme Embarqué");
  const [formation, setFormation] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  function getCategory(value) {
    setCategory(value);
  }
  function getSubCateg(value) {
    setSubCategory(value);
    console.log("stomach file " + subCategory)
  }
  function getFormation(value) {
    setFormation(value);
  }
  return (
    <div className="stomach">
      <Categories selectCategory={getCategory} category={category} selectSubCateg={getSubCateg} />

      {formation === "" ? (
        <Formations
          category={category}
          formation={formation}
          selectCategory={getCategory}
          selectFormation={getFormation}
        />
      ) : (
        <DetailedFormation
          formation={formation}
          selectFormation={getFormation}
          selectCategory={getCategory}        />
      )}
      <Formulaire category={category} subCategory={subCategory} />
    </div>
  );
}

export default Stomach;

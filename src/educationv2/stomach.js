import React from "react";
import Categories from "./categories";
import Formations from "./formations";
import Formulaire from "./formulaire";
import DetailedFormation from "./detailedFormation";
import { useState, useEffect } from "react";
import "./education.css";
import axios from "axios";
function Stomach() {
  const [data, setData] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataFormations, setDataFormations] = useState([]);
  useEffect(() => {
    const getFormations = async () => {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "activities/Formations"
      );
      setData(response.data.formations);

      const categ = [];
      response.data.formations.map(e =>{
        categ.push(e.field)
      })
      setDataCategories(categ)
      const forma = [];
      response.data.formations.map(e =>{
        forma.push(e.name)
      })
      console.log(forma)
      setDataFormations(forma);
    };
    getFormations();
  }, []);

  const [category, setCategory] = useState("Embedded system");
  const [formation, setFormation] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  function getCategory(value) {
    setCategory(value);
  }
  function getSubCateg(value) {
    setSubCategory(value);
    console.log("stomach file " + subCategory);
  }
  function getFormation(value) {
    setFormation(value);
  }
  return (
    <div >
     {data && dataCategories &&  dataFormations && <div className="stomach">
      <Categories
        data={data}
        dataCategories={dataCategories}
        selectCategory={getCategory}
        category={category}
        selectSubCateg={getSubCateg}
      />

      {formation === "" ? (
        <Formations
          data={data}
          dataFormations={dataFormations}
          category={category}
          formation={formation}
          selectCategory={getCategory}
          selectFormation={getFormation}
        />
      ) : (
        <DetailedFormation
        data={data}
        dataFormations={dataFormations}
          formation={formation}
          selectFormation={getFormation}
          selectCategory={getCategory}
        />
      )}
      <Formulaire category={category} subCategory={subCategory} />
       </div>}
    </div>
  );
}

export default Stomach;

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

  useEffect(() => {
    const getFormations = async () => {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "activities/Formations"
      );
      setData(response.data.formations);
    };
    getFormations();
  }, []);

  const [formation, setFormation] = useState("");
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState("All Our Workshops");
  const [workshopsToShow, setWorkshopsToShow] = useState(data);

  function getFormation(value) {
    setFormation(value);
  }
  function getFilter(value) {
    setFilter(value);
  }
  function getTitle(value) {
    setTitle(value);
  }
  function getWorkshopsToShow(value) {
    setWorkshopsToShow(value);
  }
  return (
    <div>
      {data && workshopsToShow && (
        <div className="stomach">
          <Categories
            data={data}
            title={title}
            getFilter={getFilter}
            getTitle={getTitle}
            getWorkshops={getWorkshopsToShow}        
          />

          {formation === "" ? (
            <Formations
              data={data}
              title={title}
              filter={filter}
              workshopsToShow={workshopsToShow}
              formation={formation}
              selectFormation={getFormation}
            />
          ) : (
            <DetailedFormation
              data={data}
              formation={formation}
              selectFormation={getFormation}   
            />
          )}
          <Formulaire data={data} formation={formation} />
        </div>
      )}
    </div>
  );
}

export default Stomach;

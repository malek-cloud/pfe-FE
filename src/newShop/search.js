import "./search.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Search(props) {
  const [searched, setSearched] = useState([]);
  const [taped, setTyped] = useState(null);
  const searchInput = useRef();
  function handleChange(event) {
    setTyped(searchInput.current.value);
    console.log(searchInput.current.value);
  }
  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "shop/Products",
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      if(searchInput.current.value !==""){
        setSearched(resp.data.products.filter((e) => e.name.includes(searchInput.current.value)));
        console.log(searched.length)
      props.setSearch(searched);
      }
    })
    if(searchInput.current.value ===""){
      props.setEmpty(true)
    }else{
      props.setEmpty(false)
    }
    }
  , [taped]);
  return (
    <div className="inlineSearch">
      {/*  <select
        defaultValue={"Tous les catégories"}
        className="form-select form-select searchSelector"
        aria-label=".form-select-lg example"
      >
        <option className="optionsSearch">Tous les catégories</option>
        <option value="1" className="optionsSearch">
          Kit Robotique
        </option>
        <option value="2" className="optionsSearch">
          Kit IOT
        </option>
        <option value="3" className="optionsSearch">
          Clipart Laser Cut
        </option>
      </select> */}
      <input
        ref={searchInput}
        type="Search"
        placeholder="  🔎  Chercher dans tous le store.."
        className="searchInput"
 onChange={handleChange}
      />
      <div className="buttonSearch">Rechercher</div>
    </div>
  );
}
export default Search;

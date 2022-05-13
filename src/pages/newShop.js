import Head from "../shopElements/head";
import Search from "../newShop/search";
import Categories from "../newShop/categories";
import Products from "../newShop/products";
import Sort from "../newShop/sortby";
import "../newShop/newShop.css";
import "../newShop/categories.css";
import { useState } from "react";

function NewShop(props) {
  const [carte, setCarte] = useState(true);
  const [robotique, setRobotique] = useState(false);
  const [iot, setIot] = useState(false);
  const [arduino, setArduino] = useState(false);
  const [laser, setLaser] = useState(false);
  const [capteur, setCapteur] = useState(false);
  const [accessoires, setAccessoires] = useState(false);
  const [category, setCategory] = useState("carte de développement");
 const [searched , setSearch] = useState([]);
 const [empty , setEmpty] = useState([]);
   return (
    <div style={{ overflowX: "hidden" }}>
      <Head type={"shop"} />
      <div className="inlineItems">
        <div>
          <Categories
            carte={carte}
            setCategory={setCategory}
            setCarte={setCarte}
            robotique={robotique}
            setRobotique={setRobotique}
            iot={iot}
            setIot={setIot}
            arduino={arduino}
            setArduino={setArduino}
            laser={laser}
            setLaser={setLaser}
            setCapteur={setCapteur}
            capteur={capteur}
            accessoires={accessoires}
            setAccessoires={setAccessoires}
            category={category}
          />
        </div>
        <Search setEmpty={setEmpty} setSearch={setSearch} />
        <Sort />
      </div>
      <Products empty={empty} search={searched} category={category} setId={props.setId} />
    </div>
  );
}
export default NewShop;

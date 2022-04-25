import React, { useState } from "react";
import { useCategory } from "../context/formationCategory";
function WorkshopChoice(props) {
  const level = useCategory();
  const [select, setSelect] = useState(props.category);

  function handleChange(event) {
    if (event) {
      setSelect(event.target.value);
    } else {
      setSelect(props.category);
    }
  }
  if (
    level ===
    [
      "Systéme Embarqué",
      "Machines",
      "Internet Des Objets",
      "Intelligence Artificielle",
      "Developpement IT",
      "Robotique",
    ]
  ) {
        console.log(level)
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Internet Des Objets">Internet Des Objets</option>
        <option value="Developpement IT">Developpement IT</option>
        <option value="Systéme Embarqué">Systéme Embarqué</option>
        <option value="Intelligence Artificielle">
          intelligence artificielle
        </option>
        <option value="Machines">Machines</option>
        <option value="Robotique">Robotique</option>
      </select>
    );
  } else if (
    level === ["Notions de Base Embarqué", "Linux", "Electronique", "C Embarqué"]
  ) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Notions de Base">Notions de Base</option>
        <option value="Linux">Linux</option>
        <option value="Electronique">Electronique</option>
        <option value="C Embarqué">C Embarqué </option>
      </select>
    );
  } else if (
    level ===
    ["Impression 3D", "Laser Cutting", "Routage CNC", "Fabrication PCB"]
  ) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Impression 3D">Impression 3D</option>
        <option value="Laser Cutting">Laser Cutting</option>
        <option value="Routage CNC">Routage CNC</option>
        <option value="Fabrication PCB">Fabrication PCB</option>
      </select>
    );
  } else if (
    level === ["Notions de Base IOT", "Conception", "Gateways", "Big Data"]
  ) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Notions de Base">Notions de Base</option>
        <option value="Conception">Conception</option>
        <option value="Gateways">Gateways</option>
        <option value="Big Data">Big Data</option>
      </select>
    );
  } else if (
    level === ["Machine Learning", "Deep Learning", "NLP", "Mathématiques"]
  ) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="Deep Learning">Deep Learning</option>
        <option value="NLP">NLP</option>
        <option value="Mathématiques">Mathématiques</option>
      </select>
    );
  } else if (
    level ===
    ["Developpement Web", "Développement Mobile", "DevOps", "Automation Tests"]
  ) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Développement Web">Développement Web</option>
        <option value="Développement Mobile">Développement Mobile</option>
        <option value="DevOps">DevOps</option>
        <option value="Automation Tests">Automation Tests</option>
      </select>
    );
  } else if (level === ["Notions de Base Arduino", "Robot Arduino", "c"]) {
    return (
      <select
        name="categories"
        id="categories"
        className="selection"
        onChange={handleChange}
        value={select}
      >
        <option value="vide"></option>
        <option value="Notions de Base">Notions de Base Arduino</option>
        <option value="Robot Arduino">Robot Arduino</option>
        <option value="c">c</option>
      </select>
    );
  }
  else if (level === ["RaspBerry PI Robotique", "STM 32", "ESP 32", "Arduino"]) {
      return (
        <select
          name="categories"
          id="categories"
          className="selection"
          onChange={handleChange}
          value={select}
        >
          <option value="vide"></option>
          <option value="RaspBerry PI Robotique">RaspBerry PI Robotique</option>
          <option value="STM 32">STM 32</option>
          <option value="ESP 32">ESP 32</option>
          <option value="Arduino">Arduino</option>
        </select>
      );
    }
    else { return <div></div>}
}

export default WorkshopChoice;

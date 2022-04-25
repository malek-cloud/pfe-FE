import React from 'react'
import "./education.css"
import {useState} from "react";
import { useCategoryUpdate } from "../context/formationCategory";

function Categories(props) {
  const updateCat = useCategoryUpdate();

  const [cat, setCat ] =useState("Systéme Embarqué")
  const [subCateg, setSubCateg ] =useState([])
  function selectEmbarque(){
    props.selectCategory("Systéme Embarqué");
    updateCat("Systéme Embarqué");
    setCat("Systéme Embarqué");
    setSubCateg(["Notions de Base","Linux","Electronique","C Embarqué"]);
    props.selectSubCateg(["Notions de Base","Linux","Electronique","C Embarqué"]);
    console.log("category file "+[...subCateg])

  }
  function selectMachine(){
    props.selectCategory("Machines");
    setCat("Machines");
    setSubCateg(["Impression 3D","Laser Cutting","Routage CNC","Fabrication PCB"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }
  function selectIOT(){
    props.selectCategory("Internet Des Objets");
    setCat("Internet Des Objets");
    setSubCateg(["Notions de Base","Conception","Gateways", "Big Data"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }
  function selectAI(){
    props.selectCategory("Intelligence Artificielle");
    setCat("Intelligence Artificielle");
    setSubCateg(["Machine Learning", "Deep Learning", "NLP", "Mathématiques"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }
  function selectDev(){
    props.selectCategory("Developpement IT");
    setCat("Developpement IT");
    setSubCateg(["Développement Web", "Développement Mobile", "DevOps", "Automation Tests"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }  
  function selectRobotique(){
    setCat("Robotique");
    setSubCateg(["Notions de Base","Robot Arduino","Drones"]);
    props.selectSubCateg([...subCateg]);
    props.selectCategory("Robotique");
    console.log("category file "+[...subCateg])

  }

  return (
    <div className='categoryBlock'>
          <div className='categoryTitle' >Categories</div>
          <div  className= {cat!=="Systéme Embarqué" ? "category" : "categorySelected"}  onClick={selectEmbarque}>Systéme Embarqué</div>
          
          {cat==="Systéme Embarqué" ? <div className="subCategoryBlock">
            <div className="subCategoryItem" onClick={()=>{props.selectCategory("Notions de Base")}}>➡ Notions de Base Embarqué</div>
            <div className="subCategoryItem" onClick={()=>{props.selectCategory("Linux")}}>➡ Linux</div>
            <div className="subCategoryItem" onClick={()=>{props.selectCategory("Electronique")}}>➡ Electronique</div>
            <div className="subCategoryItem" onClick={()=>{props.selectCategory("C Embarqué")}}>➡ C Embarqué</div>
          </div> : <div></div>}
          
          <div className= {cat!=="Machines" ? "category" : "categorySelected"}  onClick={selectMachine}>Machines</div>
          {cat==="Machines" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Impression 3D</div>
            <div className="subCategoryItem">➡ Laser Cutting</div>
            <div className="subCategoryItem">➡ Routage CNC</div>
            <div className="subCategoryItem">➡ Fabrication PCB</div>
          </div> : <div></div>}
          <div className= {cat!=="Internet Des Objets" ? "category" : "categorySelected"}  onClick={selectIOT}>Internet Des Objets</div>
          {cat==="Internet Des Objets" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Notions de Base IOT</div>
            <div className="subCategoryItem">➡ Conception</div>
            <div className="subCategoryItem">➡ Gateways</div>
            <div className="subCategoryItem">➡ Big Data</div>
          </div> : <div></div>}
          <div className= {cat!=="Intelligence Artificielle" ? "category" : "categorySelected"}  onClick={selectAI}>Intelligence Artificielle</div>
          {cat==="Intelligence Artificielle" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Machine Learning</div>
            <div className="subCategoryItem">➡ Deep Learning</div>
            <div className="subCategoryItem">➡ NLP</div>
            <div className="subCategoryItem">➡ Mathématiques</div>
          </div> : <div></div>}
          <div className= {cat!=="Developpement IT" ? "category" : "categorySelected"}  onClick={selectDev}>Developpement IT</div>
          {cat==="Developpement IT" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Développement Web</div>
            <div className="subCategoryItem">➡ Développement Mobile</div>
            <div className="subCategoryItem">➡ DevOps</div>
            <div className="subCategoryItem">➡ Automation Tests</div>
          </div> : <div></div>}
          <div className= {cat!=="Robotique" ? "category" : "categorySelected"}  onClick={selectRobotique}>Robotique</div>
          {cat==="Robotique" ? <div className="subCategoryBlock">
          <div className="subCategoryItem">➡Arduino</div>
            <div className="subCategoryItem">➡Raspberry Pi</div>
            <div className="subCategoryItem">➡STM 32</div>
            <div className="subCategoryItem">➡ESP 32</div>
          </div> : <div></div>}

    </div>
  )
}

export default Categories
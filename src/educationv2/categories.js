import React from 'react'
import "./education.css"
import {useState} from "react";
import { useCategoryUpdate } from "../context/formationCategory";

function Categories(props) {
  const updateCat = useCategoryUpdate();

  const [cat, setCat ] =useState("Embedded system")
  const [subCateg, setSubCateg ] =useState([])
  function selectEmbarque(){
    props.selectCategory("Embedded system");
    updateCat("Embedded system");
    setCat("Embedded system");
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
    props.selectCategory("Internet Of Things");
    setCat("Internet Of Things");
    setSubCateg(["Notions de Base","Conception","Gateways", "Big Data"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }
  function selectAI(){
    props.selectCategory("Artificial intelligence");
    setCat("Artificial intelligence");
    setSubCateg(["Machine Learning", "Deep Learning", "NLP", "Mathématiques"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }
  function selectDev(){
    props.selectCategory("IT development");
    setCat("IT development");
    setSubCateg(["Développement Web", "Développement Mobile", "DevOps", "Automation Tests"]);
    props.selectSubCateg([...subCateg]);
    console.log("category file "+[...subCateg])


  }  
  function selectRobotics(){
    setCat("Robotics");
    setSubCateg(["Notions de Base","Robot Arduino","Drones"]);
    props.selectSubCateg([...subCateg]);
    props.selectCategory("Robotics");
    console.log("category file "+[...subCateg])

  }

  return (
    <div className='categoryBlock'>
          <div className='categoryTitle' >Categories</div>
          <div  className= {cat!=="Embedded system" ? "category" : "categorySelected"}  onClick={selectEmbarque}>Embedded system</div>
          
          {cat==="Embedded system" ? <div className="subCategoryBlock">
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
          <div className= {cat!=="Internet Of Things" ? "category" : "categorySelected"}  onClick={selectIOT}>Internet Of Things</div>
          {cat==="Internet Of Things" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Notions de Base IOT</div>
            <div className="subCategoryItem">➡ Conception</div>
            <div className="subCategoryItem">➡ Gateways</div>
            <div className="subCategoryItem">➡ Big Data</div>
          </div> : <div></div>}
          <div className= {cat!=="Artificial intelligence" ? "category" : "categorySelected"}  onClick={selectAI}>Artificial intelligence</div>
          {cat==="Artificial intelligence" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Machine Learning</div>
            <div className="subCategoryItem">➡ Deep Learning</div>
            <div className="subCategoryItem">➡ NLP</div>
            <div className="subCategoryItem">➡ Mathématiques</div>
          </div> : <div></div>}
          <div className= {cat!=="IT development" ? "category" : "categorySelected"}  onClick={selectDev}>IT development</div>
          {cat==="IT development" ? <div className="subCategoryBlock">
            <div className="subCategoryItem">➡ Développement Web</div>
            <div className="subCategoryItem">➡ Développement Mobile</div>
            <div className="subCategoryItem">➡ DevOps</div>
            <div className="subCategoryItem">➡ Automation Tests</div>
          </div> : <div></div>}
          <div className= {cat!=="Robotics" ? "category" : "categorySelected"}  onClick={selectRobotics}>Robotics</div>
          {cat==="Robotics" ? <div className="subCategoryBlock">
          <div className="subCategoryItem">➡Arduino</div>
            <div className="subCategoryItem">➡Raspberry Pi</div>
            <div className="subCategoryItem">➡STM 32</div>
            <div className="subCategoryItem">➡ESP 32</div>
          </div> : <div></div>}

    </div>
  )
}

export default Categories
import React, { useContext, useState } from "react";
export const CategoryContext = React.createContext();
export const updateCategoryContext = React.createContext();
export function useCategory() {
  return useContext(CategoryContext);
}
export function useCategoryUpdate() {
  return useContext(updateCategoryContext);
}
export function FormationCategoryProvider({ children }) {
  /* const [categorie, setCategorie] =useState(0)*/
  const [level, setLevel] = useState([
    "Systéme Embarqué",
    "Machines",
    "Internet Des Objets",
    "Intelligence Artificielle",
    "Developpement IT",
    "Robotique",
  ]);
  function updateLevel(value) {
    if (
      value === "Systéme Embarqué" ||
      "Machines" ||
      "Internet Des Objets" ||
      "Intelligence Artificielle" ||
      "Developpement IT" ||
      "Robotique"
    ) {
      setLevel([
        "Systéme Embarqué",
        "Machines",
        "Internet Des Objets",
        "Intelligence Artificielle",
        "Developpement IT",
        "Robotique",
      ]);
    } else if (
      value === "Notions de Base Embarqué" ||
      "Linux" ||
      "Electronique" ||
      "C Embarqué"
    ) {
      setLevel([
        "Notions de Base Embarqué",
        "Linux",
        "Electronique",
        "C Embarqué",
      ]);
    }
  }

  return (
    <CategoryContext.Provider value={level}>
      <updateCategoryContext.Provider value={updateLevel}>
        {children}
      </updateCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}

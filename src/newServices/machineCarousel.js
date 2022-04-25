import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import MachineService from "./machineService";
function MachineCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const impression = [
    {
      caracteristique: "300mm x 340mm",
      image: "url('images/30.jpeg')",
      title: "UltiMaker",
      description:
        "UltiMaker  permet une utilisation fiable de la double extrusion sur des séries plus importantes.Avec des paramètres d'impression testés et prédéfinis, créez des prototypes fonctionnels, des outils de production et de solides pièces finales en polymères et matériaux composites avancés. L'Ultimaker S5 est également dotée d'un nivellement actif et avancé.Des capteurs de débit de filament et un écran tactile intuitif permettent de simplifier votre expérience d'impression 3D",
    },
    {
      caracteristique: "380mm x 420mm",
      image: "url('images/21.png')",
      title: "Mingda",
      description:
        "L’imprimante 3D Mingda MD-666 Pro est une machine chinoise en caisson fermé qui propose un large volume d’impression : 600 x 600 x 600 mm. Livrée dans un caisson de protection en bois, cette grande imprimante s’adresse aux petits industriels et professionnels qui souhaitent fabriquer des objets en PLA, fibre de carbone, bois, cuivre, aluminium, filament flexible, etc. L’extrudeur Direct Drive de  la Mingda MD-666 Pro peut chauffer jusqu’à 275°C et le plateau chauffant (de 10 mm d’épaisseur) peut atteindre 110°C, mais la température de travail sera maintenue par le caisson fermé de la machine.",
    },
    {
      caracteristique: "280mm x 360mm",

      image: "url('images/22.jpg')",
      title: "Prusa3d",
      description:
        "Avec 34 nouvelles imprimantes 3D Original Prusa CoreXY, des mécanismes de collecte automatique, et une interface à écran tactile simple à utiliser, l'AFS est la solution parfaite pour les grandes et les petites entreprises.",
    },
  ];
  const laser = {
    caracteristique: "300mm x 340mm",
    image: "url('images/32.jpg')",
    title: "LaserMaker",
    description:
      "UltiMaker  permet une utilisation fiable de la double extrusion sur des séries plus importantes.Avec des paramètres d'impression testés et prédéfinis, créez des prototypes fonctionnels, des outils de production et de solides pièces finales en polymères et matériaux composites avancés. L'Ultimaker S5 est également dotée d'un nivellement actif et avancé.Des capteurs de débit de filament et un écran tactile intuitif permettent de simplifier votre expérience d'impression 3D",
  };

  const fabrication = {
    caracteristique: "300mm x 340mm",
    image: "url('images/31.png')",
    title: "UltiMaker",
    description:
      "UltiMaker  permet une utilisation fiable de la double extrusion sur des séries plus importantes.Avec des paramètres d'impression testés et prédéfinis, créez des prototypes fonctionnels, des outils de production et de solides pièces finales en polymères et matériaux composites avancés. L'Ultimaker S5 est également dotée d'un nivellement actif et avancé.Des capteurs de débit de filament et un écran tactile intuitif permettent de simplifier votre expérience d'impression 3D",
  };

  const routage = {
    caracteristique: "300mm x 340mm",
    image: "url('images/35.png')",
    title: "UltiMaker",
    description:
      "UltiMaker  permet une utilisation fiable de la double extrusion sur des séries plus importantes.Avec des paramètres d'impression testés et prédéfinis, créez des prototypes fonctionnels, des outils de production et de solides pièces finales en polymères et matériaux composites avancés. L'Ultimaker S5 est également dotée d'un nivellement actif et avancé.Des capteurs de débit de filament et un écran tactile intuitif permettent de simplifier votre expérience d'impression 3D",
  };

 
  return (
    <div>
      {props.service === "Impression 3D" ? (
        <Carousel activeIndex={index} onSelect={handleSelect} controls="true">
          {impression.map((machine, i) => (
            <Carousel.Item key={i}>
              <MachineService
                image={machine.image}
                titlemachine={machine.title}
                descriptionmachine={machine.description}
                caracmachine={machine.caracteristique}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div></div>
      )}
      {props.service === "Découpe Laser" ? (
        <MachineService
          image={laser.image}
          titlemachine={laser.title}
          descriptionmachine={laser.description}
          caracmachine={laser.caracteristique}
        />
      ) : (
        <div></div>
      )}
        {props.service === "Fabrication PCB"? (
        <MachineService
          image={fabrication.image}
          titlemachine={fabrication.title}
          descriptionmachine={fabrication.description}
          caracmachine={fabrication.caracteristique}
        />
      ) : (
        <div></div>
      )}
        {props.service === "Routage CNC" ? (
        <MachineService
          image={routage.image}
          titlemachine={routage.title}
          descriptionmachine={routage.description}
          caracmachine={routage.caracteristique}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default MachineCarousel;

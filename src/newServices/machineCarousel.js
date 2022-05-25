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
        "UltiMaker enables reliable use of dual extrusion on larger runs. With tested and pre-defined print settings, create working prototypes, production tools, and strong final parts in advanced polymers and composite materials. The Ultimaker S5 also features active and advanced leveling. Filament flow sensors and an intuitive touchscreen help simplify your 3D printing experience.",
    },
    {
      caracteristique: "380mm x 420mm",
      image: "url('images/21.png')",
      title: "Mingda",
      description:
        "The Mingda MD-666 Pro 3D printer is a closed-box Chinese machine that offers a large print volume: 600 x 600 x 600 mm. Delivered in a protective wooden case, this large printer is aimed at small industrialists and professionals who wish to manufacture objects in PLA, carbon fiber, wood, copper, aluminum, flexible filament, etc. The Mingda MD-666 Pro's Direct Drive extruder can heat up to 275°C and the heating bed (10 mm thick) can reach 110°C, but the working temperature will be maintained by the closed housing of the machine.",
    },
    {
      caracteristique: "280mm x 360mm",

      image: "url('images/22.jpg')",
      title: "Prusa3d",
      description:
        "With 34 new Original Prusa CoreXY 3D printers, automatic collection mechanisms, and an easy-to-use touchscreen interface, the AFS is the perfect solution for businesses large and small.",
    },
  ];
  const laser = {
    caracteristique: "300mm x 340mm",
    image: "url('images/32.jpg')",
    title: "LaserMaker",
    description:
      "UltiMaker enables reliable use of dual extrusion on larger runs. With tested and pre-defined print settings, create working prototypes, production tools, and strong final parts in advanced polymers and composite materials. The Ultimaker S5 also features active and advanced leveling. Filament flow sensors and an intuitive touchscreen help simplify your 3D printing experience.",
  };

  const fabrication = {
    caracteristique: "300mm x 340mm",
    image: "url('images/31.png')",
    title: "UltiMaker",
    description:
      "UltiMaker enables reliable use of dual extrusion on larger runs. With tested and pre-defined print settings, create working prototypes, production tools, and strong final parts in advanced polymers and composite materials. The Ultimaker S5 also features active and advanced leveling. Filament flow sensors and an intuitive touchscreen help simplify your printing experience 3D",
  };

  const routage = {
    caracteristique: "300mm x 340mm",
    image: "url('images/35.png')",
    title: "UltiMaker",
    description:
      "UltiMaker enables reliable use of dual extrusion on larger runs. With tested and pre-defined print settings, create working prototypes, production tools, and strong final parts in advanced polymers and composite materials. The Ultimaker S5 also features active and advanced leveling. Filament flow sensors and an intuitive touchscreen help simplify your printing experience 3D",
  };

 
  return (
    <div>
      {props.service === "3D Printing" ? (
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
      {props.service === "Laser cutting" ? (
        <MachineService
          image={laser.image}
          titlemachine={laser.title}
          descriptionmachine={laser.description}
          caracmachine={laser.caracteristique}
        />
      ) : (
        <div></div>
      )}
        {props.service === "PCB Fabrication"? (
        <MachineService
          image={fabrication.image}
          titlemachine={fabrication.title}
          descriptionmachine={fabrication.description}
          caracmachine={fabrication.caracteristique}
        />
      ) : (
        <div></div>
      )}
        {props.service === "CNC Routing" ? (
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

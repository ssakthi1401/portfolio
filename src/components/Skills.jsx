import React, { useState } from "react";
import javaImage from '../assets/images/java.jpg';
import cimg from '../assets/images/cla.jpg';
import figmaimg from '../assets/images/fig.png';
import ps from '../assets/images/photo.png';
import lr from '../assets/images/light.png';
import canvas from '../assets/images/canva.png';
import mysq from '../assets/images/mysql.png';
import mongodb from '../assets/images/mongo.png';
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,  
  Bootstrap_Logo,
  Firebase_Logo,
  VSCode_Logo,
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }

  const cards = [
    {
      title: "Languages",
      items: [
        { src: HTML_Logo, alt: "HTML5" },
        { src: CSS_Logo, alt: "CSS3" },
        { src: Bootstrap_Logo, alt: "Bootstrap" },
        { src: JavaScript_Logo, alt: "JavaScript" },
       
      ],
    },
    {
      title: "Language",
      items: [
        { src: javaImage, alt: "java" },
        { src: cimg, alt: "c" },
      ],
    },
    {
      title: "Editing Software",
      items: [
        { src: ps, alt: "Photoshop" },
        { src: lr, alt: "Lightroom" },
        { src: canvas, alt: "Canva" },
      ],
    },
    {
      title: "Other tools & Services",
      items: [
        { src: Firebase_Logo, alt: "Firebase" },
        { src: figmaimg, alt: "Figma" },
        { src: VSCode_Logo, alt: "Visual Studio Code" },
      ],
    },
    {
      title: "Sql",
      items: [
        { src: mysq, alt: "MySql" },
        { src: mongodb, alt: "Mongodb" },
      ],
    },
  ];



  return (
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10 flex-wrap">

        {cards.map((value, index )=> {
          return (
              <div className="flex flex-col gap-10 max-sm:gap-5 max-md:w-full w-5/12" key={index}>
                <div className="flex flex-col gap-5">
                  <h4 className="text-2xl">{value.title}</h4>
                  <div className="flex gap-5 max-md:flex-wrap">
                      {
                        value.items.map((icon, id) => {
                          return (
                            <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName(icon.alt)} onMouseLeave={() => handleLeave(null)} key={id}>
                            <img src={icon.src} alt={icon.alt} className="h-10"  />
                            </div>
                          )
                        })
                      }
                  </div>
                </div>
              </div>
          )
        })}

      </div>
      
    </div>
  );
}

export default Skills;
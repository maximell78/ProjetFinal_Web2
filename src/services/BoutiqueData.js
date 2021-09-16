import React from "react";
import avenger from "../media/avenger1.jpg";
import civilwar from "../media/civilwar.jpg";
import infimitywar from "../media/avenger2.jpg";
import endgame from "../media/avenger3.jpg";

const articles = [
    {
        id: 1,
        nom: "Avenger",
        mini: <img className="img-mini" src={avenger} alt="Avenger"/>,
        normal: <img className="img-normal" src={avenger} alt="Avenger"/>,
        description: "Film DVD et Blu-Ray en parfaite état.",
    },
    {
        id: 2,
        nom: "Capitaine América: Civil War",
        mini: <img className="img-mini" src={civilwar} alt="Capitaine América: Civil War"/>,
        normal: <img className="img-normal" src={civilwar} alt="Capitaine América: Civil War"/>,
        description: "T-Shirt avec le logo du film Capitaine America: Civil War. Disponible en plusieurs grandeurs",
    },
    {
        id: 3,
        nom: "Avenger: Infinity War",
        mini: <img className="img-mini" src={infimitywar} alt="Infinity war"/>,
        normal: <img className="img-normal" src={infimitywar} alt="Infinity war"/>, 
        description: "Poster de l'avant dernier film des Avengers, Avenger: Infinity War. Disponible dans cette grandeur: 61 x 91.5cm",
    },
    {
        id: 4,
        nom: "Avenger: End Game",
        mini: <img className="img-mini" src={endgame} alt="Avenger: End Game"/>,
        normal: <img className="img-normal" src={endgame} alt="Avenger: End Game"/>,
        description: "Film DVD en parfaite état. N'a jamais été déballé.",
    },
]

export function getArticles(term) {
    return articles;
}

export default articles;
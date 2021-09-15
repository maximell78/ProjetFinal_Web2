import React from "react";
import avenger from "../media/avenger1.jpg";
import civilwar from "../media/civilwar.jpg";
import infimitywar from "../media/avenger2.jpg";
import endgame from "../media/avenger3.jpg";

const articles = [
    {
        id: 1,
        nom: "Avenger",
        photo: <img className="resize" src={avenger}/>,
        description: "Film DVD et Blu-Ray en parfaite état.",
    },
    {
        id: 2,
        nom: "Capitaine América: Civil War",
        photo: <img className="resize" src={civilwar}/>,
        description: "T-Shirt avec le logo du film Capitaine America: Civil War. Disponible en plusieurs grandeurs",
    },
    {
        id: 3,
        nom: "Avenger: Infinity War",
        photo: <img className="resize" src={infimitywar}/>,
        description: "Poster de l'avant dernier film des Avengers, Avenger: Infinity War. Disponible dans cette grandeur: 61 x 91.5cm",
    },
    {
        id: 4,
        nom: "Avenger: End Game",
        photo: <img className="resize" src={endgame}/>,
        description: "Film DVD en parfaite état. N'a jamais été déballé.",
    },
]

export default articles;
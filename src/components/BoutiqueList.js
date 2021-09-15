import React from "react";
import BoutiqueItem from "./BoutiqueItem";

function BoutiqueList(props) {
return (
    <div>
        {props.boutiqueItems.map((boutiqueItem) => (
            <div>
            <BoutiqueItem boutiqueInfo={boutiqueItem} key={boutiqueItem.id} />
            </div>
        ))}
    </div>
);
}

export default BoutiqueList;
import React from "react";
import BoutiqueItem from "./BoutiqueItem";

function BoutiqueList(props) {
return (
    <div>
        {props.boutiqueItems.map((boutiqueItem) => (
            <div key={boutiqueItem.id}>
                <BoutiqueItem boutiqueInfo={boutiqueItem} />                
            </div>
        ))}
    </div>
);
}

export default BoutiqueList;
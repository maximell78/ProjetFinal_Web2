import React from "react";
import ModalItem from './ModalItem';

function ModalList(props) {
return (
    <div>
        {props.boutiqueItems.map((boutiqueItem) => (
            <div  key={boutiqueItem.id}>                
                <ModalItem boutiqueInfo={boutiqueItem} key={boutiqueItem.id} />
            </div>
        ))}
    </div>
);
}

export default ModalList;
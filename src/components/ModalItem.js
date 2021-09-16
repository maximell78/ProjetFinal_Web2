import React from "react";

class ModalItem extends React.Component {    
    render() {
        const {boutiqueInfo} = this.props;
        return (
            <div className="container-fluid card ml-5 pt-3 pb-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid pb-5">
                            <div className="row">                                
                                <div className="col-4 pb-3">                                    
                                    <p>{boutiqueInfo.normal} </p>
                                </div>
                                <div className="offset-4 col-4">
                                    <p>{boutiqueInfo.description}</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>                
            </div>
        )
    }
}

export default ModalItem;
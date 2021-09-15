import React from "react";

class BoutiqueItem extends React.Component {    
    render() {
        const {boutiqueInfo} = this.props;
        return (
            <div className="container-fluid card ml-5 pt-3 pb-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid pb-5">
                            <div className="row">
                                <div className="col-4">
                                    <h3>{boutiqueInfo.nom} </h3>                                    
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 pb-5">                                    
                                    <h4>{boutiqueInfo.description} </h4>
                                </div>
                                <div className="col-12 pb-3">                                    
                                    <h4 className="text-center">{boutiqueInfo.photo} </h4>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default BoutiqueItem;
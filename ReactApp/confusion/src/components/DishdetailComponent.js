import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (this.props.dish)        
        ?(

            <div className="row">
                <div className="col-12 col-md-5 m-1">    
                    <Card>
                        <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>                        
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
        :(<div></div>)
        
    }
}

export default DishDetail;
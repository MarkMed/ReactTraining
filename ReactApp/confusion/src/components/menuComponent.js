import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props){
        super(props)

        this.state = {
            selectedDish: null
        }
        console.log("Menu Component Contructor has been called");
    }
    componentDidMount(){
        console.log("Menu Component didMount has been called")
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    // renderDish(dish){
    //     if(dish){
    //         return(
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
    //                 <CardBody>                        
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }
    //     else{
    //         return undefined
    //     }
    // }
    render() {
        const menu = this.props.dishes.map(
            (dish)=>{ 
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        {/* <Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name}/>
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media> */}
                        <Card onClick={()=>{this.onDishSelect(dish)}}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                ) 
            }
        );
        console.log("Menu Component Render has been called")

        return (
            <div className="container">
                <div className="row">
                   {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} ></DishDetail>
            </div>
        );
        
    }
}

export default Menu;
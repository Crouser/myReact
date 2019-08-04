import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){

             if(comments != null)
             {
                    // eslint-disable-next-line no-lone-blocks
                    
                        return(
                         <div>
                            <h4>Comments</h4>

                          --  <h6>{id.comments.comment}</h6> 

                           <h6>{id.comments.author} , {id.comments.date}</h6>   

                            </div>
                        )
                    

             }
             else{
                 <div></div>
             }
               


    }

    render() {
        const dishDetail = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="50%" top src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                   <div  className="col-12 col-md-5 m-1">
                   {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
            </div>
        );
    }
}


export default DishDetail;
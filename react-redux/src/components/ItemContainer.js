import React from 'react';
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item is {props.name} - {props.item}</h2>
            <button onClick={props.buyItem}>Buy {props.name}</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
   const item = ownProps.cake ? "Cake" : "IceCream"
    return {
      item: itemState,
      name: item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
      buyItem : dispatchFunction
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
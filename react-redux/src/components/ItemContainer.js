import React from 'react';
import {connect} from "react-redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item is {props.name} - {props.item}</h2>
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

export default connect(mapStateToProps)(ItemContainer);
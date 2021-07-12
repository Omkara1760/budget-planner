import { TiDelete } from "react-icons/ti";
import React, { useContext}from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      payload:props.id,
    })
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span>{props.cost} Rs</span>
        <TiDelete size="1.5em" onClick={handleDeleteItem} />
      </div>
    </li>  
  );
}


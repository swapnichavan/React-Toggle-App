import React from 'react';

const FriendsList=(props)=>{
  return(
    <div className="">
    <h2 className="text-secondary">Active Friends</h2>
    {
      props.list.map((friend)=>
        <li key={friend}
        className="list-group-item
        d-flex
        justify-content-between"
        >
        <span className="d-inline-block
        flex-grow-1">{friend}</span>
        <button
        className="btn btn-danger"
        onClick={()=>props.handleDelete(friend)}>Remove</button>
        <button
        className="btn btn-primary"
        onClick={()=>props.handleDeactivate(friend)}>Deactivate</button>
        </li>
        )
    }

    <h2 className="text-secondary">Inactive Friends</h2>
    {
    props.inactive.map((name,index)=>
    <li key={index}
    className="list-group-item d-flex justify-content-between"
    >
    <span>{name}</span>
    <button
    className="btn btn-primary"
    onClick={()=>props.handleActivate(name)}>Activate</button>
    </li>)
    }
    </div>
    );
}

export default FriendsList;

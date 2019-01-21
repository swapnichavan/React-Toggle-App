import React from 'react';
import FriendsList from './FriendsList';

class Friends extends React.Component{
  constructor(props){
  super(props);

  this.handleDelete=this.handleDelete.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.updateInput=this.updateInput.bind(this);
  this.handleRemoveAll=this.handleRemoveAll.bind(this);
  this.handleDeactivate=this.handleDeactivate.bind(this);
  this.handleActivate=this.handleActivate.bind(this);

  this.state={
      friends:['john','kate',"Wilson"],
      input:'',
      inactive:['mark']
    }
  }

  handleSubmit(e){
    e.preventDefault()
    let name=this.state.input.trim();
    console.log(name);
    if(!name)
    {
      alert("enter valid value")
    }
    else
    {
      this.setState((prevState)=>{
        return{
        friends:prevState.friends.concat([name])
      }
    });
    }
    this.state.input=''
  }

  handleDelete(name){
    // console.log(name);
    this.setState((prevState)=>{
      return(
      {
        friends:prevState.friends.filter((friend)=>friend!==name)
      }
        )
    })
  }

  updateInput(e){
    const value=e.target.value;
      
        this.setState(()=>{
        return{
          input:value
        }
    })
  }

  handleRemoveAll(e){
    // console.log('removed')
    e.preventDefault();
    this.setState(()=>{
      return{
        friends:[],
        inactive:[]
      }
    });
  }

  handleDeactivate(name){   
    this.setState((prevState)=>{      
      return{
        friends:prevState.friends.filter((friend)=>friend!==name),
        inactive:prevState.inactive.concat(name)
      }
    })
  }

  handleActivate(name){
    this.setState((prevState)=>{
      return{
        inactive:prevState.inactive.filter((inact)=>inact!==name),
        friends:prevState.friends.concat(name)
      }
    })
  }

  render(){

    return(
      <div className="d-flex justify-content-around mt-2">
      <div className="d-flex
      flex-column w-50
      jumbotron
      ">

      <form>
      <div className="form-group"> 
      <input
        className="form-control mb-2"
        type="text" 
        placeholder="New Friend"
        value={this.state.input}
        onChange={this.updateInput} />
      <button
      className="btn btn-primary w-100"
      onClick={this.handleSubmit}>Add Friend</button><br />
      <button
      className="btn btn-danger w-100 mt-2"
      onClick={this.handleRemoveAll}>
      Remove All
      </button>
      </div>
     </form>
      <FriendsList 
      list={this.state.friends}
      handleDelete={this.handleDelete}
      handleDeactivate={this.handleDeactivate}
      inactive={this.state.inactive}
      handleActivate={this.handleActivate} />
      </div>
      </div>
      );
  }
}

export default Friends;

import React from 'react';
import logo from './logo.svg';
import './App.css'; 

class App extends React.Component{
  constructor(props){
    super(props); //props->only read

    this.state={  // state define
      email: "",
      number:"",
      password: "",
      errorEmail:"",
      errorNumber:"",
      errorPassword:"",
      errorNumber:""
    }
  }

  handleChange=(event)=>{
    // console.log(event.target)


  const {name,value}=event.target;
 

    
    console.log(name,value,"hello");

    this.setState({[name]: value},()=>{
      if(name== 'email'){
        this.setState({errorEmail:""})
      } ;
      if(!this.state.email) {
        this.setState({errorEmail:"Please enter email first"})
            }
      if(name== 'number') this.setState({errorNumber:""});
      
      if(name== 'password') this.setState({errorPassword:""});
  


      
    }); 

    // if(name == 'email')
    // {
    

    // console.log(this.state,"next state")
    // }
    //  if(name == 'number')
    // {

    //   this.setState({number:value});
    // }
    // if (name == 'password')
    // {
    
    //   this.setState({password:value});
    // }
  } 
  
  submit()
  {
    const {number,email,password}=this.state;
    let data = {
      number,
      email,
      password
    }

    
   localStorage.setItem("abc",JSON.stringify(data));
   let a = localStorage.getItem( 'abc');
    
    console.log("submit btn is clicked")
    if(!email) {
this.setState({errorEmail:"Please enter email first"})
    }
    if(!number){
      this.setState({errorNumber:"Please enter number first"})
    }
    if(!this.state.password){
      this.setState({errorPassword:"Please enter password first"})
    }
    else
    {
      alert('form Submitted');
    }

   
  }
  
 
  render(){

    console.log(this.state.email);
    console.log(this.state.number);
    console.log(this.state.password);
    const {email,number,password,errorEmail,errorNumber,errorPassword}=this.state;
    return (
      <div className="App">
      <div class="form">
        <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>this.handleChange(e)} value={email} ></input> <br/>
        <span style={{color:"red"}}> {errorEmail}</span> <br/>
        <input type="number" name="number" placeholder="Enter Phone number" onChange={(e)=>this.handleChange(e)} value={number}></input><br/>
        <span style={{color:"red"}}> {errorNumber}</span> <br/>
        <input type="password" name="password" placeholder="Enter Password" onChange={(e)=>this.handleChange(e)} value={password}></input><br/>
        <span style={{color:"red"}}> {errorPassword}</span> <br/>
        <button onClick={()=>this.submit()}>Signup</button>
        </div>
      </div>
    )
  }
}  

export default App;

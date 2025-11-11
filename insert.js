import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import Nav from './component/navbar';
import Footer from './component/footer';
export default function Insert() {
    const [state,setState]=React.useState({
        id:"",
        name:"",
        email:"",
        mobile:"",
        dob:"",
        gender:"",
        address:"",
    })
    function save(evt){
        setState({...state,[evt.target.name]:evt.target.value});
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        axios.post('http://localhost:3000/users',state)
        .then(res=>alert("Inserted Successfully"))
        .catch(err=>console.log(err))
    }
  return (
   <>
    <Nav></Nav>
    
   <div class="row">
     <div class="col-sm-4"></div>
     <div class="col-sm-4">
     <p class="h2 text-center mt-2 " id="para"> Register Form</p>
               <form onSubmit={e=>handlesubmit(e)}>
               <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label fw-bold" id="head" >ID</label>
                       <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your ID" name="id"value={state.id} onChange={save}></input>
                    </div>

                <div class="mb-3">
               
                   <label for="formGroupExampleInput" class="form-label fw-bold " id="head">Name</label>
                   <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" name="name" value={state.name} onChange={save} ></input>
                   </div>
                   <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label fw-bold" id="head" >Email</label>
                       <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Email" name="email" value={state.email} onChange={save}></input>
                    </div>
                   
                    <div class="mb-3">
                       <label for="formGroupExampleInput" class="form-label fw-bold" id="head" >Contact</label>
                       <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your mobile number "  name="mobile" value={state.mobile} onChange={save} ></input>
                   </div>
                       <div class="mb-3">
                       <label for="formGroupExampleInput2" class="form-label fw-bold" id="head" >DOB</label>
                       <input type="date" class="form-control" id="formGroupExampleInput2"  name="dob" value={state.dob} onChange={save} ></input>
                   </div>
   
                   <div class="mb-3">
                       <label for="formGroupExampleInput2" class="form-label fw-bold" id="head">Gender</label><br></br>
                       <div class="form-check form-check-inline">
                           <input class="form-check-input" type="radio" id="inlineRadio1"  name="gender" value="male" onChange={save}></input>
                           <label class="form-check-label" for="inlineRadio1">Male</label>
                           </div>
                           <div class="form-check form-check-inline">
                           <input class="form-check-input" type="radio"  id="inlineRadio2" name="gender" value="female" onChange={save} ></input>
                           <label class="form-check-label" for="inlineRadio2">Female</label>
                       </div>
   
                   </div>
                      
                        
   
                   <div class="mb-3">
                       <label for="formGroupExampleInput2" class="form-label fw-bold" id="head">Address</label><br></br>
                           <div class="form-floating">
                           <textarea class="form-control"  name="address" value={state.address} onChange={save}></textarea>
                           <label for="floatingTextarea">Fill the Address</label>
                           </div>
                    </div>
   
                   <div class="d-grid gap-2 col-4 mx-auto mt-4">
                   <button class="btn btn-primary " type="submit" id="butn" >SUBMIT</button>
                   </div>
            </form>
     </div>
     <div class="col-sm-4"></div>
    </div>
   <Footer></Footer>
   </>
  )
}

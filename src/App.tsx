import axios from "axios";
import React, {useState} from "react";
import "./App.css";
import InputField from './components/InputField';
import './App.css';


const baseURL = "mongodb://localhost:27017"

const App: React.FC = () => {

const [message, setMessage] = useState<string>("");
//const [returnMessage, setReturnMessage] = useState<string>("");

  //setReturnMessage would need to be connected to the updated database some how
  //then the queries should be set up traditionally incase I want to pull other data sequentually
  //need to make a function that once clicked it will return the previous message to teh input field.
  
console.log(message);

  return (
    <div className="App">
    <span className = "heading" > Moon Roof </span>
    <InputField id="SecretMessage" name="SecretMessage" > PlaceHolder</InputField> 
    </div>
  );
}
//https://www.w3schools.com/html/html_form_attributes.asp this should solve the issue need to input input field attributes and that should fill the object for onChange error
//the error aldo seems to be connected to not using the state

//<p>{returnMessage}</p>  need to add the switched message above
export default App;
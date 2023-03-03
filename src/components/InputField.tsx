import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from "react-query";
import MessageService from '../services/MessageService';
import SecretMessage from '../types/SecretMessage';
import '../styles.css';



//Onchange does not function with MessageService Function, need to find the right HTML REACT command to add to the input


const InputField: React.FC<SecretMessage> = ({message}) => {
return <form className = 'input'>
<input 
type = 'input' 
value = {message}
onChange={MessageService.create}
placeholder = "Enter a Positive Message Here" 
className= "input__box"/>

<button className = 'input__submit' type = "submit"> Send</button>
</form>

}

export default InputField
import Alert from './Alert';
import {useState} from 'react'
import axios from '../api/axios';
import ResultsModal from './ResultsModal';
import {Button, Text, Input} from '@chakra-ui/react';

//The api end point we need to call to make our predictions 
const PREDICTION_URL = '/predict';

const Form = () => {
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [bmi, setBmi] = useState("");
    const [children, setChildren] = useState("");
    const [smoker, setSmoker] = useState("");
    const [region, setRegion] = useState("");
    const [prediction, setPrediction] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(PREDICTION_URL,
                JSON.stringify({ age, sex,bmi,children,smoker,region }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const predicted_cost = response?.data?.predicted_cost;
            setPrediction(predicted_cost);
            
            setAge("");
            setSex("");
            setBmi("");
            setChildren("");
            setSmoker("");
            setRegion("");
            setErrMsg("");
           
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Making A Prediction Failed');
            }
            
        }
    }

  return (
   <form onSubmit={handleSubmit}>
       {/* If we got a cost prediction from our api display it */}
       {prediction && <ResultsModal prediction={prediction}/>}

       {/*If something went sideways in our attempt to make a prediction,show the user an error message*/}
       {errMsg && <Alert errMsg={errMsg} />}

       {/*Insurance Policy Holder Form Fields*/}
        <Text mb='8px'>Age: </Text>
        <Input
            value={age}
            type="number"
            variant="filled"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Please input policy holder's age here"
            isRequired
            size='sm'
        />  

        <Text mb='8px'>Sex: </Text>
        <Input
            value={sex}
            type="number"
            variant="filled"
            onChange={(e) => setSex(e.target.value)}
            placeholder="Please enter 0 for Female and 1 for Male"
            isRequired
            size='sm'
            min='0'
            max='1'
        /> 

        <Text mb='8px'>Bmi: </Text>
        <Input
            value={bmi}
            type="number"
            variant="filled"
            onChange={(e) => setBmi(e.target.value)}
            placeholder="Please input policy holder's bmi here"
            isRequired
            size='sm'
        />
        
        <Text mb='8px'>Children: </Text>
        <Input
            value={children}
            type="number"
            variant="filled"
            onChange={(e) => setChildren(e.target.value)}
            placeholder="Please input policy holder's number of dependents here"
            isRequired
            size='sm'
        /> 

        <Text mb='8px'>Smoker: </Text>
        <Input
            value={smoker}
            type="number"
            variant="filled"
            onChange={(e) => setSmoker(e.target.value)}
            placeholder="Please enter 1 for smoker or yes and 0 for non smoker or no"
            isRequired
            size='sm'
            min='0'
            max='1'
        /> 

        <Text mb='8px'>Region: </Text>
        <Input
            value={region}
            type="number"
            variant="filled"
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Please input policy holder's region here"
            isRequired
            size='sm'
            min='0'
            max='3'
        /> 
        <br/><br/><br/>
        <Button type="submit" >Predict</Button>
   </form>
  )
}

export default Form;
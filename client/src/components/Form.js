import Alert from './Alert';
import {useState} from 'react'
import axios from '../api/axios';
import FieldGuide from './FieldGuide';
import ResultsModal from './ResultsModal';
import {Button, Text, Input,Box,Spinner, Stack} from '@chakra-ui/react';

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
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(PREDICTION_URL,
                JSON.stringify({ age, sex,bmi,children,smoker,region }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            const predicted_cost = response?.data?.predicted_cost;
            console.log(predicted_cost);
            setPrediction(predicted_cost);
            
            setAge("");
            setSex("");
            setBmi("");
            setChildren("");
            setSmoker("");
            setRegion("");
            setErrMsg("");
           
        } catch (err) {
            console.log(err.toJSON());
            if (!err?.response) {
                setErrMsg('No Server Response.');
            } else {
                setErrMsg('Making A Prediction Failed.');
            }     
        }
        setLoading(false);
    }

  return (
   <form onSubmit={handleSubmit}>
       {prediction && <ResultsModal prediction={prediction}/>}

       {errMsg && <Alert errMsg={errMsg} />}

       <Box mr={{'2xl':10}}>

       {!errMsg && <FieldGuide />}

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
        <Stack spacing={10} pt={2}>  
            {loading && (
              <Button mt={2}>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='gray.400'
                  size='lg'
                />   
            </Button> 
            )}

            {!loading && (
               <Button type='submit' mt={2}>
                 Predict
             </Button> 
            )}
        </Stack>
    </Box>
        
   </form>
  )
}

export default Form;
# -*- coding: utf-8 -*-
"""
Created on Wed May 2 11:08:51 2022

@author: Otsogile Ogaisitse Onalepelo aka Morena

"""

#pip install fastapi uvicorn pickle in your virtual environment

#1. Library imports
import pickle
import uvicorn ##ASGI
from fastapi import FastAPI
from PolicyHolder import PolicyHolder
from fastapi.middleware.cors import CORSMiddleware

#2. Create the app object
app = FastAPI()

#add cross origin resource sharing
#origins are the urls we want our api/backend to allow requests from
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#3. Load the  model pickle file into our app
pickle_in = open("../model/medical_cost_prediction_model.pickle","rb")

#4. Initialize our linear regression model
regressor = pickle.load(pickle_in)

#5. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
async def index():
    return {'message': 'Hello Machine Learning 😁'}


#6. Expose the prediction functionality, make a prediction from the passed
#   JSON data and return the predicted medical insurance cost/charge
@app.post('/predict')
async def predict_medical_insurance_cost(data:PolicyHolder):

    """
        ## Making a prediction requires the following:
        
        - age: int 
        - sex: int
        - bmi: float 
        - children: int
        - smoker: int
        - region: int
    
    """
    #convert the incoming data to a dictionary
    data = data.dict()
    age = data['age']
    sex = data['sex']
    bmi = data['bmi']
    children = data['children']
    smoker = data['smoker']
    region = data['region']


    predicted_cost = regressor.predict([[age,sex,bmi,children,smoker,region]])

    #the above returns the cost as an array. Taking the 0th index value will give it back as an individual float or integer value
    return {
        'predicted_cost': round(predicted_cost[0], 2) #round the number to two decimal places 
    }


#7. Run the API with uvicorn
#   Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
    
#or from the terminal with uvicorn main:app --reload



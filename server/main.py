# -*- coding: utf-8 -*-
"""
Created on Wed May 2 11:08:51 2022

@author: Otsogile Ogaisitse Onalepelo aka Morena

"""

#pip install fastapi uvicorn pickle in your virtual environment

# 1. Library imports
import pickle
import uvicorn ##ASGI
from fastapi import FastAPI
from PolicyHolder import PolicyHolder

#2. Create the app object
app = FastAPI()

#3. Load the  model pickle file into our app
pickle_in = open("../model/medical_cost_prediction_model.pickle","rb")

#4. Initialize our linear regression model
regressor = pickle.load(pickle_in)

#5. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello Machine Learning 😁'}


#6. Expose the prediction functionality, make a prediction from the passed
#   JSON data and return the predicted medical insurance cost/charge
@app.post('/predict')
def predict_medical_insurance_cost(data:PolicyHolder):

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
        'predicted_cost': predicted_cost[0]   
    }


#7. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
    
#or from the terminal with uvicorn main:app --reload



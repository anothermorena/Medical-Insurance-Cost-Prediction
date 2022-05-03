# -*- coding: utf-8 -*-
"""
Created on Wed May 2 11:40:51 2022

@author: Otsogile Ogaisitse Onalepelo aka Morena

"""

from pydantic import BaseModel

#Object which describes an insurance policy holder attributes or features or fields
class PolicyHolder(BaseModel):
    age: int 
    sex: int
    bmi: float 
    children: int
    smoker: int
    region: int
    
    class Config():
        
        """
            ##This demonstrates how the different fields we are going to pass in should look like.
            ##It gives Front End Dev extra info on how to make the UI.
            
            ##The sex, smoker and region features are encoded therefore we have to set them to have an int datatype above
            then below, we input the corresponding number assigned to the value we want to input
        
        """
        
        schema_extra = {
            "example":{
                "age":27,
                "sex":0,
                "bmi":23.4,
                "children": 3,
                "smoker": 1,
                "region": 3
            }
        }
    
    
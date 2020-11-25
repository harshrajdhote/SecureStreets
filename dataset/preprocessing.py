
#python code for cleaning dataset
import pandas as pd
import numpy as np
from dateutil import parser
df = pd.read_csv('data.csv',low_memory=False)
#print(df.head())
print(df.shape)
#Drop columns
columns_to_drop = ['Case Number','IUCR','FBI Code','X Coordinate','Y Coordinate','Beat','Updated On']
df.drop(columns_to_drop,inplace=True,axis=1)
print(df.shape)
#print(df.head())
#Replace empty values with NaN
df['Latitude'].replace('  ', np.nan, inplace=True)
#Drop NaN values 
df= df.dropna(subset=['Latitude'])

df['Longitude'].replace('  ', np.nan, inplace=True)
df= df.dropna(subset=['Longitude'])
df['Longitude'].replace('  ', np.nan, inplace=True)
df= df.dropna(subset=['Longitude'])
df['Location'].replace('  ', np.nan, inplace=True)
df= df.dropna(subset=['Location'])
df['Date'].replace('  ', np.nan, inplace=True)
df= df.dropna(subset=['Date'])
#print(df.head())
df['Date']= pd.to_datetime(df['Date'])
(df.Date.dtypes)
# print(df['Date'].head())
#Remove duplicates across all rows

df.drop_duplicates(keep=False, inplace=True)

#total entries and columns
#print(df.shape)
print(df.head())

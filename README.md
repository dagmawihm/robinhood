
# RobinHood Clone Website

This project aims to replicate the functionality of the popular Robinhood platform, providing users with a seamless experience for buying and selling stocks, monitoring their portfolio performance, and accessing live market data.


## Acknowledgements

 - [Robinhood](https://robinhood.com/)


## Author

- [Dagmawi Asres](https://github.com/dagmawihm)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### iexcloud.io API Token in your server folder .env file
`API_TOKEN=pk_*************************`
### Mongo Db  database url in your server folder .env file
`ATLAS_URI=mongodb+srv://username:password@cluster0.gscmgyv.mongodb.net/`
### JWT_SECRET key in your server folder .env file
`JWT_SECRET=abcd`
### iexcloud.io API Token in your client folder .env file
`REACT_APP_API_TOKEN=pk_***************************`


## Deployment

To deploy this project run the following commands.

#### Step 1. Clone the repository:
```bash
  git clone https://github.com/dagmawihm/robinhood.git
```
#### Step 2. Navigate to the server directory:
```bash
  cd robinhood/server
```
#### Step 3. Install server dependencies:
```bash
  npm install
```
#### Step 4. Navigate to the client directory:
```bash
  cd ../client
```
#### Step 5. Install client dependencies:
```bash
  npm install
```
#### Step 6. Create a .env file in the client folder:
```bash
  REACT_APP_API_TOKEN=pk_***********************
```
#### Step 7. Navigate back to the server directory:
```bash
  cd ..
  cd server
```
#### Step 8. Create a .env file in the server folder:
```bash
  ATLAS_URI=mongodb+srv://username:password@***********************
  API_TOKEN=pk_********************
  JWT_SECRET=abcd
```
#### Step 9. Run the server and client using concurrently:
```bash
  npm run dev
```




## Features

- Search For stocks
- Create user account
- Buy and Sell Stock 
- Check Profit and loss on total or per stock 
- Live stock previews
- Live stock graph previews and historical data performance
- Cross platform
- Responsive




## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Data Base:** Mongo DB




## Note

"If you encounter a loading issue where the page gets stuck, it is due to limitations on API requests that iex offer for a free trial. So, Please wait a few moments and try again."






## Screenshots


![Home Screenshot](https://github.com/dagmawihm/robinhood/blob/main/screen%20shoot/photo_1_2024-03-07_20-26-30.jpg?raw=true) 
![Detail Screenshot](https://github.com/dagmawihm/robinhood/blob/main/screen%20shoot/photo_3_2024-03-07_20-26-30.jpg?raw=true)
![Search Screenshot](https://github.com/dagmawihm/robinhood/blob/main/screen%20shoot/photo_4_2024-03-07_20-26-30.jpg?raw=true)
![Login Screenshot](https://github.com/dagmawihm/robinhood/blob/main/screen%20shoot/photo_2_2024-03-07_20-26-30.jpg?raw=true)





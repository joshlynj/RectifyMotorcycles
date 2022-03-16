## Rectify Motoworks
Rectify Motoworks is a React + Express Full-Stack Application 

## 🎉 UI Features
The React App has the following functionalities:
- 🗺 A home page that has a footer and Navbar to allow for users to easily navigate the webpage. 
- 🗣 Users can click the About Me section that describes the owner and his business.
- ⛏ Users can click My Builds to see previous work from Rectify Motoworks.
- 🧩 Users can login to submit services.
- 📤 Users can request a service to be completed by Rectify Motoworks. 

## 🏞 Background 
This project was designed for a local business owner who is currently running a business soley off of Instagram. This is intended to take his motorcycle business to the next level. 

## 🏍 Website in Use
Here is an image of the Home Page:
![image](https://user-images.githubusercontent.com/96899068/158696609-79da42e2-4d3d-4888-a781-760cdd811b3e.png)

Here is an image of the About me section: 
![image](https://user-images.githubusercontent.com/96899068/158696853-6a76d52d-d285-43fa-b12b-5f8aa591b3c0.png)

Here is an image of the My Builds section:
![image](https://user-images.githubusercontent.com/96899068/158696785-8a1ea9be-1804-49fb-9940-84e6eebbe6f6.png)

Here is an image of the Services section: 
![image](https://user-images.githubusercontent.com/96899068/158696934-9eb2489c-f049-426d-9906-903f619995ca.png)

Here is an image of the Order Form:
![image](https://user-images.githubusercontent.com/96899068/158697083-337b3dc3-dc84-4f0b-b1d3-2faacb8ce554.png)

Here is an image of Login/Sign Up: 
![image](https://user-images.githubusercontent.com/96899068/158697171-1ec2617f-f067-492f-b866-3f0d70df013f.png)

## 🌎 Using the React App
Get more information about React here: https://reactjs.org/.
It was styled using some MUI: https://mui.com/.
Testing was completed using Cypress: https://www.cypress.io/ and Jest: https://jestjs.io/.


## 🛠 Server Development
The following instructions are for those who want to develop the API on a local server.

## 🖥️ Server Architecture 
- The server was made using Express.

## 💿 How to install repo
Fork this repo, then clone it onto your machine.

### 🤲 Cloning and Installing Packages
The following dependencies need to be installed with ``` npm install ``` 
- body-parser 
- dotenv
- express
- jest
- knex
- morgan
- nodemon
- pg
- supertest
- bcrypt

### 🔥 Environment Variables
Make a .env file and set the CONNECTION_STRING to equal the location of your database. 

### 🤓 Database Requirements
ZaaS uses a PostgreSQL docker container. Tables are created programaticly, but you will have to create the database throught the psql CLI.
1. Pull the PostgreSQL docker container.

    ``` docker pull postgres ```

2. Create volume, turn on container, log into container
    1.  ```mkdir -p $HOME/docker/volumes/postgres```
    
    2.  ```docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres```

    3. ```docker ps -a```
    
    4. Copy the container ID from the output

    5. ``` docker exec -it <PSQL-Container-ID> bash ```
3. Create a DB called " zork_db "

    ```dbcreate -U postgres zork_db```

##  🚀 Database Schema
This was made with PostgreSQL DB to persist user data, maintain services, maintain orders, and provide relations between orders and services.
![image](https://user-images.githubusercontent.com/96899068/158684855-b15e0944-33c1-4cdc-a5c1-a26485ba30c0.png)


This schema is created through the Knex Migrations and is built with command: ``` npx knex migrate:latest ```



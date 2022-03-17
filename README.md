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
![image](https://user-images.githubusercontent.com/96899068/158739457-11a11a4b-565f-46e3-a5c3-55d9af205d36.png)
Here is an image of the About me section: 
![image](https://user-images.githubusercontent.com/96899068/158739497-e7a3e0c7-33b9-48b3-85b1-97a75acac31d.png)

Here is an image of the My Builds section:
![image](https://user-images.githubusercontent.com/96899068/158739530-4636c5a9-22a4-4b05-b4a3-0e129e768511.png)

Here is an image of the Services section: 
![image](https://user-images.githubusercontent.com/96899068/158739564-542f0d97-6d81-4db9-9734-f38d698c1c17.png)

Here is an image of the Order Form:
![image](https://user-images.githubusercontent.com/96899068/158739624-37670c48-629f-446f-afc4-aa551977a8d9.png)

Here is an image of Login screen: 
![image](https://user-images.githubusercontent.com/96899068/158739655-10c46661-2c47-4c9a-94d8-d931b5978fc3.png)

Here is an image of the Register screen:
![image](https://user-images.githubusercontent.com/96899068/158739687-1da3044f-38aa-4036-a603-fc1df3a0efde.png)


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



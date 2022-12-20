# Fastpeak 

Fastpeak is a proyect oriented to be the chat of https://eduapp-project.eu/ 

## Description :speech_balloon:

### Improving educational commnication

Fastpeak is a chat app designed to improve communication between teachers and students. It offers a secure and convenient platform for educators and learners to connect and collaborate in real time. With Fastpeak, teachers can easily send messages and materials to their students, track progress, and provide feedback on assignments. Students can use Fastpeak to ask questions, get help with coursework, and stay up to date on class announcements. Fastpeak's user-friendly interface and powerful features make it an essential tool for education in the 21st century.

## Getting Started :zap:

### Installing & Executing program

Open a terminal window and navigate to the directory where you want to store the project.

**1.** Use the git clone command to download the project from GitHub to your local machine.

```
git clone https://github.com/MargusS/Fastpeak.git
```

**2.** Navigate to the project directory:

```
cd Fastpeak 
```

To set up the Rails backend, you will need to have Ruby, Rails and Postgres installed on your machine. 

 **3.** Navigate to the server directory of the project:

```
cd Fastpeak/API
```

 **4.** In the server directory, you should find a Gemfile that lists the dependencies for the Rails app. To install these dependencies, use the bundle install command:

```
bundle install
```
 **5.** Before set up the database, you need to config the file'config/database.yml'

```
username: [postgres server username]
password: [postgres server password
port: [postgres port]
```

 **6.** Create the database with: 

```
rails db:create
```

  **7.** Once you database has been created, you should migrate the ORM Database:

```
rails db:migrate
```

 **8.** To start the Rails server, use the rails s command:

```
rails s
```

This should start the Rails server, now you need to set up the frontend.

  **9** Go to frontend directory:

```
cd Fastpeak/frontend 
```

  **10.** You should find a package.json file. This file lists the dependencies for the frontend of the project. To install these dependencies, use the npm install or yarn install command, depending on which package manager you are using:

```
npm install 
```
```
yarn install 
```

  **11.** Now that the frontend dependencies are installed, you can start the development server for the React app. To do this, you can use the npm start or yarn start command, depending on your package manager:

```
npm run start
```

This should start the development server for the React app and you should now be able to access the backend API from the React frontend.


## Data Model :card_file_box:

### Entity Relationship 
![Chat Project drawio](https://user-images.githubusercontent.com/83511656/208487216-a545c6c7-28c5-49af-986b-b9afe846849e.png)

### Relational Diagram
![Relational Diagram Fastpeak drawio](https://user-images.githubusercontent.com/83511656/208489868-d19eb849-f1fe-40df-b30e-cc33225e3fdd.png)

### UML Diagram
![ERD Fastpeak](https://user-images.githubusercontent.com/83511656/208486834-5f31642d-6a56-4566-b1a0-8a3464442251.PNG)

### Entities and attributes explained

#### Users

Table of the user entity.

* username: Username of the user.
* email: Email of the user.
* password: Encrypted password of the user.
* status: Connection status of the user.

#### Chats

Table of the chat entity.

* name: The name of the chat.

#### Members

Table to join each user with chat.

* user_id: The foreign key that represent the user.
* chat_id: The foreign key that represent the chat.

#### Messages

Table of message entity.

* user_id: The foreign key that represent the user.
* chat_id: The foreign key that represent the chat.
* content:  The body of the message written by a user.

#### Contacts

Table that represent the reflesive relationship between users.

* user_id: The foreign key that represent the user.
* friend_id: The foreign key that represent the friend of the user.

## Use cases
![Fastpeak Use Case](https://user-images.githubusercontent.com/83511656/208560005-32378f4d-d73a-4d14-9341-18a26d7aafb3.jpg)

As we can see, the admin has full control of all the CRUDS while the average user of the app will only be able to see the information.

## Prototype :art:

Fastpeak's Figma prototype helps me validate ideas and communicate my vision and goals to others. I hope it gives you a good mental outline of the project.

[Figma Prototype](https://www.figma.com/file/dYxevTKjXoHADpOo6x22tN/Fastpeak?node-id=0%3A1&t=ZS2Rve4QmuIQZINB-0)

## Api documentation :electric_plug:

To test know how the API works and to test it.

[Fastpeack API WIth Postman](https://documenter.getpostman.com/view/23660227/2s8Z6saFrz)

## Technology stack comparison
#### Rails 
 [![My Skills](https://skillicons.dev/icons?i=rails)](https://skillicons.dev)
 
Ruby on Rails, often simply called Rails, is a web application framework written in the Ruby programming language. It is designed to make it easier for developers to build and deploy web applications quickly.
There are many other programming languages and frameworks that can be used for building web applications, each with its own strengths and use cases. Some popular alternatives to Rails include:

 - Django: Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It is well-suited for building complex, data-driven applications, and is used by many large websites, including Instagram and Pinterest.
 
 - Laravel: Laravel is a popular PHP web framework that is designed to be easy to use and expressive. It includes a wide range of features for building web applications, including routing, authentication, and a powerful object-relational mapper (ORM).
 
 - ASP.NET: ASP.NET is a web framework developed by Microsoft for building web applications using the .NET framework. It supports multiple programming languages, including C# and VB.NET, and is well-suited for building enterprise-grade applications.
 
Again, the best language or framework for your project will depend on your specific needs and requirements. It's worth considering a few different options and evaluating their pros and cons before making a decision

#### React
 [![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)

React is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications.
There are many other JavaScript libraries and frameworks for building user interfaces, each with its own strengths and use cases. Some popular alternatives to React include:
 - Angular: Angular is a full-featured framework for building web applications. It includes a powerful set of features for building both the frontend and backend of an application, and is well-suited for building complex, data-driven applications.
 
 - Vue.js: Vue.js is a lightweight, easy-to-learn JavaScript framework for building user interfaces. It's known for its simplicity and flexibility, and is often used for building small- to medium-sized applications.
 
 - Preact: Preact is a lightweight alternative to React that is designed to be fast and easy to use. It has a small footprint and is well-suited for building high-performance applications.
 
Ultimately, the best library or framework for your project will depend on your specific needs and requirements. It's worth considering a few different options and evaluating their pros and cons before making a decision.

## Author 	:technologist:

Agustin Nicolas Marani Ghiacci.

## Built With

* [Figma](https://www.figma.com/)
* [Visual StudioCode](https://code.visualstudio.com/) - The Editor used in this project.
* [React](https://es.reactjs.org/) - A JavaScript library for building user interfaces.
* [Rails](https://rubyonrails.org/) - an open source framework for Web development in Ruby, an object-oriented programming (OOP) language
* [SASS](https://sass-lang.com/) - An extension of CSS that enables you to use things like variables, nested rules, inline imports and more.
* [Postgres](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database

## Acknowledgments

* [Miguel Ángel Figueroa - Interface Development Professor](https://github.com/mianfiga)
* [Tiburcio Cruz - FullStack Development Professor](https://github.com/tcrurav)
* [Dean DeHart - Online Tech Teach](https://github.com/Deanout)


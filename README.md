# Fastpeak

Fastpeak is a proyect oriented to be the chat of https://eduapp-project.eu/ 

## Description

### Improving educational commnication

Fastpeak is a chat app designed to improve communication between teachers and students. It offers a secure and convenient platform for educators and learners to connect and collaborate in real time. With Fastpeak, teachers can easily send messages and materials to their students, track progress, and provide feedback on assignments. Students can use Fastpeak to ask questions, get help with coursework, and stay up to date on class announcements. Fastpeak's user-friendly interface and powerful features make it an essential tool for education in the 21st century.

## Getting Started

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


## Data Model

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





## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)

# Fastpeak

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

## Data Model

### Entity Relationship 
![Chat Project drawio](https://user-images.githubusercontent.com/83511656/208487216-a545c6c7-28c5-49af-986b-b9afe846849e.png)

### Relational Diagram
![Chat Project drawio](https://user-images.githubusercontent.com/83511656/208487272-14c63dcb-7c7d-4c2b-a265-cc5d9bc80247.png)

### UML Diagram
Diagram![ERD Fastpeak](https://user-images.githubusercontent.com/83511656/208486834-5f31642d-6a56-4566-b1a0-8a3464442251.PNG)

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


### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

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

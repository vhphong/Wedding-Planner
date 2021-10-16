# Wedding Planner

## Project Description
Welcome to my Wedding Planner project! This application allows employees (users that I manually put in a Datastore database) to create and manage weddings for couples. After employees login, they can perform all CRUD operations on weddings and expenses. Employees can message other employees and can upload pictures for wedding expenses.

## Technologies Used
- NodeJS - Version 13
- React - Version 17
- Express - Version 4.17.1
- Axios - Version 0.22.0
- TypeScript - Version 4.4.3

## Features
- Can only login with an existing account.
- View all weddings.
- Select a specific wedding.
- Edit a wedding's data and its expenses.
- Message other employees in realtime.
- Create new weddings and expenses.
- Upload image files for expenses

To-do list:
- Need to fix File Upload Service.
    - Using JavaScript for the frontend will fix this issue.
    - Typescript doesn't like the node modules for converting images to Base64 encoding.

## Getting Started
#### Manual install and run locally.
```bash
    git clone https://gitlab.com/PhongHVo/p1weddingplanner.git
```

- You will need to set up a PostgreSQL database with some data in it. Simply change the connection credentials in the connection.ts file of the Wedding Planner Service.
- A cloud function is required to use the File Upload Service.
- A Datastore database is needed to store employee credentials and messages.
- If you haven't already, [install NodeJS](https://nodejs.org/en/download/).
- Run 'npm install' on each directory.
- Open a terminal in each directory (except the File Upload Service) and type "npm start" then press enter.
- In the web browser add ***/login*** to the url to get to the login page.

## Usage
- If I have my services deployed on GCP and my frontend is set up with Firebase, I will include a link here.
- Once the user logs in, the application will direct you to the /planner route where you will be able to view every wedding. On this page, you can create a new wedding or select an existing wedding to inspect.
- If an existing wedding is selected, the user may edit or delete the wedding. Additionally, the user can create, edit, or delete expenses of the wedding. Note: the user can upload an image that will be stored as a link in the table where expenses are listed.
- From the /planner route, the user may also select the Message Service. Here, the user can select another employee and send messages to that employee. These messages are sent and received in realtime.
- Aside from that, the user may logout at any point in time.
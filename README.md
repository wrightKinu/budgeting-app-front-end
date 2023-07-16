Hello, I am Kinu Wright and welcome to my Budget App. 

The Budgeting App is a web application designed to help users manage their personal finances and track their expenses. It provides a user-friendly interface for creating budgets, recording expenses, and generating insightful reports. This README file provides an overview of the app's features.

## Features



- **Expense Tracking**: Users can record their expenses and categorize them based on their budgets.

- **Expense Visualization**: The app provides visualizations of the amount spent, profits and the remaining balance.

- **Budget Alerts**: Users receive notifications and alerts when they exceed their budget limits.

- **Goal Setting**: Users can set financial goals and track their progress towards achieving them.


## Installation

1. Clone the repository:

https://github.com/wrightKinu/budgeting-app-front-end.git

https://github.com/wrightKinu/budgeting-app-back-end.git








↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Instructions used to make this Budget App ↓↓↓↓↓↓↓↓↓↓↓↓↓↓




Create a GitHub repository for both the front-end and the back-end applications and upload your code to it.
Your front-end repository should have a readme.md file with setup instructions for your application.
Both the front-end and back-end applications should be successfully deployed to the web.
Your readme should also include links to your back-end GitHub repository, both of your deployed URLs, and a link to the Trello board you used to manage your work.
Back-end feature requirements
To complete the back-end application, you will need to build a RESTful server that performs CRUD actions on a single resource.

Your server should incorporate at least one table that, at minimum, includes:
id - A unique number for each item
item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
amount -number - the amount of the transaction
date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
from - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
category - string - what category does this fall into (income, savings, pets, food, etc)
A route exists to create new resources.
A route exists to read all resources.
A route exists to read a single resource.
A route exists to update a single resource.
A route exists to delete a single resource.
An appropriate "Not Found" response is given when a route is requested that does not match the created routes.
Back-end Example
#	Action	URL	HTTP Verb	CRUD	Description
1	Index	/transactions	GET	Read	Get a list (or index) of all transactions
2	Show	/transactions/:id	GET	Read	Get an individual view (show one transactions)
3	Create	/transactions	POST	Create	Create a new transactions
4	Destroy	/transactions/:id	DELETE	Delete	Delete a transactions
5	Update	/transactions/:id	PUT	Update	Update a transactions
Note: All of the above routes should work both with an application like Postman and a front-end framework like React

Front-end feature requirements
To complete the front-end application, you will need to build a React application that allows for CRUD operations to be performed on a single resource. You will also need to display the data thoughtfully and clearly.

All pages should include the same navigation bar, which includes the name of the application and a button to create a new resource.
You should have an Index page that presents all of the resources in your database table.
After clicking on a single resource, you should be brought to a Show page which includes more detailed information about the specific resource.
When the button in the navigation bar to create a new resource is clicked, you should be brought to a new page that includes a form to create a new resource.
Forms should be properly labeled and the type of inputs should be properly set. For example, an input that requires a number should have type number, not text.
When a new resource form is submitted, the resource should be created in the database and the user should be brought to that new resource's Show page.
On the resource's Show page, there should be a button to edit the current resource. When clicked, the user is brought to a form page with data already filled in that can be edited.
When an edited resource form is submitted, the resource should be edited in the database and the user should be brought to that new resource's Show page.
On the resource's Show page, there should be a button to delete the current show page.
Using the resource's data, perform a calculation that can be performed on the front-end application and displayed to the user on the Index page. For example, the bank account total should be visible. In addition to the total, the CSS should change based on the value - use a greenish color if the bank account total is above 100, use a yellowish color if the bank account total is between 0 and 100 and a reddish color if the bank account total is less than 0. You can change the background or text or both.

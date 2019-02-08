## OER Bookr 2 Backend 

### Backend Build Using: 

- Nodejs
- Express
- Middlewares 
  - Cors
  - Helmet
  - Bcrypt 
  - Json Wed Token 
  - Authenticate 

Backend Deployed [here](https://oerbookr2.herokuapp.com/)

### Routes: 

  - ### Register
    A `POST` request to this route will lead to a register page where users can register to join the OER Bookr site to begin use

   **Link to the register route found:** [here](https://oerbookr2.herokuapp.com/oerbooker/register)

  - ### Login
   A `POST` request to this route will allow user to login to begin reviewing, rating, and using OER Bookr

   **Link to the login route can be found:** [here](https://oerbookr2.herokuapp.com/oerbooker/login)

  - ### Textbooks List
   A `GET` request to this route will return a list of textbooks available for teachers and other educators to review and leave ratings on 
 
   **Link to the textbooks list can be found:** [here](https://oerbookr2.herokuapp.com/oerbooker/textbooks)

  - ### Individual Textbooks
   A `GET` request to this route will return a specific textbook based on the id requested along with the  review and ratings for that textbook

   **Link to the individual textbook can be found:** [here](https://oerbookr2.herokuapp.com/oerbooker/textbooks/{textbookId})

  - ### Edit Review 
   Users can edit their rating or review by making a `PUT` request to this route 

   **Link to edit a review can be found:** [here](https://oerbookr2.herokuapp.com/oerbooker/reviews/{reviewID})

  - ### Delete Review
   To delete a rating users can go to this route by making a `DELETE` request to this route 

   **Link to delete a review can be found:** [here](https://oerbookr2.herokuapp.com/oerbooker/reviews/{reviewID})


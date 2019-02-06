## OER Bookr 2

- Site is deployed at: 
### https://oerbookr2.herokuapp.com/

- A `POST` request to this route will lead to a register page where users can register to join the OER Bookr site to begin use

### https://oerbookr2.herokuapp.com/oerbooker/register

- A `POST` request to this route will allow user to login to begin reviewing, rating, and using OER Bookr

### https://oerbookr2.herokuapp.com/oerbooker/login

- A `GET` request to this route will return a list of textbooks available for teachers and other educators to review and leave ratings on 

### https://oerbookr2.herokuapp.com/oerbooker/textbooks

- A `GET` request to this route will return a specific textbook based on the id requested along with the  review and ratings for that textbook

### https://oerbookr2.herokuapp.com/oerbooker/textbooks/{textbookId}

- Users can edit their rating or review by making a `PUT` request to this route 

### https://oerbookr2.herokuapp.com/oerbooker/reviews/{reviewID}

- To delete a rating users can go to this route by making a `DELETE` request to this route 

### https://oerbookr2.herokuapp.com/oerbooker/reviews/{reviewID}

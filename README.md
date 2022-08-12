# internal-hr-game-2048

Game 2048 repository for hiring purposes

## The task

The overall goal is to create a login page, registration modal, “hall of fame” page and design clone of the puzzle game 2048 and then link it to prepared backend. We have created a backend (Graphql API) and its documentation + schema can be found here: https://hiring-backend-2048.herokuapp.com/admin/graphiql

### Subtask

# STEP 1:

Login page is ready. It is located in “components/LoginPage.tsx”. Your first task is:
• Add form validations

    • For email
        • Required
        • Regex email

    • For password
        • Required
        • Minimum 8 characters
        • At least one uppercase alphabet
        • At least one lowercase alphabet
        • At least one number
        • At least one special character

• Sign in
• call the mutation authenticateUserWithPassword. After successful login and automatically redirect to /hall-of-fame page

    •	Open the Registration modal using the Global state
        •	if you click on the link “Don‘t have an account? Sign Up“, the registration will open in modal.

# STEP 2

The Registration modal is ready. It is located “components/modal/Registration.tsx”. Your second task is:
• Add form validations

    • For first name, last name
        • Required
        • Upper and lower case only

    •  	For email
        •	Required

    •	For password and confirmation password
        •	Required
        •	Minimum 8 characters
        •	At least one uppercase alphabet
        •	At least one lowercase alphabet
        •	At least one number
        •	At least one special character
        •	you checks that the password entered by the user is same as this confirm password

• Sign up
• Call the mutation createUser. After successful registration, automatically log the user in and redirect them to the /hall-of-fame page.

# STEP 3

Hall of Fame page is located in the „components/HallOfFame.tsx“. Your third task is:
• Call the query allScores and view the Hall of fame. Show only 10 records. You can use „material icons“ that are installed to render icon.

• Implement lazy loading on button click “SHOW MORE”

• After clicking on the “NEW GAME” button redirect to the /game page and call query newGame

# STEP 4

Your last task is:
• Render grid for game 2048

• After clicking on the “NEW GAME” button, call the newGame query to reset the game

• Control the game using the arrow keys on the keyboard (Up, Right, Down, Left). Press one of the arrows to call mutation processGame, which returns the new game state for rendering

• Show Score and High Score. You get a High score using query allScore where you type the where clause.

### Needed

• Use Typescript, React Hooks, Apollo, Material UI
• Next JS (Routing)
• Global State Management Redux/Mobx/… (it's up to you)
• For form validation we recommend to use React Hook Form with Joi (it's up to you)

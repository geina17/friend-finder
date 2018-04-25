# FriendFinder

# [LIVE DEMO](https://obscure-bayou-49883.herokuapp.com/)

This is a compatibility-based "FriendFinder" application built with Node.js and uses Express to handle routing. This full-stack site will take in results from users' surveys, then compare their answers with those from other users.

## Function
The survey includes 10 questions. Each answer is based on a scale of 1 to 5 depending on how much the user agrees or disagrees with a question.

The app will then display the name and picture of the user with the best overall match.

## Design
The file directories are as follows:
```
FriendFinder
- app
    - data
        - friends.js
- public
    - home.html
    - survey.html
- routing
    - apiRoutes.js
    - htmlRoutes.js
- node_modules
- package.json
- server.js
```

The `server.js` file requires the basic npm packages `express`, `body-parser` and `path`.

The  `htmlRoutes.js` file includes two routes:
* A GET Route to `/survey` which displays the survey page
* A default, catch-all route that leads to `home.html` which displays the home page

The `apiRoutes.js` file contains two routes:
* A GET route with the url `/api/friends`, which displays a JSON of all possible friends
* A POST routes `/api/friends`, which handles incoming survey results as well as compatibility logic

The application's data inside of `app/data/friends.js` is saved as an array of objects and is formatted as follows:
```
{
    "name":"Pam Beesly",
    "photo":"https://theofficeanalytics.files.wordpress.com/2017/09/pam-halpert-1.jpg?w=1200",
    "scores":[
        "4",
        "5",
        "5",
        "3",
        "1",
        "2",
        "5",
        "5",
        "2",
        "5"
    ]
},
```
To determine the user's most compatible friend, their results are first converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

Then the current user's scores are compared against those from other users, question by question. The differences are added to calculate the `totalDifference`.

The closest match will be the user with the least amount of difference.

Once the current user's most compatible friend is determined, the result is displayed as a modal pop-up. The modal displays both the name and picture of the closest match.

The final app is deployed to Heroku.

## Languages and Libraries Used
* Node.js

## Materials Sources
* [Express npm package](https://www.npmjs.com/package/express)
* [Body-parser npm package](https://www.npmjs.com/package/body-parser)
* [Path npm package](https://www.npmjs.com/package/path)
* [Heroku](https://heroku.com)

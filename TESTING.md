WHO: Naser Alqimlas, Jon McMillan, Will Shanks, Matthew Dinh, Eleanor Hightower

TITLE: The Learn Urn

VISION: To create a web app that allows users to access the best resources for whatever the user is looking to learn.

User Acceptance Tests: The key features that we will test for our user acceptance tests are signing in, posting, and searching for content. Our UATs follow this template

behavior | data | expected

Sign-in | email: bar@bar, password: bar | shows user's email at the top when successful

Posting | topic name: bar, resource name: bar, url: bar.bar, Abstract: bar | creates a topic name bar with a resource named bar with a url of bar.bar and a description of bar.

Searching | advanced real-time hub | shows search results under the search bar related to “advanced real-time hub” 

Automated Tests: Links to the tools used: https://facebook.github.io/jest/docs/en/tutorial-react.html 
https://phpunit.de/ 
to run api tests, cd api and vendor/bin/phpuni
For javascript tests, cd web and yarn test

![First test](https://github.com/Will-Shanks/csci3308GroupProject/blob/master/milestone5-img1.png)

![Second test](https://github.com/Will-Shanks/csci3308GroupProject/blob/master/milestone5-img2.png)

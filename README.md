CSCI 3308 Group Project
=======================

Team Name  
---------
Distinguished Donkey Aftermath

Members  
-------
- Naser Alqimlas
- Matthew Dinh
- Jon McMillan
- Will Shanks
- Eleanor Hightower

Description  
-----------
People are always asking "What is the best resource for learning X?" Through
this web app, we hope to "cut the learning curve on learning." In the modern
age, there are so many educational resources, and it is difficult to know where
to start.  Our hope is that through this product, users will be able to cull
the best resources for what they want to learn from the overwelming list of
options. People should not spend time looking for resources when they could be
learning new things. If learning becomes easier to do, then people will be more
inclined to do it.  

This website will be a resource for any one who wants to learn anything for
any reason. Users will be able to search keywords related to whatever they are
interested in, and find resources that will help them learn it. Each resource
will be user submitted, and can be upvoted by other users who have also found
it useful. This will allow the best resources to rise to the top of searches,
saving time for busy users. If a user finds a resource that is not in our
database, they can add it under relevant keywords. 

Vision  
------
To create a web app that allows users to access the best resources for whatever
the user is looking to learn.

Motivation
----------
Cutting the learning curve on learning.

Risks
-----
- Difficult to get resources
- Could be spammed with bad resources
- Development
  - Our dev environments diverge

Risk Mitigation
---------------
- Let the users assign resources to keywords, and create the database for us
- Limit posts by users, allow for flagging of bad resources
- Development
  - Use a CI server to run unit tests and make sure we are tracking how to
    setup the environment

Version Control
---------------
This GitHub Repo

Dev Method
----------
Agile

Collaboration
-------------
Slack will be the main form of communication.  Whenever possible, we will
integrate apps with Slack.

Proposed Architecture
---------------------
|   |   |
|---|---|
|Frontend| JavaScript with the React and redux frameworks |
|Backend| PHP with the Laravel framework |
|DB| mySQL |


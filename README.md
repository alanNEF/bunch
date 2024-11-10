# HackUMass-2024
## bunch

## Inspiration
Is there a new passion or hobby you've been _dying_ to explore, but are struggling to meet others who share the same interest?

Do you feel like you spend too much time interacting with others on social media, _instead_ of hanging out in person?

A lot of students might share similar interests and could do something together, but have no way of reaching out to each other. That's where **bunch** comes in. A social platform where UMass students can create and manage events, follow other students, see upcoming events matching their interests, and join in on the fun.

## What it does
Bunch is a website designed for all college students. Users first create an account login using their UMass email, first and last name, and password. They then select categories of events they'd be interested in. Users can join events as long as they have space, or remove themselves if they're no longer interested. 

Future events are shown on the home page and can be sorted by three options: upcoming, following, and recommended. Users can follow others to see only their events, or can choose recommended to see only events in the categories they're interested in. 

Users can also create their own events easily, and manage event details after the event's been created. Events have a banner image, name, description, start and end time, location, and a max # of people. Hosts can also see who is planning to attend the events, or delete the event if they choose. Users also have two profile dashboards: one for events they're hosting, and one for events they're attending. Past events are also shown.

## How we built it
The frontend runs using React.js, the backend using node.js and express, and the database using mongoDB Atlas. We first made very basic template code for the frontend, and then developed the frontend and backend asynchronously, syncing the REST calls to achieve a working app. We then stylized the website more and developed extra features in the backend.

## Challenges we ran into
One of the hardest challenges was deciding how to store passwords securely. In order to store passcodes securely, the string had to be converted to a hash code on the client side, and then sent to the server to be stored in the database. However, we also made sure a passcode could never be retrieved back from the server, so when logging in the string is first sent to the server, and then converted and compared in the server. This way there is no way to exploit the security of the website. The Atlas link is completely hidden from the GitHub or anyone on the website.

Another difficult challenge was setting up schemas for all our objects in Node. A lot of our objects relate to each other so it's tricky to keep track of how the database functions. We designed these relationships for quick data sorting based on the user's preferences for events.

## Accomplishments that we're proud of
The high number of sorting and filtering options for events. Users can choose events based on upcoming dates, tags, or followers. We also love the ability to customize events quickly, delete events, and see a dashboard of events you're hosting or attending. After the events, these dashboards can act as a time-capsule of memories.

## What we learned
Designing backend and frontend asynchronously makes it extremely difficult to integrate later on. This method also requires detailed planning and tight communication between team members. We were only able to succeed thanks to constant communication and brainstorming sessions (while eating). In general practice, it's much easier to complete the frontend first and then start the backend. Our team had to do both at the same time to achieve a lot of features within a short time limit.
# Front-End
1. What problem does your app solve?
 
Guidr helps back country guides of all types log their private/professional trips. We need to create a way for Users to login, create read and update their trips with a trip type, location, duration and whether it's private or professional.

2. Be as specific as possible; how does your app solve the problem?

Creating a login page, create a page that allows user to enter trail information(ie. Trip type, location, duration, private/professional option).  

3. What is the mission statement?


What features are required for your minimum viable product?

1. User can sign up as a "Guide" by providing a unique username and a password that will serve as their login/authentication credentials. (mobile, web)

2. User can successfully login as a "Guide" with their login credentials from account creation. (mobile, web)

3. Authenticated "Guide" can access a minimum of two main views:
    - (mobile, web): A "Trips" page where they can:

        1. View a list of previous trips they have created. This should provide an overview of each trip.

        2. Select a trip from the list and be presented with a 
        detailed view that displays all of the trip's properties.

        3. Create a trip. A "trip" must have at a minimum, the following properties:
            * `title` - String
            * `description` - String
            * `isPrivate` - Boolean
            * `isProfessional` - Boolean
            * an `images` property, type determined by your implementation.
            * `duration` - double
            * `distance` - double
            * `date` - timestamp
            * `tripType` - String or Enum
        4. Update a trip, or any property of a trip.

        5. Delete a trip.

    - (mobile, web): A "Profile" page where they can:
        1. Assign values to profile properties via text fields. At a minimum, a "Profile" must have the following: title, tagline (short description), type of guide specialty), age and years experience.
            * `title` - String
            * `tagline` - String
            * `guideSpecialty` - String
            * `age` - Integer
            * `yearsExperience` - Integer

        2. A version of this "Profile" must be viewable on the web by potential employers, clients, licensing agencies or anyone else that is provided with the URL. (web)


What features may you wish to put in a future release?

Adding a map to see where trips are located.
Trip Planner.
Implementation with social media.

What do the top 3 similar apps do for their users?

All trails
Strava
Gaia

What 3rd party frameworks/libraries are you considering using?
    Web 1
    -Less
    React 1 
    -Styled components
    React 2
    -Redux
    Node
    Express
    -Knex

Data Science
-Flask
    
Do the APIs you need require you to contact them to gain access?

No
Are you required to pay to use said API(s)?

No

Who is your target audience? Be specific.
Backcountry guides and outdoorsy people.
What feedback have you gotten from potential users?
Want a way to track past trips on one platform.
Be able to share their profile and how much experience they have with clients.


Have you validated this problem and your solution with a target audience? Describe how,

Experienced guides have confirmed that they would like to use this app to hit a broader audience. 

How long do you think it will take to implement these features?
Dummy back end
    Go over tomorrow
    Loosely Working back end by friday
    React
    Build basic app with dummy data by thursday
Finished in 2 weeks
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
Yes




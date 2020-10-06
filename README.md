# Doggos list
The team has provided the following requirements for the first release:
- Login page
- Dashboard with the user's list of dogs
-- Each item in the list should have the dog's name, breed, and link to their details page
- Details pages with all known details about a dog
- Ability to add new dog
- Ability to edit existing dog
- The same header on all pages
-- The header on pages that the user is logged in with will contain this message: "Hello, {first
name}"

Endpoints to mock:
- /login
- /doggo
- /doggo/{doggoId}
-- Get a complete list of info about a doggo
- /doggos-list
-- Get a list of doggos owned by the user

### Framework and Plugins used
  - React
  - typescript
  - json Server
  - axios

### Mocking endpoint
`
  prism mock -p 3000 API.yaml
`

or

`
  json-server db.json
`

### Install
`
npm install
json-server db.json
npm run start
`

### Structure
/components
 - Heading - For showing logged in user heading "Hello, {first name}"
 - Nav - Our navigation component.
 - PrivateRoute - Our Hoc for privitizing routes showing only to logged in users.

/context
 - auth - This file is for authentication to be used with jwt and check whether user privileges are valid.

/pages
 - create - Create new db entry for a dog.
 - dashboard - Get a list of doggos owned by the user
 - details - Get all details on a dog
 - edit - Edit a dogs details
 - login - Login screen

/styles
- All the styles for each page and the components are located here.

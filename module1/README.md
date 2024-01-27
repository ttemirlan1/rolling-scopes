Task
Create a separate branch for this task.

Language Requirement
Use TypeScript for the project.

Project Setup
Initialize the project using Vite with the react-ts template.

Code Quality Tools
ESLint
Set up ESLint to throw errors if TypeScript's any type is used. Follow the configuration guide.

Prettier
Integrate Prettier for code formatting.

Husky
Add Husky and configure it to run linting on pre-commit.

package.json Commands
Add the following npm scripts:

lint: For running the lint command.
format:fix: For running Prettier's --write command.
API Selection
Pick a RESTful API which supports search and pagination (pagination might be referred to as offset and limit params). Some suggestions:

PokeAPI
SWAPI (Star Wars fans)
STAPI (Star Trek fans) (OpenAPI spec here)
Requirements
Implement the following requirements:

Create a page comprised of 2 horizontal sections (a smaller top one and a bigger bottom one).
Top section: Place a Search input and the "Search" button. The Search component should look for a previously saved search term in the local storage; if there isn't any, leave the input empty.
Bottom section: Display search results (name and a small description).
By default, the application makes a call to the selected API to get the list of items with the search term from the input (only the first page). If the input is empty, make a call to get all the items.
When the user modifies the Search input and clicks on the "Search" button, the application makes a call to an API with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only the first page).
The provided search term should be saved to the local storage; if the value exists, overwrite it.
Wrap the application with an error boundary to catch errors. Report an error to the console and show fallback UI (use respective methods for this). Create a button that will throw an error on click to test the functionality.
Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.
Structure
All logical parts should be set into separate components.

How to Run
Provide instructions on how to run the project locally. Include any dependencies or environment setup required.

Notes
Any additional notes or considerations for contributors or users.

Feel free to customize the above template based on your specific project details.

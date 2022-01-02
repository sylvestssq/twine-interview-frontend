# Twine frontend interview repository

## Introduction

This project serves as a frontend interview project for Knoetic (`http://localhost:3000`). The backend is mocked using json-server, a library used for rapid prototyping of backend during development phase (`http://localhost:8000`). During development phase, eslint and prettier were utilized to ensure best coding practices and proper code formatting. Even though this is an interview, I wanted to simulate this like how I would normally do on a normal working project. Hence, I've added **linters**, **code formatters** and also a simple **test** script to ensure some level of coverage on the features built.

SCSS modules were used to prevent classes with the same name to clash between components. While it does not affect the current project, it might be in the future. Hence, the reason for CSS modules. 

Configs for eslint and prettier can be found in `.eslintrc.js` and `.prettierrc`.
Completion of each stage can be found in the different branches of the repository.

## Getting started

1. Install packages
   `npm install`

2. Run mock backend server for /employees api call. The mock backend server is running in localhost:8000/
   `npm run api`

3. Run in your local development
   `npm start`

4. Run test script. Some unit tests are written for key user actions of the project. Can be found in App.test.jsx
   `npm test`

5. Lint the project to check for warnings if any
   `npm run lint`

6. Auto formatting .js and .jsx files 
   `npm run prettify`

## Libraries Utilized

1. **Ant Design** as the main UI library for this project

2. **json-server** to mock a simple backend. Data for the backend can be found in mockEmployees.json

3. **node-sass** for CSS modules

4. **uuid** for id generation

5. **axios** for API calling

6. **React Testing Library** for unit testing

## Potential Improvements

1. More unit test coverage to ensure that the features produced are better protected against unexpected behavior.

2. Utilization of useMemo React hooks to memoize useContext React hook values/ any values that require heavy computation.



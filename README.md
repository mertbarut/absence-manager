# Absence Manager: An Employee Absence Database App built with [React.js](https://reactjs.org) and TypeScript

### Summary

[Absence Manager](https://absence-manager-42.herokuapp.com/) is a simple database frontend app written in TypeScript using mainly React and Redux, hosted on Heroku. The employee absence information were displayed using the [Absence Manager API](https://mbarut-absence-manager-api.herokuapp.com/) and [Axios](https://axios-http.com/docs/intro) to fetch data. [TailwindCSS](https://tailwindcss.com/) was used for the generating css elements and making the components responsive.

### Dependencies

Production:
- @reduxjs/toolkit 1.8.1
- @testing-library/jest-dom 5.16.4
- @testing-library/react 13.2.0
- @testing-library/user-event 13.5.0
- @types/jest 7.5.1
- @types/node 16.11.36
- @types/react 18.0.9
- @types/react-dom 18.0.4
- @types/react-redux 7.1.24
- @types/react-router-dom 5.3.3
- axios 0.27.2
- react 18.1.0
- react-datepicker 4.8.0
- react-dom 18.1.0
- react-redux 8.0.1
- react-router-dom 6.3.0
- react-scripts 5.0.1
- redux 4.2.0
- redux-thunk 2.4.1
- typescript 4.6.4

Development:
- @types/react-datepicker 4.4.1
- autoprefixer 10.4.7
- json-server 0.17.0
- postcss 8.4.14
- tailwindcss 3.0.24

### Features

**1. Filterable Absences**

Absences can be filtered by their type (e.g. vacation, sickness) and the date range they took place in.

**2. Pagination**

Absences are displayed as 10 absence per page by default. Users can change pages using two buttons, which is implemented using a redux state without the need to prop drill.

**3. Detailed Absence View**

More information about the absences (e.g. status, period, notes) can be obtained using a dropdown button.

**4. 'Add to Calender' Feature**

In the detailed absence view, users can click on a link to generate an ICalendar file with the information pertaining to the absence.

### Known Issues

- ...

### Coming Soon

- [ ] Unit and E2E tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
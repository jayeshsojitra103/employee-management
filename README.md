# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Employee Management Application

This is a simple Employee Management application built with React, TypeScript, MirageJS (for mocking the backend), Redux Toolkit (for state management), and Material-ui for styling. The app supports CRUD (Create, Read, Update, Delete) operations for managing employee profiles.


### Features
- List Employees: Displays a list of employees with their profile details.
- Add Employee: Allows users to add a new employee profile.
- Delete Employee: Users can delete an employee from the list.
- **Edit Employee: (Pending) Ability to update an employee's profile. (API and redux done, but from  UI side, it's pending)**


### Technologies Used
- React (with TypeScript)
- MirageJS (for mocking backend API)
- Redux Toolkit (for state management)
- Material-ui (for styling)


```
git clone https://github.com/your-username/employee-management.git
cd employee-management
```


```
npm install
```

```
npm start
```


```
src/
├── components/
│   ├── AddEmployee.tsx       # Component for adding a new employee
│   ├── EmployeeList.tsx      # Component to list all employees
├── redux/
│   ├── employeeSlice.ts      # Redux slice for employee data management
│   └── store.ts              # Redux store configuration
├── mirage/
│   └── server.ts             # MirageJS server setup for mocking API
├── utils/
│   └── index.ts              # for utils function
├── App.tsx                   # Main application component
└── main.tsx                  # Entry point for the React app

```


### Notes:

- Due to time limit the EditEmployee component is marked as pending, 
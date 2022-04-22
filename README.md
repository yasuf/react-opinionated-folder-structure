# React Opinionated Folder Structure

## What is this project?

This project is an opinionated folder structure for React projects. The motivation for this project is to offer a folder structure that you can start with and to let the developer focus on the features to build instead of folder conventions.

This project is based on React's `create-react-app` and has a set of folders as an example on how you can setup your project.

## Getting started

The best way to understand this project is to clone it:

```
git clone https://github.com/yasuf/react-opinionated-folder-structure
```

Then look around and see the folders and then copy over what you need to copy into your project to mimic what this project already has.

## Folder descriptions

**`src/components/`**

Contains all the React components for the App.

**`src/components/<MyComponent>`**

Contains a specific component.

Files for a component:

`src/components/<MyComponent>/index.test.tsx` - Test file

`src/components/<MyComponent>/index.tsx` - Component file

`src/components/<MyComponent>/styles.css` - Styles file

**`src/hooks/`**

Contains all React hooks.

**`src/request/`**

Contains all HTTP requests.

**`src/assets/`**

Contains all assets (`.svg`, `.png`, `.gif` files).

## Design of this project


## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

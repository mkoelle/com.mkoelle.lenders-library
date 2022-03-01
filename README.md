# Lenders Library

A system for people to share items they own, without giving them away.

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Compiles and minifies for production

```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Run your unit tests

```shell
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<!-- ### Run your end-to-end tests

To run them in interactive mode:

```shell
npm run test:e2e
```

To run the tests non-interactively:

```shell
npm run test:e2e:ci
```

### Lints and fixes files

```shell
npm run lint
``` -->

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Stories

### Base functionality

- Users can be added by email
- Items can be listed as available for use
  - Item can be owned by a user
- Items can be listed as checked out
  - Can only be checked out to one user
- Items can be listed as reserved
  - Can be reserved by more than one user
  - Ordered by oldest reservation
- Items can be sorted by owner
- Items can be sorted by borrower

### Authenticated functionality

- Owners should be able to list an item as available for use.
- Users should be able to see what items are currently available (not checked out).
- Users should be able to reserve or check out items.
- Users should be able to see what items have been checked out to them.
- Owners should be able to see who has an item currently checked out.
- Users should be able to report the condition of an item.
- Users should be able to return an item to circulation.

### Future Stories

- Donation system for maintenance and replacment of damaged items.

## Reading

- [How to write a Vue.js app completely in TypeScript](https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/)
- [Vue API calls in a smart way](https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322)
- [Setting Up API Mocking With Mirage JS And Vue.js](https://www.smashingmagazine.com/2020/02/api-mocking-mirage-vue-javascript/)
- [cloudfront using origin access identity](https://www.thecuriousdev.com/blog/2019/cloudfront-using-origin-access-identity/)
- [Resize images with sharp](https://www.npmjs.com/package/sharp)

## Possibly Similar Apps

- [booktrader](https://github.com/joops75/booktrader)
  - An app that facilitates the borrowing and lending of books between users.

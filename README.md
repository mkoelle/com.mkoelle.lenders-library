# Lenders Library

A system for people to share items they own, without giving them away.

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Run your unit tests

```shell
npm run test:unit
```

### Run your end-to-end tests

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
```

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

- Owners should be able to list an item as availabile for use.
- Users should be able to see what items are currently avaialble (not checked out).
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
- [cloudfront using orign access identity](https://www.thecuriousdev.com/blog/2019/cloudfront-using-origin-access-identity/)

## Possibly Similar Apps

- [booktrader](https://github.com/joops75/booktrader)
  - An app that facilitates the borrowing and lending of books between users.

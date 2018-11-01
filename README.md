
# Ride-My-Way-React

[![Build Status](https://travis-ci.org/lauragift21/Ride-My-Way-React.svg?branch=develop)](https://travis-ci.org/lauragift21/Ride-My-Way-React)
[![Coverage Status](https://coveralls.io/repos/github/lauragift21/Ride-My-Way-React/badge.svg?branch=Add-coverall-code-coverage)](https://coveralls.io/github/lauragift21/Ride-My-Way-React?branch=Add-coverall-code-coverage)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8a2e27f9bb301da35fc9/test_coverage)](https://codeclimate.com/github/lauragift21/Ride-My-Way-React/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8a2e27f9bb301da35fc9/maintainability)](https://codeclimate.com/github/lauragift21/Ride-My-Way-React/maintainability)

Ride-My-Way is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers.

## Required Features

- Users can create an account and log in.
- Drivers can add ride offers..
- Passengers can view all available ride offers.
- Passengers can see the details of a ride offer and request to join the ride. E.g What time
  the ride leaves, where it is headed e.t.c
- Drivers can view the requests to the ride offer they created.
- Drivers can either accept or reject a ride request.

## Optional Features

- Users can only see and respond to ride offers from their friends on the application.
- Passengers get real time notifications when their request is accepted or rejected

## Technologies

- React
- Redux
- Jest, Enzyme
- Webpack
- React Router

## API Endpoints

| Endpoint                                         | Functionality                      |
| ------------------------------------------------ | ---------------------------------- |
| POST /auth/signup                                | Register a user                    |
| POST /auth/login                                 | Login a user                       |
| GET /rides                                       | Fetch all available rides          |
| GET /rides/\<rideId>                             | Fetch the details of a single ride |
| POST /users/rides                                | Create a Ride offer                |
| POST /rides/\<rideId>/requests                   | Make a ride request                |
| GET /users/rides/\<rideId>/requests              | Feth all ride requests             |
| PUT /users/rides/\<rideId>/requests/\<requestId> | Accept or Reject a ride request    |

[Ride My Way API Documentation](https://ridemyway13.docs.apiary.io/#)

## Build Setup

```
clone repo and cd into directory

git clone https://github.com/lauragift21/Ride-My-Way-React.git
```
```
# install dependencies
yarn install # or npm install

#serve in development environment
yarn start:dev

# build for production
yarn run build
```

## Testing

```
# Run test cases
yarn test
```

##

API Endpoint: https://ride-my-way-server.herokuapp.com/api/v1

UI Template: https://lauragift21.github.io/Ride-My-Way/UI/index.html

## AUTHOR

[EGWUENU GIFT](https://github.com/lauragift21)

## LICENSE

Ride My Way is [MIT licensed](https://github.com/lauragift21/Ride-My-Way/blob/develop/LICENSE)
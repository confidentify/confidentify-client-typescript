# Conf·ident·ify client for TypeScript

This project provides a TypeScript client for the [Conf·ident·ify](https://confidentify.com) APIs.


[![Build Status: Linux](https://travis-ci.org/confidentify/confidentify-client-typescript.svg?branch=master)](https://travis-ci.org/confidentify/confidentify-client-typescript)

## Using the client

First, add the project as a npm dependency in your project:

```
npm install confidentify-client-typescript
```

Next, start coding against the packages `confidentify-client-typescript`.

Here's an example which assumes you have your account username/password in variables with corresponding names:

```typescript
import { AuthApi, Configuration, AccountsApi } from 'confidentify-client-typescript';

var authApi = new AuthApi();
authApi.authPost({
        authRequest: {
            "username": username,
            "password": password
        }
    }).then(response => {
        var token = response.accessToken;
        var configuration = new Configuration({
            accessToken: "Bearer " + token,
        });
        var accountsApi = new AccountsApi(configuration)
        accountsApi.accountByIdGet({
            accountId: "_"
        }).then(response => {
            console.log("Account ID: " + response.id);
            console.log("Account name: " + response.name);
        });
    });
```

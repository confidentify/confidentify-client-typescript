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
import { AuthApi, Configuration, ProcessApi } from 'confidentify-client-typescript';

const authApi = new AuthApi();
authApi.authPost({
        authRequest: {
            "username": username,
            "password": password
        }
    }).then(response => {
        const token = response.accessToken;
        const configuration = new Configuration({
            accessToken: "Bearer " + token,
        });
        const processApi = new ProcessApi(configuration);
        processApi.phonePost({
            phoneRequest: {
                records: [
                    {
                        country: "US",
                        phone: "800 FLOWERS"
                    }
                ]
            }
        }).then(response => {
            if (response.records) {
                console.log("E164 format for 1-800-FLOWERS: " + response.records[0].phoneE164);
            }
        });
    });
```

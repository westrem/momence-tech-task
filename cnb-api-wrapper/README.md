# About

The actual CNB API has a CORS issue, where they provide invalid `Access-Control-Allow-Origin` header, containing `apl.cnb.cz` value.

This prevents us from calling it from browser directly. Since we actually need to access the response, using `no-cors` mode won't help us here.

An easy workaround is to make our own wrapper API (server-side) and call CNB API from within and forward the response.

There are multiple ways how to achieve this. One approach could be using serverless edge functions (Netlify, Vercel, ...).
This however, would require us to run additional task locally, to mimic the server (e.g. `netlify dev`) and adjust the code with ENV variables for the API endpoint, one for local and second for production environment.

Since the only job of this wrapper is to forward the API response, I treat it as a "static" resource that does not need to evolve with our App and does not need to be deployed together in one CI pipeline.

For that reasoning, I opted for an easier solution and deployed the simple PHP scripts in this folder to my hosting, allowing me to always have one API URL both locally and in production. 



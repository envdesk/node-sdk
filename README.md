## EnvDesk
One stop solution to Key 🗝 management! <br />
This is the official EnvDesk SDK for javascript.


### Getting Started
Create your free account and generate relevant keys at [Envdesk](https://envdesk.com). 
For detailed steps follow this [tutorial](https://envdesk.com/docs/getting-started)

### Installation
```console
$ npm install envdesk
```

### Usage
Having generating your application `access_key` and `environment`

#### Loading Remote Variables
```javascript
const Envdesk = require("envdesk")

Envdesk.engine.loadVariables({
  access_key: "[YOUR_ACCESS_KEY]",
  environment: "[YOUR_ENVIRONMENT]", 
  private_key: "[YOUR_ENVIRONMENT_PRIVATE_KEY]"}).then(() => {
    
  // The rest of your startup logic
})
``` 

#### Reading Variables
Automatically once variables are loaded, you can read from your `process.env`
```javascript
const value = process.env["KEY"] // or process.env.KEY
```
Alternatively, you could reference envdesk directly
```javascript
const value = Envdesk.store["KEY"] // or Envdesk.store.KEY
```

#### Referencing Variable data
```javascript
const variables = Envdesk.variableStore // Variable[]
```




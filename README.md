## SUMMARIZE
An AI summarizer that summarizes texts or conversations using the powers of ChatGPT provided by OpenAI.

## Installation 
### npm
```javascript
npm i @ebereplenty/summarize
```

### yarn
```javascript
yarn add @ebereplenty/summarize
```

## Usage
### Create Openai API Key
- Navigate to https://platform.openai.com/api-keys to create an API key.
- Copy the key into a secure location such as a `.env` file.
- Reference the key in the code below

The examples below are for ECMAScript Modules (ESM). You can change from `import { summarize } from "@ebereplenty/summarize";` to `const summarize = require("@ebereplenty/summarize");` if you are using CommonJS (CJS)

### Text
This can be paragraphs of texts.

```javascript
import { summarize } from "@ebereplenty/summarize";

const text = `
  ...text to be summarized goes here...
`;

console.log(
  await summarize({
    input: text,
    openAiApiKey: open_ai_API_key,
  })
);
```

### Conversation
This can be an array of chat like the one found [here](https://github.com/EBEREGIT/summarize/blob/master/conversation.js)

```javascript
import { summarize } from "@ebereplenty/summarize";
import { conversation } from "./conversation.js";

const result = await summarize({
    input: JSON.stringify(conversation),
    openAiApiKey: open_ai_API_key,
});

console.log(result);
```

## Dependencies
- [OpenAI](https://openai.com/)
- [Langchain](https://js.langchain.com/)

## Documentation
See https://github.com/EBEREGIT/summarize/blob/master/README.md

## Author
Njoku Samson Ebere: https://linktr.ee/ebereplenty

# OOP Tech Test (Advance.io)
 This is a technical test for advance - card shuffle and poker game please see the [pdf spec]('./OOP%20Tech%20Test.pdf')


## Getting started
Created using Node v20 and [Yarn Package Manager](https://www.npmjs.com/package/yarn)

Feel free to use others like npm/npx.

### Installing node modules
```
yarn
```

## Running unit tests
```
yarn test
```
![image](https://github.com/user-attachments/assets/e47dd8e6-412b-4c58-9bb4-24d41ccfe8e4)

## Running console poker game
```
yarn play
```

Follow the prompts to change hand size and shuffle type etc
![image](https://github.com/user-attachments/assets/acd256ca-a02a-47fc-9b83-a26cdb0681a2)

![image](https://github.com/user-attachments/assets/e7d11758-d9b3-4534-be07-9840b3e0bf96)

## Running web app poker game

I had to split the code into a FE and simple BE as the poker evaluator library uses the filesystem, which is not supported by the browser.


```
yarn start:api
```
![image](https://github.com/user-attachments/assets/f20b3f1c-ae08-44ae-b438-5efdf86c16ff)

Open another command line window

```
yarn start:app
```

When asked to run on another port press Y.
![image](https://github.com/user-attachments/assets/8c7cd81f-4396-499a-b858-435be3aabc74)

The app will then open in a browser window

![image](https://github.com/user-attachments/assets/62a4ba4d-1a32-4195-85f3-ab537f6e4759)


## Packages

Here are the packages used in this project:
- [jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html): Runtime type checking for React props and similar objects.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Serves as the entry point to the DOM and server renderers for React.
- [react-hook-form](https://react-hook-form.com/): A performant, flexible and extensible forms with easy-to-use validation.
- [react-icons](https://react-icons.github.io/react-icons/): Include popular icons in your React projects easily with react-icons.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): The standard routing library for React.
- [prime-react](https://www.primefaces.org/primereact-v8/): A next gen Component and UI library.
- [styled-components](https://styled-components.com/): Use the best bits of ES6 and CSS to style your apps without stress.
- [readline-sync](https://github.com/anseki/readline-sync): Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).
- [poker-evaluator-ts](https://github.com/Sukhmai/poker-evaluator): A poker hand evaluator using the Two Plus Two algorithm and lookup table. The lookup table HandRanks.dat is included in the module.

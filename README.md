# Passport Service

This package provide UI component for Sign In page and Footer.

## Installation

```bash
npm install @inshorts/authentication-ui
```

## Usage
### SignIn Page
```Js
import * as React from 'react';
import ReactDOM from 'react-dom';
import { GoogleAuthUI } from '@inshorts/authentication-ui';

function App() {
  return <GoogleAuthUI title="Panel Name" />
}

ReactDOM.render(<App />, document.querySelector('#app'));
 
```

### Props

| Prop | Required | default | accepted value | description |
| ---  | ---       |     ---      |          --- | --- |
| app |  | Inshorts    | Inshorts, Public App | use to get login page Icon and in footer content|
| logo |  |   | logo src url   | if present, override the app logo |
| authPath |  | /auth/google | string   | google auth path for sign in button |
| title   | required |  | string / React component   | Page Title |
| heading  |  | Welcome, Sign in to continue!  | string / React component  | Page Heading |
| classes   | | `{}`  | Allowed keys: `root, logo, title, heading, signButton` | Add classes to override current styles, values could be string, array or object |
| FooterProps |    |  `{}` || Overrides footer element props |


### Footer
Google Auth UI already contains Footer in it. 

```Js
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '@inshorts/authentication-ui';

function App() {
  return <Footer />
}

ReactDOM.render(<App />, document.querySelector('#app'));
 
```
### Props

```JS
Footer.defaultProps = {
  app: "Inshorts", // passed from GoogleAuthUI, required if used independently,
  visibleLangIndicator: false,// show English / Hindi language selectors,
  footerText: "{app} 2021. All rights reserved.",
  footerClass: "", // override default styles,
  path: "", // used in language selector routes when visibleLangIndicator  = true
  lang: "", // used in language selector routes when visibleLangIndicator  = true
  position: "static", // use "fixed" to stick it to windows bottom
}
```
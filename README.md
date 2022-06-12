# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Solution thing](https://github.com/pedromiguel-dev/intro-section-with-dropdow)
- Live Site URL: [The live](https://intro-section-with-dropdow-clc1v2ooi-pedromiguel-dev.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

It was more of a reenforce of somethhings thhat i already knew but god i need do more

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  --grid-template-areas: "Logo List Buttons";
  --grid-template-columns: 1fr 4fr 1fr;
  @media (max-width: 768px) {
    --grid-template-areas: "Logo Hamburger";
    --grid-template-columns: 4fr 1fr;
  }

  max-width: var(--break-desktop);
  display: grid;
  grid-template-areas: var(--grid-template-areas);
  grid-template-columns: var(--grid-template-columns);
  & > .Hamburger {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > .Hamburger {
      display: block;
      justify-self: end;
    }
    & > .List,
    .Buttons {
      display: none !important;
    }
  }
}
```

```js
const proudOfThisFunc = () => {
  <NavComponent.ButtonsList>
    {Object.keys(dropItens).map((item, index) => (
      <li key={item}>
        <NavButtons
          key={item}
          hasDropdown={dropItens[item].length == 0 ? false : true}
          dropItens={dropItens[item] ? dropItens[item] : []}
        >
          <a href={dropItens[item][index]?.link || "#"}>{item}</a>
        </NavButtons>
      </li>
    ))}
  </NavComponent.ButtonsList>;
};
```

### Continued development

Omg imports were a pain, need to study more bout implementations with vite i guess.

## Author

- Website - [Pedro Miguel](https://github.com/pedromiguel-dev)
- Frontend Mentor - [@pedromiguel-dev](https://www.frontendmentor.io/profile/pedromiguel-dev)
- Twitter - [@PrincesaSofiaQA](https://twitter.com/PrincesaSofiaQA)

## Acknowledgments

Thanks a lot to stackoverflow for beeing part of this

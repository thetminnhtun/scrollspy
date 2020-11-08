# Scrollspy

### Installation

```bash
npm i js-scrollspy
```

Setup

> HTML

```html

<nav>
    <ul id="scroll-nav">
        <li><a href="#section-1" class="current">Section 1</a></li>
        <li><a href="#section-2">Section 2</a></li>
        <li><a href="#section-3">Section 3</a></li>
    </ul>
</nav>

<main>
<section id="section-1">
    <h1>Section 1</h1>
    <p>...</p>
</section>
<section id="section-2">
    <h1>Section 2</h1>
    <p>...</p>
</section>
<section id="section-3">
    <h1>Section 3</h1>
    <p>...</p>
</section>
```

> JavaScript

```js
import scrollspy from 'js-scrollspy';

scrollspy({
    el: "#scroll-nav"
});
```

### Settings

```js
{
    el: "", // nav element selector
    activeClass: "current", // active class's name (Default: current)
    offsetTop: 0, // nav height (Default: 0)
}
```

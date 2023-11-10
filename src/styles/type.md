---
layout: layouts/right.md
title: Typography
tags: styles
---


<div class="usa-prose">

**Theme typography**
All patterns in the library make use of the theme token typography by default. There is some theming of patterns, see the pattern you are working with to apply global pattern level changes. In order to apply the `usa-prose` styles to type, add the class to the highest level div that you want the class applied -- typically this would be in the `<body>` tag.

---
# Headline 1

## Headline 2

### Headline 3

### Headline 4
Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- with examples
- of some bullets
- as well as
- what a [link](/) would look like

---

## Custominizing Type in the USWDS
Use the `$theme-settings` to change the font you would like to use for the library. 
### Native fonts
USWDS comes with: Georgia, Helvetica, Merriweather, Open Sans, Public Sans, Roboto Mono, Source Sans Pro, System fonts, Tahoma, Verdana. To make use of these fonts simply add that font to the theme settings.

_example_
`$theme-font-role-heading: "merriweather";`

### Using Google Fonts
_make sure to import the google font in your base css file_
Using the `$theme-settings` add your font tokens to the core.

```
  // font styles
    $theme-typeface-tokens: (
        "lora": (
            'display-name': "Lora", 
            'cap-height': 364px,
            'stack': "Lora, serif",
        ),
        "montserrat": (
            'display-name': "Montserrat", 
            'cap-height': 364px,
            'stack': "Montserrat, sans-serif",
        ),
    ),
```

Then you can use the same method above to set your font: `$theme-font-role-heading: "lora";`

Learn more about [theme-settings on USWDS](https://designsystem.digital.gov/documentation/settings/#typography-settings) and which variables can be controlled, include the font tokens, weight tokens, size togets and more.

## Designing in Code
This library makes use of [Markdown-it](https://markdown-it.github.io/) and [Liquid](/https://cloudcannon.com/cheat-sheets/jekyll/) to create pages and layouts. HTML can be used when needed.

</div>
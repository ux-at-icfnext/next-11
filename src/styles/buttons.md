---
layout: layouts/right.md
title: buttons
tags: styles

default:
  - link: "/"
    text: default
  - link: "/"
    text: hover
    class: usa-button--hover
  - link: "/"
    text: active
    class: usa-button--active
  - link: "/"
    text: focus
    class: usa-focus
  - link: "/"
    text: disabled
    class: usa-button--disabled
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

secondary:
  - link: "/"
    text: default
    class: usa-button--secondary
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--secondary
  - link: "/"
    text: active
    class: usa-button--active usa-button--secondary
  - link: "/"
    text: focus
    class: usa-focus usa-button--secondary
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--secondary
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

accent-cool:
  - link: "/"
    text: default
    class: usa-button--accent-cool
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--accent-cool
  - link: "/"
    text: active
    class: usa-button--active usa-button--accent-cool
  - link: "/"
    text: focus
    class: usa-focus usa-button--accent-cool
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--accent-cool
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

accent-warm:
  - link: "/"
    text: default
    class: usa-button--accent-warm
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--accent-warm
  - link: "/"
    text: active
    class: usa-button--active usa-button--accent-warm
  - link: "/"
    text: focus
    class: usa-focus usa-button--accent-warm
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--accent-warm
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

base:
  - link: "/"
    text: default
    class: usa-button--base
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--base
  - link: "/"
    text: active
    class: usa-button--active usa-button--base
  - link: "/"
    text: focus
    class: usa-focus usa-button--base
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--base
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

outline:
  - link: "/"
    text: default
    class: usa-button--outline
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--outline
  - link: "/"
    text: active
    class: usa-button--active usa-button--outline
  - link: "/"
    text: focus
    class: usa-focus usa-button--outline
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--outline
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

inverse:
  - link: "/"
    text: default
    class: usa-button--outline usa-button--inverse
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--outline usa-button--inverse
  - link: "/"
    text: active
    class: usa-button--active usa-button--outline usa-button--inverse
  - link: "/"
    text: focus
    class: usa-focus usa-button--outline usa-button--inverse
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--outline usa-button--inverse
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled usa-button--outline usa-button--inverse

big:
  - link: "/"
    text: default
    class: usa-button--big
  - link: "/"
    text: disabled
    class: usa-button--big
    disabled: true
  - link: "/"
    text: aria-disabled
    class: usa-button--big
    aria-disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled usa-button--big

btn-group:
  set:
    segment: true
  btn:
    - link: "/"
      text: don't click me
      class: usa-button--outline
    - link: "/"
      text: click me

htmlpath: "pattern/button/button.html"

snippet: '{% include "pattern/button/button.md" %}'
spit-assigned: |
  
  {% assign button = myButton %}
  {% include "pattern/button/button.md" %}
spit-assigned-group: |

  {% assign button-group = myButtonGroup %}
  {% include "pattern/button/button.md" %}
---

## Design 
### Default 
{% assign button = default %}
{% include "patterns/button/button.md" %}

### Secondary 
{% assign button = secondary %}
{% include "patterns/button/button.md" %}

### Accent Cool 
{% assign button = accent-cool %}
{% include "patterns/button/button.md" %}

### Accent Warm 
{% assign button = accent-warm %}
{% include "patterns/button/button.md" %}

### Base 
{% assign button = base %}
{% include "patterns/button/button.md" %}

### Outline 
{% assign button = outline %}
{% include "patterns/button/button.md" %}

### Inverse 
<div style="background-color: #000000; padding: 10px;">
{% assign button = inverse %}
{% include "patterns/button/button.md" %}
</div>

### Big 
{% assign button = big %}
{% include "patterns/button/button.md" %}

## Theme Settings
- $theme-button-font-family - Font family of the button.
- $theme-button-border-radius - Button border radius for rounded corners.
- $theme-button-small-width - Width of small buttons. Used to define the size of the header search button and small language selector button.
- $theme-button-stroke-width - Stroke width of __outline__ button variants.
{: .usa-list }

## Variations
- .usa-button–secondary - Button uses secondary color.
- .usa-button–accent-cool - Button uses accent-cool color.
- .usa-button–accent-warm - Button uses accent-warm color.
- .usa-button–base - Button uses base color.
- .usa-button–outline - Transparent button with a color stroke.
- .usa-button–inverse - Light color button for dark backgrounds.
- .usa-button–big - A bigger button.
- .usa-button–unstyled - A button that looks like a link.
{: .usa-list }

### Button Group (segmented)
{% assign button-group = btn-group %}
{% include "patterns/button/button.md" %}

The button group makes it easy to put multiple buttons together. There are two options for the grouping. The default grouping creates a small margin between the buttons. The segmented button group has no space between the buttons. This is done by adding `usa-button-group--segmented` class to the `<ul>`.

## Code Example

```html
  <ul class="usa-button-group">
    <li class="usa-button-group__item">
      <a href="javascript:void(0);" class="usa-button usa-button--outline"
        >Back</a
      >
    </li>
    <li class="usa-button-group__item">
      <button type="button" class="usa-button">Continue</button>
    </li>
  </ul>
```

## Library & Prototyping
In most cases, you can just add the html for a button where you need it. However, the button group pattern makes it easy to add multiple buttons and should be used with two or more buttons. __IMPORTANT__ the button group pattern is using links not buttons, please keep that in mind if using with forms.

To implement a button group into the page you first need to create the content and settings. This can be done through the front matter.

### Settings
Settings are optional parameters that can be added to control styling and to set a reference. The reference is needed for using multiple groups if accordions on a page.

<div class="usa-table" >

| setting | value |
| ------ | ------ |
| segment | true/false (defaults to false) |
| class | allows adding a custom class to the `ul` elements. |
</div>


### Content
<div class="usa-table" >

| name | description | required |
| ------ | ------ | ------ |
| link | url link to destination | <i class="fa-solid fa-check"></i> |
| text | button label | <i class="fa-solid fa-check"></i> |
| class |  add any styling classes to your button | <i class="fa-solid fa-check"></i>  |
</div>

### Front matter example

```yaml
  button:
    - link: "/"
      text: don't click me
      class: usa-button--outline
    - link: "/"
      text: click me
```

**Using settings**
```yaml
  button-group:
    set:
      segment: true
      class: my-cool-class
    btn:
      - link: "/"
        text: don't click me
        class: usa-button--outline
      - link: "/"
        text: click me
```

### Add pattern to the page
simply include the button pattern ```{{ snippet }}``` and it will automatically use a "button" or "button-group" assigned in the front matter. 

If you need to create multiple buttons/button group ... make sure to assign the name of your button array.
```liguid
  {{ spit-assigned }}
```

For a button group:
```yaml
  {{ spit-assigned-group }}
```

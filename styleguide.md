---
layout: default
title: ATX Safer Streets Styleguide
css_id: style_guide
---
<link rel="stylesheet" href="/css/style-guide.css" type="text/css" media="all">

# Colors

{% assign colors = "orange,blue,green,grey" | split:"," %}
{% assign names = "Orange,Blue,Green,Grey" | split:"," %}
{% assign values = "main,dull,dark,light,highlight" | split:"," %}

<div class="styleguide-swatches">
  {% for color in colors %}
  <ol class="{{ color }}">
    <li class="title">
      {{ names[forloop.index0] }}
    </li>
    {% for value in values %}
      <li class="{{ value }}">
        <span></span>
        <div class="accent high"></div>
        <div class="accent low"></div>
      </li>
    {% endfor %}
  </ol>
  {% endfor %}
</div>


# Typeface

All headings are in [Michroma](http://www.google.com/fonts/specimen/Michroma) and all body text is in [Droid Sans](http://www.google.com/fonts/specimen/Droid+Sans).

# Heading 1


## Heading 2


### Heading 3


#### Heading 4

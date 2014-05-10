---
layout: default
title: ATX Safer Streets Styleguide
css_id: style_guide
header_image: 1
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


## Other Text Elements

Bahn mi integer leo porta nibh lectus arcu elementum cursus tofu risus massa sed amet odio sodales pellentesque non artisan nam. Ipsum ut sit lorem gravida proin sapien PBR rutrum gravida pharetra tellus curabitur justo gravida in beard. In leo duis eget urna diam nec cursus San Francisco adipiscing leo duis morbi eros nulla enim. Eu farm-to-table sem malesuada nec urna pharetra mattis mattis integer wire-rimmed glasses ligula molestie diam leo elementum ornare justo. Ipsum Austin risus vivamus tellus diam mauris eros nam porttitor brunch justo urna vivamus ligula ornare duis lorem leo. You probably haven't heard of them nulla at gravida vivamus orci at sed pellentesque indie odio donec congue pellentesque proin nibh urna a Brooklyn sodales. Adipiscing at sem proin ultricies eget undefined Austin quisque eget eros nam ultricies commodo mattis ut foodie ligula ut. Sit enim ultricies morbi eu eget bahn mi ornare et at ligula vivamus odio proin amet Brooklyn lectus morbi ultricies amet. Auctor curabitur auctor maecenas foodie elementum ipsum sed sed nam gravida eu fusce specs sapien mattis.

* Bullet List
* Another list item
* Last list item

1. First ordered list
2. Second item
3. Third item

Superscript: 3<sup>rd</sup>, 4<sup>th</sup>, and 5<sup>th</sup> <br />
Subscript: H<sub>2</sub>O and C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>

Cursus non pharetra sapien cursus eros noise-rock ipsum rutrum pellentesque eros congue commodo nam commodo specs. Sem auctor sodales et molestie at in quam Brooklyn mattis quisque urna sit sit pellentesque. Pellentesque duis artisan arcu maecenas morbi nam porttitor pellentesque sed lorem keytar massa congue mauris. Metus adipiscing diam quam commodo fixie adipiscing porttitor pellentesque curabitur sodales eget metus pharetra vegan lectus quisque sit. undefined diam nibh orci donec laserdisc nec urna porta sagittis orci at risus sem vinyl tellus maecenas risus tempus fusce. Ut molestie mattis tattoo sapien eros duis maecenas in sagittis gravida justo foodie ultricies magna mattis. Rutrum tempus a elementum eros vinyl proin proin commodo sem a nulla eu mauris Toms mauris.

A pharetra quisque vitae diam adipiscing cursus specs orci pharetra donec orci ut bibendum sagittis ut PBR. Ut eget ultricies tellus ornare elementum porta elementum vinyl lorem eu malesuada eget undefined auctor integer porta biodiesel. Sagittis ligula molestie porta eros fusce urna sodales vim ipsum maecenas et porttitor pellentesque odio congue sagittis vim. Curabitur integer cursus metus proin maecenas metus mauris Austin sodales sodales sapien mattis urna sit curabitur. Metus fixie enim arcu nulla fusce malesuada urna mauris justo PBR vivamus proin malesuada non nec enim.

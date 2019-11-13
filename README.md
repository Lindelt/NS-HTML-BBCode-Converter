# HTML to BBCode Converter (for NationStates)

A small JavaScript file that adds BBCode tags around the content of certain 
HTML tags and classes. Intended for use in writing large 
[NationStates.net](https://www.nationstates.net) dispatches and forum posts, 
so that one need not spend hours hunting down that missing closing tag.

## A word of caution

This was hammered together over the course of a day, meaning that I took the
quick and dirty route to get things working. The usual best practice of using
elements such as `<div>`, `<article>`, and other standard containers as such
tends to introduce undesirable newlines. I'd recommend using the `<span>` tag
as a general replacement to avoid this issue.

## Usage

Download the bbcode.js file, and place the following tags in your .html
document's header file to produce NS-compatible BBCode

```html
<script src="pathto/bbcode.js></script>
<script>window.onload = runAll;</script>
```

After this, you should be able to launch the page in your browser, then
select-all, copy, and paste the resulting BBCode into a forum or dispatch.
The results may require a bit of cleaning up for visuals, but the conversion
should take care of most of the heavy duty bug-hunting that inevitably occurs
in large BBCode documents.

## Supported Tags

[NS BBCode Guide](https://www.nationstates.net/page=dispatch/id=330837)

### Bold \[b\]

Associated Tags: `<b>, <strong>, <h1>, <h2>`

### Italic \[i\]

Associated Tags: `<i>, <em>, <h3>`

### Underline \[u\]

Associated Tags: `<u>`

### Superscript \[sup\]

Associated Tags: `<sup>`

### Subscript \[sub\]

Associated Tags: `<sub>`

### Strike-through \[strike\]

Associated Tags: `<strike>, <s>, <del>`

### Unformatted Text \[pre\]

Associated Tags: `<pre>`

### Code \[code\] (Forums Only)

Associated Tags: `<code>`

### Horizontal Ruler \[hr\]

Associated Tags: `<hr />`

### Link \[url\]

Associated Tags: `<a href={url}>`

### Anchor \[anchor\]

Associated Class: `anchor`

Argument:
```data-anchor = "={name}"
Contains the {name} of this anchor.```

### Image \[img\]

Associated Tags: `<img src={url} />`

### Nation \[nation\]

Associated Class: `nation`

Argument:
```data-nation = "=short" | "=short+noflag"
Flag which controls the appearance of the resulting nation name. Optional
argument.```

### Region \[region\]

Associated Class: `region`

### World Assembly Proposal

Associated Class: `proposal`

Argument:
```data-proposal = "={proposal_id}"
Contains a id the WA proposal.```

### Word Assembly Resolution

Associated Class: `resolution`

Argument:
```data-resolution = "={(GA|SC|UN)#id}"
Contains the assembly body and resolution number of the resolution.```

### Quote \[quote\]

Associated Class: `quote`

Argument:
```data-quote
Contains a string of the format "nation;postId" pointing to the quote on the
regional message boards.```

### Spoiler \[spoiler\]

Associated Class: `spoiler`

Argument:
```data-spoiler = "={label}"
Contains the spoiler's {label}. Optional argument.```

### Float \[float\]

Associated Class: `float`

Argument:
```data-float = "=left" | "=right"
Determines which side of the screen the content floats towards.```

### Alignment \[align\]

Associated Class: `align`

Argument:
```data-align = "=left" | "=right" | "=center" | "=justify"
Determines the alignment of the contained text. Defaults to "=left" if no
value is provided.```

### Indentation \[tab\]

Associated Class: `tab`

Argument:
```data-tab = "={pixels}"
Contains the number of {pixels} to indent```

### Box \[box\]

Associated Class: `box`

### Sidebar \[sidebar\]

Associated Class: `sidebar`

### Size \[size\]

Associated Tags: `<h1>`

Associated Class: `size`

Argument:
```data-size = "={percent}"
Contains the size of the text as a percentage of the base size. A value of
"=100" is normal, "=200" doubles the text size, and so on. Defaults to "=100"
if no value is provided, or "=150" if the tag is an <h1> tag.```

### Font \[font\]

Associated Class: `font`

Argument:
```data-font = "={font}"
Contains the font family that this text should use. Defaults to "=Helvetica"
if no value is provided."```

### Text Color \[color\]

Associated Class: `color`

Argument:
```data-color = "={color}"
Contains a color word (e.g. "=red") or a hexadecimal color value (e.g.
"=#FF0000"). Defaults to "=red" if no value is provided.```

### Text Highlighting \[background\]

Associated Class: `background`

Argument:
```data-background = "={color}"
See [color]. Defaults to "=blue" if no value is provided.```

### Background Color \[background-block\]

Associated Class: `background-block`

Argument:
```data-background-block = "={color}"
See [color]. Defaults to "=blue" if no value is provided.```

### List \[list\]

Associated Tags: `<ul>, <ol type="{type}">

Argument:
```type = "1" | "A" | "a" | "I" | "i"
Unused on <ul> elements, where it is discarded. Defaults to "1" on <ol>
elements if no value is provided.```

### List Item \[*\]

Associated Tags: `<li>`

### Table \[table\]

Associated Tags: `<table>`

### Table Row \[tr\]

Associated Tags: `<tr>`

### Table Data \[td\]

Associated Tags: `<td>, <th>`
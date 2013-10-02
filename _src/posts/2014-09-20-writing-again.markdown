---
title: writing again
published: false
cover: /img/bgr-fi.jpg
author:
  name: Truong Nguyen
  github: constantx
  avatar: https://0.gravatar.com/avatar/bdd22ad361650cddb58011e5d301e67b?d=https%3A%2F%2Fidenticons.github.com%2F78111570a7c73234b9c1d28182759030.png&s=420
tags:
- styleguide
- reference
---

This is a basic styleguide with all elements supported by my fork of punch-blog. You'll find heading, paragraph, strong, em, photo, codeblock, blockquote, photos.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Lorem ipsum dolor sit amet, _consectetur adip isicing elit_, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. __Cupcake ipsum dolor__ sit amet gingerbread I love wafer tiramisu. Chocolate bar gummi bears dragée tiramisu. [Link topping](/) chocolate marzipan dessert. Donut pie I love pie cupcake. Lollipop apple pie carrot cake cheesecake fruitcake sugar plum I love muffin.

> This is a blockquote. Lorem ipsum dolor sit amet, consectetur adip* isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.

## Photos
![cat? - by constantx](/img/bgr-fi.jpg)

## Codeblock
Punch-blog uses [Prism.js](http://prismjs.com/) for automatic syntax highlighting.
Code block highlighted via prism.js:
```javascript
  "blog": {
    "posts_dir": "posts",
    "post_format": "markdown",
    "post_url": "/{year}/{month}/{date}/{title}",
    "teaser_length": 2,
    "homepage_posts": 10,

    "archive_urls": {
      "all": "/archive",
      "year": "/{year}",
      "year_month": "/{year}/{month}",
      "year_month_date": "/{year}/{month}/{date}",
      "tag": "/tag/{tag}"
    }
  }
```

## Unordered list
There are several other nifty features like that on Punch-blog. Here's a small list:

* Preview posts, as you write them.
* Easily publish to Amazon S3.
* Pretty URLs for permalinks (no .html, configurable).
* Responsive, customizable theme based on [HTML5Boilerplate](html5boilerplate.com) & [320andup framework](https://github.com/malarkey/320andup/).
* Load fonts from multiple sources with [WebFonts Loader](https://github.com/typekit/webfontloader).

## Ordered list
1. Manage other pages with Punch's default content handler.
2. Extend the behavior by writing your own helpers.
3. This is so sexy and awesome right?


Happy Blogging!

---
title: "Day 09"
date: "2020-01-09"
---
## Error: 
Variable "$slug" of required type "String!" was not provided.

## Occruence
Due to the structure of the project is different from the tutorial site, I created the blog-template.js file in the blogs folder.
When I started run `gatsby build` to create the production build for the website, it popped the error in the console. 

## Solution: 
Read a thread from https://github.com/gatsbyjs/gatsby/issues/4360 
The context of the createPage from gastby-node.js need to passed into the template component inside  `/template` folder

<img src="https://source.unsplash.com/weekly?web" alt="day09-challenge" height="315"/>


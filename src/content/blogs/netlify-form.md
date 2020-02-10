--- 
title: Netlify Form
date : "2020-02-09"
description: "Build your form with confident with Netlify Form"
--- 
## Learning Goal:
Deploy form with the built-in form service in Netlify 

## Set up
Netlify make it extremely simple to set up your form in their service. What you need to do is to build your HTML Form along with add a `netlify` attribute or `data-netlify="true"` to the form element.

It could be a simple form as follow. 
```javascript
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```
One thing needed to be careful is that you need to have a `name` attribute for form, input and textarea elements. And the names of these elements are required to be unique. The reason behind the scene is that Netlify From API use the name attribute determine which form is receiving the what input.

## Struggle
As you follow the doc on Netlify, everything seems very staight-forward and simple. It's quite a relief for me. With the built-in form service by Netlify, I don't need create a database separately to store any form submission.

But I came across an issue when deploying the form to Netlify. The last input disappeared for no reason. As the form listed aboved, my live site would only show the the input name but not email. 
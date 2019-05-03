# Stafolio

A minimal portfolio generator for programmers. Its name originates from Static Portfolio Generator. The tool makes it easier for programmers to generate their entire website, without touching any html or css files, and updating their data on the fly using only json files.

## Motivation

I know that there are a lot of tools which allow you to customise and/or make a portfolio. However, every single one of them is bloated with stuff that you would not actually use when running a portfolio website for your programming projects (hi wordpress). That's why I decided to make a minimal one, in which the end-user would only update the data they actually need. 

The only thing that any Stalofio's user is required to do is to change some data in json files, and that's it. The js scripts will fetch the data on the next refresh on the client's side, with the updated files and generate the entire htmls on the fly.

This is a very small-sized 'library' it does not use any external apis or 3rd party plugins etc. I really wanted to go with React on this one but after some time thought that it is an overkill for such a minimal website and sticked to vanilla js (actually, everything was written in typescript and was compiled to js afterwards).

## But what are the results?

This is more less what you can do with this generator (I used some html in my jsons, to inject some links etc. but you can do it too, I will explain that part later, for the most part I have not done anything outside of the box here) <br>

<a href="filipmikina.pl">Click here</a> to check out my portfolio, generated with Stafolio


# VPI WEBSITE DOCUMENTATION


Start Date: 3rd Jun 2019
Completion Date: 16 Aug 2019
This project focuses on the creation of **VPI** website (front-end only). The aim is to produce a front-end template which can further be expanded to make it completely functional.

# Features
- see company and office information 
- view / filter current VPI residential and commercial projects
- contact or make project enquiry

# Files & Folders

Project File:
#VPI-Website master

  **Folders include:**

**app.js** : contains executable functionality for the website (uses Expressjs and Nodejs)

**views**  : contains all pages of the website  

**img**    : contains all images, icons and logos used throughout the website

**public** : contains bootstrap, javaScript, CSS files     
**partials** : header and footer html (this folder is within the views folder)     

## Pages

The project consists of the following pages:

- home.ejs : introductory page seen when opening the website. Includes latest projects, member forms, partner info etc. 
- about.ejs : detailed page of company's vision and mission, includes services and team info
- property.ejs : shows detailed description of a property
- propertyFilter.ejs: shows and filters available properties
- contact.ejs: contact company form

## Other Files
- package.json
- app.js (contains website functionality eg. page routes, get request and post request)
Consider the following file path:
``app.get("/", function(res,req)){...}``
- "/" points to main home page here similarly "/about" points to the about company page.

## Contribute
live website: 
> [http://vpigroup.com.au/](http://vpigroup.com.au/)
Source code: github.com/.....  
free testing host: [https://nameless-wildwood-61574.herokuapp.com] on heroku server 



# RUN CODE

## Online
> open  [http://vpigroup.com.au/](http://vpigroup.com.au/) in browser

## Powershell or other Linux
Local execution requires installation of Nodejs [https://nodejs.org/en/](https://nodejs.org/en/)

open linux window and go to project file:

    cd VPI-master-1  or cd (write/drag VPI-Version1-master folder here to get path)

Run app.js file:

    node app.js

Should say 'connected to server' on screen
## Shut down program
On command line/Powershell window type:
>press Ctrl + c 


# Change images and video

DO NOT REMOVE "img/" as this is the specific path to the img folder

Inline comments available in the .ejs files in views folder
Follow the comments and change images where it says:
> <!--change image here -->
><!--change video here -->

The video are hosted on youtube.com 
Get video link from youtube and put in code following the same format as sample link:
> src="https://www.youtube.com/embed/cfvPjBVZCTc"  <--cfvPjBVZCTc is your video ID-->

## app.js

This file runs the website.
Expressjs is used with nodejs
>app.get("/", function(req, res){}); gets the home page while "/about" gets company page etc.




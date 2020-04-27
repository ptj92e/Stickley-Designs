# Stickley-Designs

Stickley Designs is a website I built for a designer/writer of shows for marching bands and indoor music ensembles. I worked collaboratively with my client to build a website to help further his business as a show designer. 

If you would like to check it out, follow the link here: www.stickleydesigns.com

![Stickley Designs](/StickleyDesigns.png)

### User Story

AS A marching band show designer,  
I WANT a website to send to potential clients to show off my work  
SO THAT I can present myself in a professional way.

## React.js

This website was built with React to allow users to have a very responsive experience. Since this is a static site, there was not much need to manipulate state, so the componenets are all functional. The navbar works using React-Router-Dom to render the various "pages" in the site.

## Home Page

The home page was a fun project to tackle. The body has a background image that is a radial gradient to allow for the highlight of orange in the middle of the screen. The Home Page has a background image of a drill chart layered on top of the body image. The magic happens with mix-blend-mode: luminosity; which allows the radial gradient to mix with the background image to alter the color. 

## Bootstrap

I used a mixture of Bootstrap components and my own CSS to achieve the mobile responsiveness of the web page. On the Portfolio page, there is a Bootstrap Carousel that displays the various images of my client's work.

## NodeMailer/DotENV

I used NodeMailer on the contact page to allow the user to contact my client directly. NodeMailer requires an email address and password to work, so I also used DotENV along with it to keep my client's personal information protected.
# OverSite-Microservice
<p align="center">
<img width="405" alt="Screen Shot 2020-07-29 at 2 04 17 PM" src="https://user-images.githubusercontent.com/49219371/88853381-7e2de480-d1a4-11ea-8700-8d7cf59b8c26.png">

  <img src="https://user-images.githubusercontent.com/1651212/27013967-6cbd6b8a-4ebc-11e7-9cd8-e5d0fcb01440.png" alt="logo" width="600px" />
 </p>

## OverSite-Backend Github
https://github.com/SMJ289/oversite-be

## OverSite-Frontend Github
https://github.com/emackinnon1/oversite-fe

## Team Members:

- [Steve Meyers GitHub](https://github.com/smj289)
- [Raymond Nguyen GitHub](https://github.com/itemniner)
- [Jenny Klich GitHub](https://github.com/jklich151)
- [Elliot Mackinnon GitHub](https://github.com/emackinnon1)
- [Taras Tarlov GitHub](https://github.com/ttarlov)

## Overview
OverSite was our final cross pollination project at [Turing School of Software and Design](http://turing.io). The goal for this project was to build a full stack application from ideation to production in just 14 days. The emphasis was on creating a professional agile workflow with a combination of front-end and back-end developers.
The core mission of OverSite is to amalgamate civic information into one easy to use application that allows the user to easily find Senator and Representative contact information, and Tweet at them directly through the app. Currently the user can search by state and access their local district level representatives throught their profile. 
[Live Site](https://oversite-app.herokuapp.com/)

## Getting started
- Clone the repo
- $ `npm setup`
- $ `node index.js`

**Challenges:**
The challenges we faced while adding this feature started with recieving authentication from Twitter. The process rewuires a review that takes over two weeks, which made it impossible to use the Twitter API to post a tweet in our time frame. We came up woth a work around by using Nightmarejs to log-in and post the tweet for us using a message we populate, and the Twitter handle of the government official we'd like to tweet. 

**Future Iterations**
- Instead of using Nightmare we would use the Twitter API to improve the usability of the MicroService.


### API Endpoint
- path: `/send-tweet`
- params: `handle` and `message`
- use: 'tags a user and posts tweet to oversite account'



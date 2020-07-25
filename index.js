const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const EMAIL = process.env.TWITTER_EMAIL;
const PASSWORD = process.env.TWITTER_PASSWORD;
const Nightmare = require('nightmare');
let nightmare = Nightmare({ show: true });

app.get('/', (request, response) => {
    response.send('Send Tweet');
});

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Twitter Messaging';

app.get('/send-tweet', async (request, response) => {
    var message = request.param('message');
    var handle = request.param('handle');
    try {
    var tweet = await sendTweet(message, handle);
    return response.json({ message: 'Message sent' });
    } catch (err) {
    console.log(err);
    }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

function sendTweet(message, handle) {
    var url = `https://twitter.com/intent/tweet?text=${message}&via=${handle}`;
    return nightmare
    .goto(url)
    .wait(500)
    .type('input[type="text"]', `${EMAIL}`)
    .type('input[type="password"]', `${PASSWORD}`)
    .type('input[type="password"]', '\u000d')
    .wait(4500)
    .evaluate(() => {
      let tweetBtn = [...document.querySelectorAll('span')].find(span => span.innerText === "Tweet")
      tweetBtn.addEventListener("click", e => { console.log("clicked") })
    	tweetBtn.click()
    })
    .wait(2000)
    .then(() => {
      	return nightmare.end();
    })
    .then(function(){
    nightmare  = Nightmare()
    	console.log("nightmare done")
    })
}

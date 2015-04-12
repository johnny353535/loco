var Express = require('express');


var thread = {
  user: "user1",
  text: "This is a test!",
  date: Date.now(),
  location: "130 meters"
}

var threads = [];

for(var i = 0; i < 10; i++){
  threads.push(thread);
}

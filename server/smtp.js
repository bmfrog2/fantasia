Meteor.startup(function () {
  smtp = {
    username: 'frog.dev.email.verify@gmail.com', 
    password: 'frog6800',  
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' 
                       + encodeURIComponent(smtp.username) + ':' 
					   + encodeURIComponent(smtp.password) + '@' 
					   + encodeURIComponent(smtp.server) + ':' 
					   + smtp.port;
});


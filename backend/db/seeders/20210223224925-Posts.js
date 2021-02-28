'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    // don't user userId 1, that is reserved for the demo user

    return queryInterface.bulkInsert('Posts', [
      { type:'image', title: 'you out there?', text:'', image:'https://images.unsplash.com/photo-1570591753973-56d194d3bd09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwdHVtYmxyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', link:'', video:'', numLikes: 36, userId:5, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: ':)', text:'', image:'http://archermagazine.com.au/wp-content/uploads/2018/10/john-baker-349282-unsplash-1024x640.jpg', link:'', video:'', numLikes: 7483, userId: 2, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'I love coffee', text:'like a lot', image:'https://64.media.tumblr.com/6ebfa243c234b80de7b1c05476e4266c/tumblr_om75wl0I551sojkzpo1_500.jpg', link:'', video:'', numLikes: 4564, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'just tryna do my job', text:'what can I get ya?', image:'https://pbs.twimg.com/media/EJbYk46W4AEAaZD.jpg', link:'', video:'', numLikes: 86, userId: 4, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'm00d', text:'this is me', image: 'https://wallpapercave.com/wp/wp3251371.jpg', link:'', video:'', numLikes:  1002 , userId: 12, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'run away with me', text: "i'm sure", image: 'https://www.wallpapertip.com/wmimgs/2-25769_iphone-wallpaper-tumblr-66-grunge-flower-field-aesthetic.jpg', link:'', video:'', numLikes:  1002 , userId: 27, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'city lights', text:'', image: 'https://images.unsplash.com/photo-1571753907002-e3db33646a7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHVtYmxyJTIwYWVzdGhldGljfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', link:'', video:'', numLikes:  1002 , userId: 12, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'eh', text:'', image: 'https://techcrunch.com/wp-content/uploads/2013/02/watermelon-seeds.jpg?w=320', link:'', video:'', numLikes:  5645 , userId: 18, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'only in a dream', text:'haha', image: 'https://64.media.tumblr.com/ea248a63b08babae227768fa433d0f28/b3f984fc95a08195-9e/s640x960/d4cd724da21d457732ec3bb84e88816d853492a2.jpg', link:'', video:'', numLikes: 324 , userId: 2, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'ill take this with you', text:'hugs', image: 'https://cutewallpaper.org/21/tumblr-wallpapers-pink/Pink-Aesthetic-Tumblr-Wallpapers-Top-Free-Pink-Aesthetic-.jpg', link:'', video:'', numLikes:  658768, userId: 10, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'looking at the future like', text:'what is going on ... ahhhhhhhhh', image: 'https://images.unsplash.com/photo-1565204310681-74dd89a559cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8&w=1000&q=80', link:'', video:'', numLikes:  453, userId: 24, createdAt: new Date(), updatedAt: new Date()},
      { type:'link', title: 'respond with your favorite throwback website', text:'', image: '', link:'ask.fm', video:'', numLikes:  75675, userId: 8, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'kinda want this in my house', text:'ugh', image: 'https://images6.fanpop.com/image/photos/40900000/tumblr-wallpapers-ari-and-rachel-E2-99-A5-40971324-640-1137.jpg', link:'', video:'', numLikes:  3442, userId: 21, createdAt: new Date(), updatedAt: new Date()},
      { type:'link', title: "what's your favorite product from", text:'', image: '', link:'amazon.com', video:'', numLikes:  97850, userId: 22, createdAt: new Date(), updatedAt: new Date()},
      { type:'text', title: 'good morning!!!', text:'what did you have for breakfast? breakfast is my favorite!', image: '', link:'', video:'', numLikes: 9874 , userId: 26, createdAt: new Date(), updatedAt: new Date()},
      { type:'text', title: "do you like charlotte's web?", text:'this is me', image: '', link:'', video:'', numLikes:  456, userId: 14, createdAt: new Date(), updatedAt: new Date()},
      { type:'text', title: 'favorite HSM movie?', text:'(important question)', image: '', link:'', video:'', numLikes: 6543 , userId: 19, createdAt: new Date(), updatedAt: new Date()},
      { type:'text', title: 'happy place', text:'', image: 'https://wallpaperaccess.com/full/1240010.jpg', link:'', video:'', numLikes:  9874501, userId: 13, createdAt: new Date(), updatedAt: new Date()},

    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

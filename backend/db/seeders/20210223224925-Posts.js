'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts', [
      { type:'image', title: 'beautiful evening', text:'', image:'https://images.unsplash.com/photo-1570591753973-56d194d3bd09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwdHVtYmxyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', link:'', video:'', numLikes: 457, userId:1, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: ':)', text:'', image:'http://archermagazine.com.au/wp-content/uploads/2018/10/john-baker-349282-unsplash-1024x640.jpg', link:'', video:'', numLikes: 894, userId: 2, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'I love coffee', text:'like a lot', image:'https://images.unsplash.com/photo-1570591753973-56d194d3bd09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwdHVtYmxyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80', link:'', video:'', numLikes: 134, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      { type:'image', title: 'just tryna do my job', text:'what can I get ya?', image:'https://pbs.twimg.com/media/EJbYk46W4AEAaZD.jpg', link:'', video:'', numLikes: 759, userId: 4, createdAt: new Date(), updatedAt: new Date()},
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

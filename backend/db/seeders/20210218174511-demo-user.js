'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'georgia_peach',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'coffeeluver',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'butterfly__',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },


      // //////////////////////////////////////////////////////
      {
        email: faker.internet.email(),
        username: 'cherrycandy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: "cindys-castle",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'somewhere-else',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'where-am-i',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'Not_your_mom.',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },

      {
        email: faker.internet.email(),
        username: 'wendy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'pennymay',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'kristiejane',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'krustykrab',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'go-away',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'ashley',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'get-fancy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'puppiessss',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'harrypotter<3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'ice-queen',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'vampirel0v3r',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'team______',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'cara-sel',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'clarity',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'kelly-kapowski-stan',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'savedbythebell',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'whoareyou',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'flyawayy-',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },

      
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

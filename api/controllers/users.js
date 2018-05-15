module.exports = {
  friendlyName: 'Users',
  description: 'Users something.',
  inputs: {
  },
  exits: {
  },
  fn: async function (inputs, exits) {
    var users = await Users.find();
    return this.res.json(users);
  }
};

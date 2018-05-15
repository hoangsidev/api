module.exports = {
  friendlyName: 'User',
  description: 'User something.',
  inputs: {
    id: { type: 'string' },
  },
  exits: {
  },
  fn: async function (inputs, exits) {
    var user = await Users.find({ id: inputs.id });
    return this.res.json(user);
  }
};

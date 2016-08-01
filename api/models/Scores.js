/**
* Stacks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: true,
  autoUpdatedAt: false,
  autoPk: true,

  attributes: {
    username : {
      type: 'string',
      required: true,
    },

    score : {
      type: 'int',
      required: true,
      index: true,
    }
  },
  
};


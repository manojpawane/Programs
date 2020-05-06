/**
 * string length
 * 
 * let name = 'manoj'
 * console.log('length: '+name.length);
 * 
 * string replace
 * let name = 'manoj is developer'
 * console.log(name);
 * name = name.replace('manoj', 'sujit');
 * console.log(name);
 * 
 * string uppercase
 * let name = 'manoj'
 * console.log(name);
 * name = name.toUpperCase();
 * console.log(name);
 * 
 * float value roundup
 * let value = 1.5
 * console.log(value);
 * value = Math.round(value);
 * console.log(value);
 */


function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
      return submittedUsers.every(function(submit) {
          console.log(submit)
          return goodUsers.some(function(good) {
              console.log(good)
              return good.id === submit.id;
          })
      })
    };
  }
  console.log(checkUsersValid)
  module.exports = checkUsersValid
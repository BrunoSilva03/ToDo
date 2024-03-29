import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'namepattern';
const SEED_PASSWORD = 'passwordpattern';

Meteor.startup(async () => {
  if(!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});

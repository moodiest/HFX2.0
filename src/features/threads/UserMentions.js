const Feature = require("../../core/Feature");
const Threads = require("../../sections/Threads");

class UserMentions extends Feature {
  constructor() {
    super({
      section: Threads,
      name: "User Mentions",
      default: true,
      description: "Adds auto complete mention functionality to threads."
    });
  }

  run() {
    var tagify = new Tagify();
    tagify.addTags(["banana", "orange", "apple"]);
  }
};

module.exports = new UserMentions();

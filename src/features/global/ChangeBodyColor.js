const HFX = require("../../HFX");

/**
 * @module Global
 * @name ChangeBodyColor
 * @author "xadamxk"
 * @description Changes the color of text in tables.
 */
class ChangeBodyColor extends HFX.Feature {
  constructor() {
    super({
      section: HFX.Section.Global,
      name: "Change Body Color",
      default: false,
      description: "Change color.",
      id: "changebodycolor"
    });
  }

  run() {
    $("table").css("color", "red");
  }
};

HFX.Feature.ChangeBodyColor = new ChangeBodyColor();

module.exports = HFX;

const HFX = require("../../HFX");

/**
 * @module Global
 * @name HideImages
 * @description Hides all image tags on the page.
 */
class HideImages extends HFX.Feature {
  constructor() {
    super({
      section: HFX.Section.Global,
      name: "Hides images",
      default: false,
      description: "Hides images",
      id: "hidesimages"
    });
  }

  run() {
    $("img").hide();
  }
};

HFX.Feature.HideImages = new HideImages();

module.exports = HFX;

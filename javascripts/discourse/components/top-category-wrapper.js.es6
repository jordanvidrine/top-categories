import Component from "@ember/component";
import { afterRender } from "discourse-common/utils/decorators";
import { readOnly } from "@ember/object/computed";

export default Component.extend({
  attributeBindings: ["category.name:data-category-name"],

  classNames: ["top-category"],

  categoryName: readOnly("category.name"),

  didInsertElement() {
    this._super(...arguments);

    this._applyBoxShadow();
  },

  @afterRender
  _applyBoxShadow() {
    this.element.style.boxShadow = `4px 4px 0 #${this.category.color}`;
  }
});

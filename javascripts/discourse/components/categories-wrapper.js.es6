import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "",

  categories: null,
  topCat: null,
  other: null,
  topIsSelected: null,

  init() {
    this._super(...arguments);

    const categories = this.attrs.categories.value.content || [];
    if (this.sortPopularCategories) {
      this.set("categories", categories.sortBy("post_count"));
    } else {
      this.set("categories", categories);
    }

    this.setProperties({
      topCat: this.topCat(),
      other: this.cat(),
      topIsSelected: this.sortPopularCategories
    });
  },

  sortPopularCategories: computed(function() {
    return settings.sort_popular_categories;
  }),

  topCategoryCount: computed(function() {
    return settings.top_category_count;
  }),

  topCat() {
    return this.categories.slice(0, this.topCategoryCount);
  },

  cat() {
    if (this.categories.slice(this.topCategoryCount).length === 0) return false;
    return this.categories.slice(this.topCategoryCount);
  }
});

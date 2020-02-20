A Discourse Theme Component that allows the ability to display a set number of categories as 'Featured' in the upper area of the categories page. Depending on the number you set to feature, the rest will appear as normal in a column underneath.

## Theme Settings
- Sort Popular Categories
  - You have the ability to 'sort' the categories based on the amount of activity / popularity in them as well.
- Top Category Count
  - This number will limit the amount of categories in the upper area (_minimum of 1_)

## Stlying
If you'd like to edit the CSS to change the styling, feel free to do so. Here is what the CSS looks like for the category styling.

```scss
.top-categories-wrapper {
  margin: 0 0 25px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  .top-category {
    padding: 10px 10px 20px 10px;
    flex: 1 1 20%;
    margin: 15px 15px;
    border: 1px solid $primary;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .top-category-column-one {
      width: 70%;
      display: flex;
      flex-direction: column;
    }

    .top-category-column-two {
      color: $primary-medium;
      width: 20%;
      text-align: right;
      display: flex;
      flex-direction: column;

      .badge-notification.new-posts, .badge-notification.unread-posts {
        background-color: $secondary;
        color: $primary-medium;
        text-align: right;
        padding: 0px !important;
      } 

    }

  }
  
  .category-title-link {
    color: $primary;
  }

}

.top-categories-header, .other-categories-header {
  margin-top: 25px;
  text-align: center;
}
```
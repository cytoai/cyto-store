import {
  createReducer
} from 'redux-starter-kit';

import {
  createCategoryAction,
  createClassifierAction,
  createImageAction,
  createImageScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImageContrastAction,
  updateImageVisibilityAction
} from "../actions";

import {
  Category,
  Classifier,
  Image
} from "@cytoai/types";

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const findImageIndex = (images: Image[], identifier: string): number => {
  return images.findIndex((image: Image) => image.identifier === identifier);
};

const initialState: Classifier = {
  categories: [],
  images: [],
  name: 'Untitled classifier'
};

const unknownCategory: Category = {
  color: '#F8F8F8',
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visible: true
};

initialState.categories.push(unknownCategory);

export const classifierReducer = createReducer(initialState, {
  [createCategoryAction.toString()]: (state, action) => {
    const { category } = action.payload;

    state.categories.push(category);
  },
  [createClassifierAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  },
  [createImageAction.toString()]: (state, action) => {
    const { image } = action.payload;

    state.images.push(image);
  },
  [createImageScoreAction.toString()]: (state, action) => {
    const { identifier, score } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.scores.push(score);
  },
  [deleteCategoryAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    state.categories = state.categories.filter((category: Category) => {
      return category.identifier !== identifier;
    });

    state.images = state.images.map((image: Image) => {
      if (image.categoryIdentifier === identifier) {
        image.categoryIdentifier = '00000000-0000-0000-0000-000000000000';
      }

      return image;
    });
  },
  [deleteImageAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  },
  [toggleCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = !category.visible;
  },
  [updateCategoryColorAction.toString()]: (state, action) => {
    const { identifier, color } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.color = color;
  },
  [updateCategoryDescriptionAction.toString()]: (state, action) => {
    const { identifier, description } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = visible;
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.name = name;
  },
  [updateImageBrightnessAction.toString()]: (state, action) => {
    const { identifier, brightness } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.brightness = brightness;
  },
  [updateImageCategoryAction.toString()]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  },
  [updateImageContrastAction.toString()]: (state, action) => {
    const { identifier, contrast } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.contrast = contrast;
  },
  [updateImageVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.visible = visible;
  }
});

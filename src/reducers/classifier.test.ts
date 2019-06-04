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
  classifierReducer
} from './classifier';

import {
  Category,
  Classifier,
  Image,
  Partition,
  Score
} from "@piximi/types";

describe('classifierReducer', () => {
  it('createCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const category: Category = {
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visualization: {
        color: '#FFFFFF',
        visible: true
      }
    };

    const payload = {
      category: category
    };

    const action = createCategoryAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('createClassifierAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      name: 'example',
      categories: [
        {           
          description: "1",
          identifier: "18be6295-dade-445e-a13f-e9f2268ac8e6",
          index: 0,
          visualization: {
            color: '#9c27b0',
            visible: true
          }
        },
        {           
          description: "0",
          identifier: "789f08ed-fe80-4785-bdf6-0e7108ec29a3",
          index: 0,
          visualization: {
            color: "#00e676",
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
    };

    const action = createClassifierAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {           
          description: "1",
          identifier: "18be6295-dade-445e-a13f-e9f2268ac8e6",
          index: 0,
          visualization: {
            color: '#9c27b0',
            visible: true
          }
        },
        {           
          description: "0",
          identifier: "789f08ed-fe80-4785-bdf6-0e7108ec29a3",
          index: 0,
          visualization: {
            color: "#00e676",
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'example'
    };

    expect(reducer).toEqual(expected);
  });

  it('createImageAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const image: Image = {
      categoryIdentifier: '00000000-0000-0000-0000-000000000000',
      checksum: '',
      data: '',
      identifier: '11111111-1111-1111-1111-11111111111',
      partition: Partition.Training,
      scores: [],
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true,
        visibleChannels: []
      }
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      image: image
    };

    const action = createImageAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('createImageScoreAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const score: Score = {
      categoryIdentifier: '11111111-1111-1111-1111-11111111111',
      probability: 1.0
    };

    const payload = {
      identifier: '22222222-2222-2222-2222-22222222222',
      score: score
    };

    const action = createImageScoreAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [
            {
              categoryIdentifier: '11111111-1111-1111-1111-11111111111',
              probability: 1.0
            }
          ],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('deleteCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '11111111-1111-1111-1111-11111111111',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = deleteCategoryAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('deleteImageAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = deleteImageAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('toggleCategoryVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = toggleCategoryVisibilityAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: false
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryColorAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      color: '#000000'
    };

    const action = updateCategoryColorAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#000000',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryDescriptionAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      description: 'updated',
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateCategoryDescriptionAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'updated',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      visible: false
    };

    const action = updateCategoryVisibilityAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: false
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateClassifierNameAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      name: 'updated'
    };

    const action = updateClassifierNameAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [],
      name: 'updated'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageBrightnessAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      brightness: 1,
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageBrightnessAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 1,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '22222222-2222-2222-2222-22222222222',
      categoryIdentifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageCategoryAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        },
        {
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visualization: {
            color: '#FFFFFF',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '11111111-1111-1111-1111-11111111111',
          checksum: '',
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageContrastAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      contrast: 1,
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageContrastAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 1,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      visible: false
    };

    const action = updateImageVisibilityAction(payload);

    const reducer = classifierReducer(state, action);

    const expected: Classifier = {
      categories: [
        {
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visualization: {
            color: '#F8F8F8',
            visible: true
          }
        }
      ],
      images: [
        {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: false,
            visibleChannels: []
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });
});

import {
  iPhoto,
  LOADING,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILED,
  GET_ALL_PHOTOS_SUCCESS,
  GET_ALL_PHOTOS_FAILED,
  GET_CATEGORY_PHOTOS_SUCCESS,
  GET_CATEGORY_PHOTOS_FAILED,
  PhotoDispatchTypes
} from './photoTypes';

export interface PhotoState {
  allPhotos: iPhoto[],
  currentUserPhotos: iPhoto[],
  categoryPhotos: iPhoto[],
  searchQueryPhotos: iPhoto[],
  singlePhoto: iPhoto,
  errors: any,
  loading: boolean
}

export const INITIAL_STATE = {
  allPhotos: [],
  currentUserPhotos: [],
  categoryPhotos: [],
  searchQueryPhotos: [],
  singlePhoto: {} as iPhoto,
  addedPhoto: {} as iPhoto,
  errors: null,
  loading: false
}

export const photoReducer = (state: PhotoState = INITIAL_STATE, action: PhotoDispatchTypes) => {
  switch(action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true
      }
    case ADD_PHOTO_SUCCESS: 
      return {
        ...state,
        addedPhoto: action.payload,
        loading: false
      }
    case ADD_PHOTO_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case GET_ALL_PHOTOS_SUCCESS: 
      return {
        ...state,
        allPhotos: action.payload,
        loading: false
      }
    case GET_ALL_PHOTOS_FAILED: 
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case GET_CATEGORY_PHOTOS_SUCCESS: 
      return {
        ...state,
        categoryPhotos: action.payload,
        loading: false
      }
    case GET_CATEGORY_PHOTOS_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state
  }
}

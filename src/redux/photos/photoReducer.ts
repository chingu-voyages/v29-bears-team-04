import {
  iPhoto,
  LOADING,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILED,
  GET_ALL_PHOTOS_SUCCESS,
  GET_ALL_PHOTOS_FAILED,
  GET_CATEGORY_PHOTOS_SUCCESS,
  GET_CATEGORY_PHOTOS_FAILED,
  PhotoDispatchTypes,
  SEARCH_PHOTO_SUCCESS,
  SEARCH_PHOTO_FAILED,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAILED
} from './photoTypes';

export interface PhotoState {
  allPhotos: iPhoto[],
  currentUserPhotos: iPhoto[],
  categoryPhotos: iPhoto[],
  searchQueryPhotos: iPhoto[],
  updatedPhoto: iPhoto,
  addedPhoto: iPhoto,
  errors: any,
  loading: boolean
}

export const INITIAL_STATE = {
  allPhotos: [],
  currentUserPhotos: [],
  categoryPhotos: [],
  searchQueryPhotos: [],
  updatedPhoto: {} as iPhoto,
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
    case SEARCH_PHOTO_SUCCESS: 
      return {
        ...state,
        searchQueryPhotos: action.payload,
        loading: false
      }
    case SEARCH_PHOTO_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case UPDATE_PHOTO_SUCCESS: 
      return {
        ...state,
        loading: false,
        updatedPhoto: action.payload
      }
    case UPDATE_PHOTO_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    default:
      return state
  }
}

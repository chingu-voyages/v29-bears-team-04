export const LOADING = "LOADING";
export const ADD_PHOTO_SUCCESS = "ADD_PHOTO_SUCCESS";
export const ADD_PHOTO_FAILED = "ADD_PHOTO_FAILED";
export const GET_ALL_PHOTOS_SUCCESS = "GET_ALL_PHOTOS_SUCCESS";
export const GET_ALL_PHOTOS_FAILED = "GET_ALL_PHOTOS_FAILED";
export const GET_CATEGORY_PHOTOS_SUCCESS = "GET_CATEGORY_PHOTOS_SUCCESS";
export const GET_CATEGORY_PHOTOS_FAILED = "GET_CATEGORY_PHOTOS_FAILED";

export interface iPhoto {
  id: number,
  title: string,
  imageUrl: string,
  category: string,
  author: number
};

export interface Loading {
  type: typeof LOADING
};

export interface AddPhotoSuccess {
  type: typeof ADD_PHOTO_SUCCESS,
  payload: iPhoto
};

export interface AddPhotoFailed {
  type: typeof ADD_PHOTO_FAILED,
  payload: any
};

export interface GetAllPhotosSuccess {
  type: typeof GET_ALL_PHOTOS_SUCCESS,
  payload: iPhoto[]
};

export interface GetAllPhotosFailed {
  type: typeof GET_ALL_PHOTOS_FAILED,
  payload: any
};

export interface GetCategoryPhotosSuccess {
  type: typeof GET_CATEGORY_PHOTOS_SUCCESS,
  payload: iPhoto[]
};

export interface GetCategoryPhotosFailed {
  type: typeof GET_CATEGORY_PHOTOS_FAILED,
  payload: any
};

export type PhotoDispatchTypes = 
Loading |
AddPhotoSuccess |
AddPhotoFailed |
GetAllPhotosSuccess |
GetAllPhotosFailed |
GetCategoryPhotosSuccess |
GetCategoryPhotosFailed
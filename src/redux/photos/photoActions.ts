import axios from 'axios';
import { Dispatch } from 'redux';
import {
  iPhoto,
  LOADING,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILED,
  GET_ALL_PHOTOS_SUCCESS,
  GET_ALL_PHOTOS_FAILED,
  PhotoDispatchTypes,
  GET_CATEGORY_PHOTOS_SUCCESS,
  GET_CATEGORY_PHOTOS_FAILED
} from './photoTypes';

export interface AddPhotoInput {
  image: File,
  title: string,
  category: "Nature" | "People" | "Architecture" | "Animals" | "Food" | "Technology",
}

export const addPhoto = (photo: AddPhotoInput) => async(dispatch: Dispatch<PhotoDispatchTypes>) => {
  try {
    dispatch({
      type: LOADING
    });

    const res = await axios.post("https://unsplash-clone-server.herokuapp.com/photos/addPhoto", photo, {withCredentials: true});
    dispatch({
      type: ADD_PHOTO_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ADD_PHOTO_FAILED,
      payload: error
    });
  }
};

export const getAllPhotos = () => async(dispatch: Dispatch<PhotoDispatchTypes>) => {
  try {
    dispatch({
      type: LOADING
    });

    const res = await axios.get("https://unsplash-clone-server.herokuapp.com/photos");

    dispatch({
      type: GET_ALL_PHOTOS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PHOTOS_FAILED,
      payload: error
    });
  }
};

export const getCategoryPhotos = (category: AddPhotoInput["category"]) => async(dispatch: Dispatch<PhotoDispatchTypes>) => {
  try {
    dispatch({
      type: LOADING
    });

    const res = await axios.post("https://unsplash-clone-server.herokuapp.com/photos/getCategoryPhotos", category);

    dispatch({
      type: GET_CATEGORY_PHOTOS_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_PHOTOS_FAILED,
      payload: error
    })
  }
};
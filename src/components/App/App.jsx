import { useEffect, useState } from "react";

import ImageGallery from "../ImageGallary/ImageGallery";
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageLoad from "../ImageModal/ImageModal"

import css from "./App.module.css"
import {fetchImages} from "../showImage"

export default function App() {
 

  return (
    <div className={css.cont}>
    </div>
  );
}
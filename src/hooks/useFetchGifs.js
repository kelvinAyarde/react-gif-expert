import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGits";

export const useFetchGifs = (category) => {
    const [images, setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const getImages= async()=>{
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
  
    useEffect(()=>{
      getImages();
    },[ ]);//esto hace que solo se mande el query 1 ves [ ] y no se redibuje
  
    return {
    images,
    isLoading
  }
}

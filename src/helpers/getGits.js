export const getGifs = async(category)=>{//buena practica dejarlo fuera asi no se redibuja esto mucho
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GvE6uQQgFS1kHxYZoDsgXvGAcGpeNZca&q=${category}&limit=10`;
    const resp = await fetch(url);
  
    const {data}=await resp.json();
  
    const gifs = data.map(img =>({//retorna el objeto
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
  }
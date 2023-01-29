import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const {images,isLoading}= useFetchGifs(category);

  console.log({isLoading});
  
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading &&(
      <h2 >Cargando..</h2>
      )//si isLoading es verdadero mostrara cargando, si no lo es no mostrara el h2
    }
    
    <div className="card-grid">
      {
        images.map((image)=>(
          //<li key={id}>{title}</li>
          <GifItem 
          key={image.id}
          {...image}//de esta forma esparcimos las props para usar las que querramos de la lista se envia id title y url en este caso pero solo tomamos url y title en GifItem
          //sirve para muchas propiedades
          />
        ))
      }
    </div>
    </>
  )
}

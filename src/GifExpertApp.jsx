import {useState} from 'react';
import { AddCategory, GifGrid } from './components';//al solo apuntar a la carpeta componentes toma las referencias del index

export const GifExpertApp = () => {
    /*if(true){ nunca hacer esto porque rect pierde la referencia del state. no poner condicionalmente los hooks
        const [categories, setCategories] = useState(['One Punch','Dragon ball' ]);
    }*/
    const [categories, setCategories] = useState(['One Punch' ]);

    const onAddCategory = (newCategory)=>{
        //console.log(newCategory);
        if(categories.includes(newCategory)) return;//si la categoria ya existe no añade nada
        //categories.push('algo') no usar esto con react ya que no tiende a mutar objetos
        setCategories([newCategory,...categories]);//los 3 puntitos hacen una copia de los anteriores datos
    };
  return (
    <>
    {/*titulo */}
    <h1>GifExpertApp</h1>

    {/* Input hacerlo de esta forma para tener componentes individuales*/}
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={value =>onAddCategory(value)}
    />
    {/*Listado de Gif */}
    {/*<button onClick={onAddCategory}>Agregar</button>*/}
    
        {categories.map((category) => (
            <GifGrid 
            key={category} 
            category={category}/>
        )
        )}
        
    
        {/*Gif Item */}
    </>
  )
}

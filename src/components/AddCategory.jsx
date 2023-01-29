import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange=({target})=>{
    setInputValue(target.value); //esta funcion permite cambiar lo que hay en el input
  }
  const onSubmit=(event)=>{
    event.preventDefault();//esto evita que la pagina se recargue
    //console.log(inputValue)
    if (inputValue.trim().length <=1) return; // si no hay caracteres no ejecuta abajo
    onNewCategory(inputValue.trim());
    //setCategories(categories =>[inputValue,...categories]);//de esta forma se recibe un props y se desestructura arriba con {}
    setInputValue(''); //limpiamos el input luego de insertar un dato
  }
  //de esta forma manejamos el input como un formulario
  return (
    //usar <></> solo cuando hay muchos elementos aqui hay 2 pero uno esta dentro de otro
    //el onSubmit usa el argumento para llamar la funcion onsubmit
    <form onSubmit={ onSubmit}>
        <input
    type="text"
    placeholder="Buscar Gif"
    value={inputValue}
    onChange={onInputChange}
        />
    </form>

    
  )
}

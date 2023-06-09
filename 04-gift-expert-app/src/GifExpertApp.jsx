import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { Nav } from "./Nav";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['gif'])

  const onAddCategory= (newCategory) =>{
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  

  return (
    <>
        <Nav/>

        <h1>Gif Expert App</h1>

        <AddCategory
          onNewCategory = { (value) =>onAddCategory (value) }
        />    

        {
          categories.map(category =>
              (
                <GifGrid 
                  key={ category }
                  category= { category }
                />
              ))
        }
    </>
  )
}

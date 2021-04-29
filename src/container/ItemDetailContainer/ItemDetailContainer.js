import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import * as img from "../../Assets";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";


export const ItemDetailContainer = ()=>{
    const [arrayItem, setArrayItem] = useState([]);
    const {id} = useParams();
    console.log(`${id}`);

    useEffect(()=>{        
        const itemDet = [{
          url: img.Portulacaraia,
          id: "3fjk221",
          name: "Portulacaraia",
          kind: "Suculenta",
          price: "$270",
          stock: "12",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          url: img.Aljaba,
          id: "3pew890",
          name: "Aljaba",
          kind: "Exterior",
          price: "$350",
          stock: "17",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.BoxusTopiario,
          id: "3ñlr233",
          name: "Boxus-Topiario",
          kind: "Arbusto",
          price: "$1200",
          stock: "5",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Vinca,
          id: "3wrf762",
          name: "Vinca Apocynaceae",
          kind: "Exterior",
          price: "$150",
          stock: "0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Cica,
          id: "3wps961",
          name: "Cica Revoluta",
          kind: "Interior",
          price: "$850",
          stock: "6",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Hortencia,
          id: "3añw152",
          name: "Hortencia",
          kind: "Interior",
          price: "$770",
          stock: "9",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.YucaKokedama,
          id: "3ygb453",
          name: "Yuca-Kokedama",
          kind: "Arbusto",
          price: "$440",
          stock: "0",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Dietes,
          id: "3try881",
          name: "Dietes",
          kind: "Perenne",
          price: "$630",
          stock: "8",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Liquidambar,
          id: "3rjc233",
          name: "Liquidambar",
          kind: "Arbolaceo",
          price: "$1810",
          stock: "2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
        
        {
          url: img.Tagetes,
          id: "3agc314",
          name: "Tagetes Patula",
          kind: "Interior/Exterior",
          price: "$630",
          stock: "8",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Cactus,
          id: "3dbd117",
          name: "Cactus",
          kind: "Cactacea",
          price: "$210",
          stock: "19",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        },
  
        {
          url: img.Aralia,
          id: "3lpm942",
          name: "Aralaia",
          kind: "Arbolacea",
          price: "$1030",
          stock: "8",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  

        }     
      ];
    
        const getItems = new Promise((res,rej)=>{
            setTimeout(() => {
                res(itemDet);
              }, 2000);
        });
        
        getItems
        .then((res)=>{
            
        const filtro=res.filter(item=>item.id === `${id}`);
        setArrayItem(filtro);
        })
        .catch(() => {
            console.log("No cargó correctamente los datos");
          })
        .finally(() => {
            console.log("Carga finalizada");
          });

        } 
    ,[id])
        
        console.log(arrayItem)

    return(
        <>
        {arrayItem.length? <ItemDetail props = {arrayItem} /> : <h1 className="loading">Cargando...</h1>}   
        </>
    )
}
import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import * as img from "../../Assets";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";


export const ItemDetailContainer = ()=>{
    const [arrayItem, setArrayItem] = useState([]);
    const {id} = useParams();

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

        },     

        {
          category: "macetas",
          url: img.MacetaCubo,
          id: "3tri438",
          name: "Maceta Cubo",
          kind: "Rigida",
          price: "$875",
          stock: "23",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaMatri,
          id: "3jor556",
          name: "Maceta Matri",
          kind: "Rígida",
          price: "$1120",
          stock: "25",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaBols,
          id: "3eti821",
          name: "Maceta Bols",
          kind: "Rígida",
          price: "$250",
          stock: "38",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaBabilonica,
          id: "3brb698",
          name: "Maceta Babilónica",
          kind: "Rígida",
          price: "$540",
          stock: "13",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaPiramide,
          id: "3inc767",
          name: "Maceta Pirámide",
          kind: "Rígida",
          price: "$900",
          stock: "9",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaCuenco,
          id: "3ini923",
          name: "Maceta Cuenco",
          kind: "Rígida",
          price: "$190",
          stock: "35",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaBudinera,
          id: "3gas345",
          name: "Maceta Budinera",
          kind: "Rígida",
          price: "$425",
          stock: "31",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "macetas",
          url: img.MacetaRegia,
          id: "3nzd178",
          name: "Maceta Regia",
          kind: "Rígida",
          price: "$600",
          stock: "5",      
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "sustratos",
          url: img.Sustrato,
          id: "3fox283",
          name: "Sustrato Onitas10K",
          kind: "Sustrato Natural",
          price: "$950",
          stock: "52",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "sustratos",
          url: img.Sustrato,
          id: "3qwe127",
          name: "Sustrato Onitas5K",
          kind: "Sustrato Natural",
          price: "$500",
          stock: "45",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.MensulasCorazon,
          id: "3jnq8819",
          name: "Ménsula Corazón",
          kind: "Complemento",
          price: "$200",
          stock: "21",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.MensulaL,
          id: "3lom633",
          name: "Ménsula en L",
          kind: "Complemento",
          price: "$150",
          stock: "33",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.PlatoRedondo,
          id: "3nih827",
          name: "Plato Redondo",
          kind: "Plato",
          price: "$280",
          stock: "65",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.PlatoJardinero,
          id: "3mcc215",
          name: "PlatoJardinero",
          kind: "Platos",
          price: "$370",
          stock: "16",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.PlatoCuadrado,
          id: "3cth515",
          name: "Plato Cuadrado",
          kind: "Platos",
          price: "$315",
          stock: "22",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
  
        {
          category: "otros",
          url: img.SoporteBalcon,
          id: "3nya122",
          name: "Soporte de Balcón",
          kind: "Semaillas cultivadas",
          price: "$330",
          stock: "17",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "semillas",
          url: img.Oregano,
          id: "3ort299",
          name: "Sem. Oregano",
          kind: "Semilas Cultivadas",
          price: "$110",
          stock: "37",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
        
        {
          category: "semillas",
          url: img.Menta,
          id: "3efm732",
          name: "Sem. Menta",
          kind: "Semilas Cultivadas",
          price: "$130",
          stock: "26",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "semillas",
          url: img.Cilantro,
          id:"3ppa902",
          name: "Sem. Cilantro",
          kind: "Semilas Cultivadas",
          price: "$105",
          stock: "6",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "semillas",
          url: img.Tomillo,
          id: "3pfa710",
          name: "Sem. Tomillo",
          kind: "Semillas Cultivadas",
          price: "$115",
          stock: "9",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "fertilizantes",
          url: img.Humus,
          id: "3nic601",
          name: "Humus Worms 250cm",
          kind: "Fertilizantes Naturales",
          price: "$225",
          stock: "11",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "fertilizantes",
          url: img.Humus2,
          id: "3gtp267",
          name: "Humus Worms 1L",
          kind: "Fertilizantes Naturales",
          price: "$1095",
          stock: "6",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "fertilizantes",
          url: img.Ferrillo,
          id: "3fer888",
          name: "Fertilizante Ferrillo",
          kind: "Semillas Cultivadas",
          price: "$290",
          stock: "19",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "fertilizantes",
          url: img.Enraizador,
          id: "3nap776",
          name: "Enraizador Jap",
          kind: "Fertilizantes Naturales",
          price: "$175",
          stock: "29",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },

        {
          category: "fertilizantes",
          url: img.Guano,
          id: "3sap512",
          name: "Abono de Guano",
          kind: "Fertilizantes Naturales",
          price: "$310",
          stock: "13",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl.",  
        },
      ];
    
        const getItems = new Promise((res,rej)=>{
            setTimeout(() => {
                res(itemDet);
              }, 2000);
        });
        
        getItems
        .then((res)=>{
            
        const itemFilter=res.filter(item=>item.id === id);
        setArrayItem(itemFilter);
        })
        .catch(() => {
            console.log("No cargó correctamente los datos");
          })
        .finally(() => {
            console.log("Carga finalizada");
          });

        } 
    ,[id])

    return(
        <>
        {arrayItem.length? <ItemDetail item = {arrayItem[0]} /> : <h1 className="loading">Cargando...</h1>}   
        </>
    )
}
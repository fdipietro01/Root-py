import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../../components/ItemList/ItemList";
import * as img from "../../Assets";
import {useParams} from "react-router-dom";

export const ItemListContainer = () => {
  const [arrayIt, setArrayIt] = useState([]);
  const [arrayFilt, setArrayItFilt] = useState([]);
  const {id} = useParams(); 
  

  useEffect(() => {

    const productos = [
      {
        category: "plantas",
        url: img.Portulacaraia,
        id: "3fjk221",
        name: "Portulacaraia",
        kind: "Suculenta",
        price: "$270",
        stock: "12",
      },

      {
        category: "plantas",  
        url: img.Aljaba,
        id: "3pew890",
        name: "Aljaba",
        kind: "Exterior",
        price: "$350",
        stock: "17",
      },

      {
        category: "plantas",
        url: img.BoxusTopiario,
        id: "3ñlr233",
        name: "Boxus-Topiario",
        kind: "Arbusto",
        price: "$1200",
        stock: "5",
      },

      {
        category: "plantas",
        url: img.Vinca,
        id: "3wrf762",
        name: "Vinca Apocynaceae",
        kind: "Exterior",
        price: "$150",
        stock: "0",
      },

      {
        category: "plantas",
        url: img.Cica,
        id: "3wps961",
        name: "Cica Revoluta",
        kind: "Interior",
        price: "$850",
        stock: "6",
      },

      {
        category: "plantas",
        url: img.Hortencia,
        id: "3añw152",
        name: "Hortencia",
        kind: "Interior",
        price: "$770",
        stock: "9",
      },

      {
        category: "plantas",
        url: img.YucaKokedama,
        id: "3ygb453",
        name: "Yuca-Kokedama",
        kind: "Arbusto",
        price: "$440",
        stock: "0",
      },

      {
        category: "plantas",
        url: img.Dietes,
        id: "3try881",
        name: "Dietes",
        kind: "Perenne",
        price: "$630",
        stock: "8",
      },

      {
        category: "plantas",
        url: img.Liquidambar,
        id: "3rjc233",
        name: "Liquidambar",
        kind: "Arbolaceo",
        price: "$1810",
        stock: "2",
      },
      
      {
        category: "plantas",
        url: img.Tagetes,
        id: "3agc314",
        name: "Tagetes Patula",
        kind: "Interior/Exterior",
        price: "$630",
        stock: "8",
      },

      {
        category: "plantas",
        url: img.Cactus,
        id: "3dbd117",
        name: "Cactus",
        kind: "Cactacea",
        price: "$210",
        stock: "19",
      },

      {
        category: "plantas",
        url: img.Aralia,
        id: "3lpm942",
        name: "Aralaia",
        kind: "Arbolacea",
        price: "$1030",
        stock: "8",
      },

      {
        category: "macetas",
        url: img.MacetaCubo,
        id: "3tri438",
        name: "Maceta Cubo",
        kind: "Rigida",
        price: "$875",
        stock: "23",
      },

      {
        category: "macetas",
        url: img.MacetaMatri,
        id: "3jor556",
        name: "Maceta Matri",
        kind: "Rígida",
        price: "$1120",
        stock: "25",
      },

      {
        category: "macetas",
        url: img.MacetaBols,
        id: "3eti821",
        name: "Maceta Bols",
        kind: "Rígida",
        price: "$250",
        stock: "38",
      },

      {
        category: "macetas",
        url: img.MacetaBabilonica,
        id: "3brb698",
        name: "Maceta Babilónica",
        kind: "Rígida",
        price: "$540",
        stock: "13",
      },

      {
        category: "macetas",
        url: img.MacetaPiramide,
        id: "3inc767",
        name: "Maceta Pirámide",
        kind: "Rígida",
        price: "$900",
        stock: "9",
      },

      {
        category: "macetas",
        url: img.MacetaCuenco,
        id: "3ini923",
        name: "Maceta Cuenco",
        kind: "Rígida",
        price: "$190",
        stock: "35",
      },

      {
        category: "macetas",
        url: img.MacetaBudinera,
        id: "3gas345",
        name: "Maceta Budinera",
        kind: "Rígida",
        price: "$425",
        stock: "31",
      },

      {
        category: "macetas",
        url: img.MacetaRegia,
        id: "3nzd178",
        name: "Maceta Regia",
        kind: "Rígida",
        price: "$600",
        stock: "5",      
      },

      {
        category: "sustratos",
        url: img.Sustrato,
        id: "3fox283",
        name: "Sustrato Onitas10K",
        kind: "Rígida",
        price: "$950",
        stock: "52",
      },

      {
        category: "sustratos",
        url: img.Sustrato,
        id: "3qwe127",
        name: "Sustrato Onitas5K",
        kind: "Rígida",
        price: "$500",
        stock: "45",
      },

      {
        category: "otros",
        url: img.MensulasCorazon,
        id: "3jnq8819",
        name: "Ménsula Corazón",
        kind: "Complemento",
        price: "$200",
        stock: "21",
      },

      {
        category: "otros",
        url: img.MensulaL,
        id: "3lom633",
        name: "Ménsula en L",
        kind: "Complemento",
        price: "$150",
        stock: "33",
      },

      {
        category: "otros",
        url: img.PlatoRedondo,
        id: "3nih827",
        name: "Plato Redondo",
        kind: "Plato",
        price: "$280",
        stock: "65",
      },

      {
        category: "otros",
        url: img.PlatoJardinero,
        id: "3mcc215",
        name: "PlatoJardinero",
        kind: "Platos",
        price: "$370",
        stock: "16",
      },

      {
        category: "otros",
        url: img.PlatoCuadrado,
        id: "3cth515",
        name: "Plato Cuadrado",
        kind: "Platos",
        price: "$315",
        stock: "22",
      },

      {
        category: "otros",
        url: img.SoporteBalcon,
        id: "3nya122",
        name: "Soporte de Balcón",
        kind: "Complemento",
        price: "$330",
        stock: "17",
      },

    ];

    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 1000);
    });

    promesa
      .then((productos) => {
        console.log(id);
        id !== undefined? setArrayItFilt((productos.filter((item)=>item.category === `${id}`))) : setArrayIt(productos);
      })
      .catch(() => {
        console.log("No cargó correctamente los datos");
      })
      .finally(() => {
        console.log("Carga finalizada");
      });
  }, [id]);
  console.log(arrayIt);
  console.log(arrayFilt);

  return (
    <> {id !== undefined? 
          (arrayFilt.length > 0? <ItemList props = {arrayFilt} /> : <h1 className="loading">Cargando...</h1>) : 
          (arrayIt.length > 0?  <ItemList props = {arrayIt} /> : <h1 className="loading">Cargando...</h1>)
        }
    </>    
    )
};

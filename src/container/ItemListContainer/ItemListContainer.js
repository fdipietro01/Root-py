import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import * as img from "../../Assets";

export const ItemListContainer = () => {
  const [arrayIt, setArrayIt] = useState([]);
  
  useEffect(() => {

    const productos = [
      {
        url: img.Portulacaraia,
        id: "3fjk221",
        name: "Portulacaraia",
        kind: "Suculenta",
        price: "$270",
        stock: "12",
      },

      {
        url: img.Aljaba,
        id: "3pew890",
        name: "Aljaba",
        kind: "Exterior",
        price: "$350",
        stock: "17",
      },

      {
        url: img.BoxusTopiario,
        id: "3ñlr233",
        name: "Boxus-Topiario",
        kind: "Arbusto",
        price: "$1200",
        stock: "5",
      },

      {
        url: img.Vinca,
        id: "3wrf762",
        name: "Vinca Apocynaceae",
        kind: "Exterior",
        price: "$150",
        stock: "0",
      },

      {
        url: img.Cica,
        id: "3wps961",
        name: "Cica Revoluta",
        kind: "Interior",
        price: "$850",
        stock: "6",
      },

      {
        url: img.Hortencia,
        id: "3añw152",
        name: "Hortencia",
        kind: "Interior",
        price: "$770",
        stock: "9",
      },

      {
        url: img.YucaKokedama,
        id: "3ygb453",
        name: "Yuca-Kokedama",
        kind: "Arbusto",
        price: "$440",
        stock: "0",
      },

      {
        url: img.Dietes,
        id: "3try881",
        name: "Dietes",
        kind: "Perenne",
        price: "$630",
        stock: "8",
      },

      {
        url: img.Liquidambar,
        id: "3rjc233",
        name: "Liquidambar",
        kind: "Arbolaceo",
        price: "$1810",
        stock: "2",
      },
      
      {
        url: img.Tagetes,
        id: "3agc314",
        name: "Tagetes Patula",
        kind: "Interior/Exterior",
        price: "$630",
        stock: "8",
      },

      {
        url: img.Cactus,
        id: "3dbd117",
        name: "Cactus",
        kind: "Cactacea",
        price: "$210",
        stock: "19",
      },

      {
        url: img.Aralia,
        id: "3lpm942",
        name: "Aralaia",
        kind: "Arbolacea",
        price: "$1030",
        stock: "8",
      },



    ];

    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    promesa
      .then((productos) => {
        setArrayIt(productos);
      })
      .catch(() => {
        console.log("No cargó correctamente los datos");
      })
      .finally(() => {
        console.log("Carga finalizada");
      });
  }, []);

  return (
    <>
        {arrayIt.length > 0? <ItemList props = {arrayIt} /> : <h1 className="loading">Cargando...</h1>}
    </>    
    )
};

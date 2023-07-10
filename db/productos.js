import quince from '../images/15cake.jpg'
import flores from '../images/flores.jpg'
import paris from '../images/paris.jpg'
import delfines from '../images/delfines.jpg'

export const productos = [
    {
        id: 1,
        nombre:'Quince Años',
        precio:50,
        imagenUrl: `${quince}`,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore quam explicabo est dignissimos laudantium pariatur blanditiis quos cupiditate",
        categoria : "tortas"
    },
    {
        id: 2,
        nombre:'Flores',
        precio:40,
        imagenUrl: `${flores}`,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore quam explicabo est dignissimos laudantium pariatur blanditiis quos cupiditate",
        categoria : "tortas"
    },
    {
        id: 3,
        nombre:'Ciudades',
        precio:60,
        imagenUrl: `${paris}`,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore quam explicabo est dignissimos laudantium pariatur blanditiis quos cupiditate",
        categoria : "tortas"
    },
    {
        id: 4,
        nombre:'Minimalistas',
        precio:30,
        imagenUrl: `${delfines}`,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore quam explicabo est dignissimos laudantium pariatur blanditiis quos cupiditate",
        categoria : "tortas"
    }
]


/*
  Importamos cada imagen para utilizarla posteriormente
*/

import origenCover from './images/cover-origen.jpg';
import avatarCover from './images/cover-avatar.jpg';
import batmanCover from './images/cover-batman.jpg';
import bastardosCover from './images/cover-bastardos.jpg';
import interstellarCover from './images/cover-interstellar.jpg';
import torinoCover from './images/cover-torino.jpg';
import simiosCover from './images/cover-simios.jpg';

/*
  Creamos una array de peliculas para utilizar su información dentro de nuestra
  aplicación
*/

const movies = [{
  "id": "4fede17c312f912796000034",
  "cover_url": origenCover,
  "description": "Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir. (FILMAFFINITY)",
  "rating": 8,
  "author": "Christopher Nolan",
  "title": "Origen"
}, {
  "id": "4fede33f312f9127960001d6",
  "cover_url": avatarCover,
  "description": null,
  "rating": 7.2,
  "author": "James Cameron",
  "title": "Avatar"
}, {
  "id": "4fede343312f9127960001d7",
  "cover_url": batmanCover,
  "description": null,
  "rating": 8.1,
  "author": "Christopher Nolan",
  "title": "El caballero oscuro"
}, {
  "id": "4fede345312f9127960001d8",
  "cover_url": bastardosCover,
  "description": "A disgraced former fireman takes on a group of terrorists holding the Vice President and others hostage during the seventh game of the NHL Stanley Cup finals.",
  "rating": 7.8,
  "author": "Quentin Tarantino",
  "title": "Malditos bastardos"
}, {
  "id": "4fede347312f9127960001d9",
  "cover_url": interstellarCover,
  "description": "A young ninja turns his back on the orphanage that raised him, leading to a confrontation with a fellow ninja from the clan.",
  "rating": 7.8,
  "author": "Christopher Nolan",
  "title": "Interstellar"
}, {
  "id": "4fede34a312f9127960001da",
  "cover_url": torinoCover,
  "description": "Action star Jean Claude Van Damme plays a fashion designer who must join forces with a C.I.A. agent to combat terrorism.",
  "rating": 8.2,
  "author": "Clint Eastwood",
  "title": "Gran Torino"
}, {
  "id": "4fede34a1231237960001da",
  "cover_url": simiosCover,
  "description": "Precuela del ya mítico largometraje \"El planeta de los simios\". Will Rodman (James Franco) es un joven científico que está investigando con monos para obtener un tratamiento contra el alzheimer, una enfermedad que afecta a su padre (John Lithgow). Uno de esos primates, César, un chimpancé recién nacido al que Will se llevó a casa para protegerlo, experimenta una evolución en su inteligencia verdaderamente sorprendente. En el estudio del simio le ayudará una bella primatóloga llamada Caroline (Freida Pinto). (FILMAFFINITY)",
  "rating": 6.7,
  "author": "Rupert Wyatt",
  "title": "El Origen del Planeta de los Simios"
}];

export default movies;

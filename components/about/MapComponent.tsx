// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// // import L from "leaflet";

// // Fix for default Leaflet marker icons in Next.js
// // const customIcon = new L.Icon({
// //   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
// //   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
// //   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// //   iconSize: [25, 41],
// //   iconAnchor: [12, 41],
// //   popupAnchor: [1, -34],
// //   shadowSize: [41, 41]
// // });

// export default function MapComponent() {
//   // Colombia's center coordinates
//   const colombiaPosition = [4.5709, -74.2973] as [number,number];
  
//   const locations = [
//     { name: "Sede Principal - Montería", position: [8.7528, -75.8853], description: "Sede principal de Gateway I.T" },
//     { name: "Bogotá", position: [4.6097, -74.0817], description: "Proyectos en la capital" },
//     { name: "Medellín", position: [6.2476, -75.5658], description: "Colaboraciones en innovación" },
//     { name: "Barranquilla", position: [10.9685, -74.7813], description: "Proyectos de transformación digital" },
//     { name: "Cali", position: [3.4516, -76.5320], description: "Soluciones empresariales" },
//   ];

//   return (
//     <MapContainer 
//       center={colombiaPosition} 
//       zoom={5} 
//       style={{ height: "100%", width: "100%" }}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
      
//       {/* {locations.map((location, index) => (
//         <Marker 
//           key={index} 
//           position={location.position} 
//           icon={customIcon}
//         >
//           <Popup>
//             <div className="font-semibold">{location.name}</div>
//             <div className="text-sm">{location.description}</div>
//           </Popup>
//         </Marker>
//       ))} */}
//     </MapContainer>
//   );
// }
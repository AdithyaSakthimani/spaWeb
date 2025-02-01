import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapCont.css';
import {Instagram , Facebook,Linkedin , Phone , MapPin, Home} from 'lucide-react';
const MapCont = () => {
  const position = [12.928063311014506, 77.55530281534256];
  
  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -45],
    shadowSize: [41, 41]
  });
  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com', 
      label: 'Instagram',
      color: '#E4405F'  // Instagram brand color
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com', 
      label: 'Facebook',
      color: '#1877F2'  // Facebook brand color
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn',
      color: '#0A66C2'  // LinkedIn brand color
    },
    { 
      icon: Phone, 
      href: 'tel:+123456789', 
      label: 'Phone',
      color: '#25D366'  // Using a bright green similar to WhatsApp
    },

  ];
  return (
    <div className="map-container">
      <div>
        <h1><span className='home-icon'>
        <a href= 'https://www.google.com/maps/place/Mili+Aesthetic+Spa+And+Bridal+Studio/@12.9279326,77.5552599,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e2ec57f08f9:0x4a8e9dcce1c38af6!8m2!3d12.9279326!4d77.5552599!16s%2Fg%2F11t6s9rjx6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D' target="_blank"
                rel="noopener noreferrer">
          <MapPin size={40} className='map-icon'/>
        </a>
</span>Find Me </h1>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="popup-content">
              <h3 className="popup-heading">Milli Aesthetic Spa</h3>
              <p className="popup-text">184, 1st Main Rd, near Appaiah Basket Ball Court, opposite Telephone Exchange, Chennammana Kere, Kathreguppe, Banashankari 3rd Stage </p>
              <p className="popup-text">Banashankari, Bengaluru, Karnataka 560085</p>
              <a
                href="https://www.google.com/maps/place/Mili+Aesthetic+Spa+And+Bridal+Studio/@12.9279326,77.5552599,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e2ec57f08f9:0x4a8e9dcce1c38af6!8m2!3d12.9279326!4d77.5552599!16s%2Fg%2F11t6s9rjx6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="popup-link"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
};

export default MapCont;
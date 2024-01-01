import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pin from "./../assets/tempat.svg";
export default function Lokasi1() {
  return (
    <div className="midlePosition">
      <a
        href="https://www.google.com/maps?q=-3.633806,120.9880231"
        target="_blank"
        rel="noreferrer"
        className="btnLokasi"
      >
        Buka Di Google Maps
        <img src={pin} alt="pin" className="pinSize" />
      </a>
      <MapContainer
        center={[-3.633806, 120.9880231]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "25rem",
          width: "80%",
          marginTop: "2rem",
          border: "solid 2px #000",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-3.633806, 120.988023]}>
          <Popup>Acara Pesta Mempelai Wanita</Popup>
        </Marker>
      </MapContainer>
      <h4 style={{ width: "60%" }}>
        Bertempat di Lapasi-lapasi, lambai. Kolaka Utara
      </h4>
    </div>
  );
}

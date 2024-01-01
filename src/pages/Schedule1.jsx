import myschedule from "./../assets/schedule1.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Schedule1() {
  return (
    <div className="midlePosition">
      <h2>
        AKAD NIKAH & RESEPSI <br />
        DI SULAWESI TENGGARA
      </h2>
      <p style={{ marginTop: 0 }}>
        Dengan memohon Rahmat dan Ridho Allah, kami bermaksud <br />
        menyelenggarakan Resepsi Pernikahan Anak/Kemanakan/Cucu kami, <br />
        yang insya Allah akan dilaksanakan pada :
      </p>
      <div className="scheduleStyle">
        <img src={myschedule} alt="alabopa schedule" />
        <div className="scheduleDetail">
          <h3>Pukul : 10.00 WITA</h3>
          <h3>Bertempat di Lapasi-lapasi, lambai. Kolaka Utara</h3>
          <a
            href="https://www.google.com/maps?q=-3.633806,120.9880231"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.4rem" }}
          >
            Buka Di Google Maps
          </a>
        </div>
      </div>
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
    </div>
  );
}

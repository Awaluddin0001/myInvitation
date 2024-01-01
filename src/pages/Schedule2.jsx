import myschedule from "./../assets/schedule2.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Schedule2() {
  return (
    <div className="midlePosition">
      <h2>
        RESEPSI <br />
        DI SULAWESI SELATAN
      </h2>
      <p style={{ marginTop: 0 }}>
        Dengan memohon Rahmat dan Ridho Allah, kami bermaksud <br />
        menyelenggarakan Resepsi Pernikahan Anak/Kemanakan/Cucu kami, <br />
        yang insya Allah akan dilaksanakan pada :
      </p>
      <div className="scheduleStyle">
        <img src={myschedule} alt="alabopa schedule" />
        <div className="scheduleDetail2">
          <h3>Pukul : 10.00 WITA</h3>
          <h3>
            Bertempat di jln poros Barombong Bontopajja RT02/RW02, kel. Lemban
            parang, Kec. Barombong, Kab. gowa
          </h3>
          <a
            href="https://www.google.com/maps?q=-5.2369368,119.4246789"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.4rem" }}
          >
            Buka Di Google Maps
          </a>
        </div>
      </div>
      <MapContainer
        center={[-5.2369368, 119.4246789]}
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
        <Marker position={[-5.2369368, 119.4246789]}>
          <Popup>Acara Pesta Mempelai Wanita</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

import { useState } from "react";
import { encryptString } from "../module/CryptoName";
import "./EncryptName.css";
export default function EncryptName() {
  const [namaUndangan, setNamaUndangan] = useState("");
  const [linkCreated, setLinkCreate] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const makeUndangan = () => {
    const buat = encryptString(namaUndangan);
    const Link = "https://alabopa.com/weddinginvitation/";
    const fullLink = `${Link}${buat}`;
    setUrlLink(fullLink);
    setLinkCreate(true);
  };

  const handleCopyText = (textToCopy) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setCopiedMessage(`Copied: ${textToCopy}`);
    setLinkCreate(false);
    // Clear the message after a few seconds
    setTimeout(() => {
      setCopiedMessage("");
    }, 1000);
  };
  return (
    <div className="encryptWrapper">
      <h5>Masukkan Nama Undangan</h5>
      <div className="namaInput">
        <input type="text" onChange={(e) => setNamaUndangan(e.target.value)} />
        <div className="btnNamaUndangan" onClick={makeUndangan}>
          Buat Undangan
        </div>
      </div>
      <div
        className={linkCreated ? "mylink show" : "mylink"}
        onClick={() => handleCopyText(urlLink)}
      >
        <h5>{urlLink}</h5>
      </div>
      <div className={`notificationC ${copiedMessage && "show"}`}>
        {copiedMessage}
      </div>
    </div>
  );
}

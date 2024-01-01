import FlowerTop3 from "./svg/FlowerTop3";
import undanganBuka from "./../assets/bukaUndanagn.svg";
import PropTypes from "prop-types";
import but3 from "./../assets/butterfly3.gif";
import "./ModalIntro.css";
export default function ModalIntro({
  name,
  sound,
  summonBut,
  handleSummonF1,
  transText1,
  transFrames,
  openUndangan,
  setOpenUndangan,
  setOnb,
}) {
  const openHandler = () => {
    sound();
    setOpenUndangan(true);
    summonBut();
    handleSummonF1();
    transText1(true);
    transFrames(true);
    setOnb(true);
  };

  return (
    <div className={openUndangan ? "transitionUn close" : "transitionUn"}>
      <div className="modalWrap">
        <FlowerTop3 className="flowerBottom3" />
        <div className="textModal">
          <h3>Kepada Bapak/Ibu/Saudara/i</h3>
          <h1 className="nameUndangan">{name}</h1>
          <h3>
            Tanpa Mengurangi Rasa Hormat. Kami Mengundang Anda Untuk Hadir Di
            Acara Pernikahan Kami.
          </h3>
          <div className="btnOpen" onClick={openHandler}>
            <h2>Buka</h2>
            <img src={undanganBuka} alt="buka undangan" />
          </div>
        </div>
        <img src={but3} alt="kupu kupu alabopa" className="butterfly3top" />
        <img src={but3} alt="kupu kupu alabopa" className="butterfly3bottom" />
      </div>
    </div>
  );
}

ModalIntro.propTypes = {
  name: PropTypes.string,
  sound: PropTypes.bool,
  summonBut: PropTypes.bool,
  handleSummonF1: PropTypes.bool,
  transText1: PropTypes.bool,
  transFrames: PropTypes.bool,
  openUndangan: PropTypes.bool,
  setOpenUndangan: PropTypes.bool,
  setOnb: PropTypes.bool,
};

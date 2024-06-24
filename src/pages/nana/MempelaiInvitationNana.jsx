import styles from "./../../css/module/Yudha.module.css";
import { FaInstagramSquare } from "react-icons/fa";
export default function MempelaiInvitationNana() {
  return (
    <section className={styles.mempelaiSection}>
      <div className={styles.mempelaiImage}>
        <div className={styles.introOverlayW}>
          <h2 className={styles.initialName}>N | Y</h2>
          <p className={styles.mempelaiDesc} style={{ textAlign: "center" }}>
            QS Ar-rum 21
          </p>
          <p className={styles.mempelaiDesc}>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”
          </p>
          <div className={styles.imageTagName}>
            <div className={styles.imageWrapperNana}></div>
            <div className={styles.tagName}>
              <p className={styles.theNameNana}>
                Marcha Adhana Kadang, S.Ak Dg. Bunga
              </p>
              <p className={styles.theNameNanaParents}>
                (Putra dari Bapak Dominggus Kadang & Ibu Hasmawati)
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <FaInstagramSquare className={styles.igIcon} />
                <p>@marchaadhana04</p>
              </div>
            </div>
          </div>
          <h2
            style={{
              fontSize: "3.2rem",
              fontFamily: "Playwrite PL",
              marginBottom: "16px",
            }}
          >
            &
          </h2>
          <div className={styles.imageTagName}>
            <div className={styles.imageWrapperYudha}></div>
            <div className={styles.tagName}>
              <p className={styles.theNameYudha}>
                Yudha Ramdhani, S.E Dg. Rapi
              </p>
              <p className={styles.theNameYudhaParents}>
                (Putra dari Bapak Dominggus Kadang & Ibu Hasmawati)
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <FaInstagramSquare className={styles.igIcon} />
                <p>@yudhard7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import DefaultContainer from "../phoneContainer/DefaultContainer";
import IntroSectionNana from "./IntroSectionNana";
import MempelaiInvitationNana from "./MempelaiInvitationNana";
import EventDateNana from "./EventDateNana";
import GalleriNana from "./GalleriNana";
import WeddingGiftNana from "./WeddingGiftNana";
import UcapanNana from "./UcapanNana";
export default function InvitationNana() {
  return (
    <DefaultContainer>
      <IntroSectionNana />
      <MempelaiInvitationNana />
      <EventDateNana />
      <GalleriNana />
      <WeddingGiftNana />
      <UcapanNana />
    </DefaultContainer>
  );
}

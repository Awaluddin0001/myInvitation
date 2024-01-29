export default function NavbarArdi() {
  const scrollInto = (e, nameId) => {
    const element = e.view.document.getElementById(nameId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbarArdi">
      <div className="navbarWrapperArdi">
        <div
          className="navArdiIcons"
          onClick={(e) => scrollInto(e, "homeArdi")}
        >
          <svg
            width="98"
            height="86"
            viewBox="0 0 98 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79.625 27.401V3.07143H64.3125V14.2917L49 0L0 46.0714H12.25V86H39.8125V55.2857H58.1875V86H85.75V46.0714H98L79.625 27.401Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="navArdiIcons"
          onClick={(e) => scrollInto(e, "loveArdi")}
        >
          <svg
            width="79"
            height="69"
            viewBox="0 0 79 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.2314 8.73666C37.1042 0.883225 45.9341 -1.41011 54.0567 0.796606C62.8246 3.17656 70.5337 10.6876 73.0937 21.1479C73.2261 21.6841 73.3419 22.2203 73.437 22.7565C69.7412 21.4441 65.7218 21.3429 61.9644 22.4678C56.6416 18.5411 50.0492 17.8811 44.1888 20.0342C36.8478 22.7359 31.1156 29.587 29.788 38.2077C28.0923 49.2454 34.8337 59.1612 44.3666 67.5921L45.9713 68.978C44.6768 69.0687 43.3616 68.8666 42.1044 68.5985C41.4581 68.4607 40.8155 68.3067 40.1771 68.1365L37.9562 67.5178C18.212 61.9784 4.99403 53.3123 1.20152 40.3608C-1.82587 30.0243 1.08572 19.6754 7.4879 13.2408C13.4186 7.28064 22.2113 4.86357 31.2314 8.73666ZM37.9644 39.4575C39.7346 27.9413 53.089 22.2657 59.9461 32.1485C60.0118 32.2403 60.1112 32.3027 60.2226 32.322C60.3341 32.3413 60.4487 32.316 60.5416 32.2516C70.3724 25.3056 80.9724 35.1925 78.6853 46.618C77.3618 53.2422 71.1995 58.7446 60.1984 63.1168L58.3993 63.818L57.3116 64.2634C56.3728 64.6305 55.3802 64.9234 54.4827 64.7667C53.5894 64.6099 52.7581 63.9912 52.0013 63.3313L50.7192 62.1763C41.1531 53.9641 36.9015 46.3911 37.9644 39.4575Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="navArdiIcons"
          onClick={(e) => scrollInto(e, "dateArdi")}
        >
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.0833 0C57.5645 0 74.1667 16.6022 74.1667 37.0833C74.1667 57.5645 57.5645 74.1667 37.0833 74.1667C16.6022 74.1667 0 57.5645 0 37.0833C0 16.6022 16.6022 0 37.0833 0ZM37.0833 14.8333C36.0998 14.8333 35.1566 15.224 34.4611 15.9195C33.7657 16.6149 33.375 17.5582 33.375 18.5417V37.0833C33.3752 38.0668 33.766 39.0098 34.4615 39.7051L45.5865 50.8301C46.2859 51.5056 47.2227 51.8794 48.195 51.871C49.1673 51.8625 50.0974 51.4725 50.785 50.785C51.4725 50.0974 51.8625 49.1673 51.871 48.195C51.8794 47.2227 51.5056 46.2859 50.8301 45.5865L40.7917 35.5481V18.5417C40.7917 17.5582 40.401 16.6149 39.7055 15.9195C39.0101 15.224 38.0668 14.8333 37.0833 14.8333Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="navArdiIcons"
          onClick={(e) => scrollInto(e, "galeryArdi")}
        >
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.44444 67C5.39722 67 3.6453 66.2717 2.18867 64.815C0.732037 63.3584 0.00248148 61.6053 0 59.5555V7.44444C0 5.39722 0.729556 3.6453 2.18867 2.18867C3.64778 0.732037 5.3997 0.00248148 7.44444 0H59.5555C61.6028 0 63.3559 0.729556 64.815 2.18867C66.2742 3.64778 67.0025 5.3997 67 7.44444V59.5555C67 61.6028 66.2717 63.3559 64.815 64.815C63.3584 66.2742 61.6053 67.0025 59.5555 67H7.44444ZM11.1667 52.1111H55.8333L41.875 33.5L30.7083 48.3889L22.3333 37.2222L11.1667 52.1111Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="navArdiIcons"
          onClick={(e) => scrollInto(e, "komentarArdi")}
        >
          <svg
            width="76"
            height="72"
            viewBox="0 0 76 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7778 44.2701H61.2222V40.0539H14.7778V44.2701ZM14.7778 31.6215H61.2222V27.4053H14.7778V31.6215ZM14.7778 18.9729H61.2222V14.7567H14.7778V18.9729ZM6.81889 59.0268C4.87667 59.0268 3.25533 58.3775 1.95489 57.0789C0.65163 55.7775 0 54.1571 0 52.2176V6.80916C0 4.86971 0.65163 3.25069 1.95489 1.9521C3.25533 0.6507 4.87667 0 6.81889 0H69.1811C71.1233 0 72.7447 0.6507 74.0451 1.9521C75.3484 3.25069 76 4.86971 76 6.80916V72L63.0082 59.0268H6.81889Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
const Komentar = (props) => (
  <svg
    width={76}
    height={70}
    viewBox="0 0 76 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7778 44.2701H61.2222V40.0539H14.7778V44.2701ZM14.7778 31.6215H61.2222V27.4053H14.7778V31.6215ZM14.7778 18.9729H61.2222V14.7567H14.7778V18.9729ZM6.81889 59.0268C4.87667 59.0268 3.25533 58.3775 1.95489 57.0789C0.65163 55.7775 0 54.1571 0 52.2176V6.80916C0 4.86971 0.65163 3.25069 1.95489 1.9521C3.25533 0.6507 4.87667 0 6.81889 0H69.1811C71.1233 0 72.7447 0.6507 74.0451 1.9521C75.3484 3.25069 76 4.86971 76 6.80916V72L63.0082 59.0268H6.81889Z"
      fill={props.act ? "#f27880" : "black"}
    />
  </svg>
);
export default Komentar;
Komentar.propTypes = {
  act: PropTypes.bool,
};

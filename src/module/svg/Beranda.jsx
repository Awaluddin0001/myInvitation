import PropTypes from "prop-types";
const Beranda = (props) => (
  <svg
    width={98}
    height={86}
    viewBox="0 0 98 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M79.625 27.401V3.07143H64.3125V14.2917L49 0L0 46.0714H12.25V86H39.8125V55.2857H58.1875V86H85.75V46.0714H98L79.625 27.401Z"
      fill={props.act ? "#f27880" : "black"}
    />
  </svg>
);
export default Beranda;

Beranda.propTypes = {
  act: PropTypes.bool,
};

import PropTypes from "prop-types";
const Tempat = (props) => (
  <svg
    width={43.2}
    height={45.3}
    viewBox="0 0 48 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 0C10.7314 0 0 10.7985 0 24.15C0 42.2625 24 69 24 69C24 69 48 42.2625 48 24.15C48 10.7985 37.2686 0 24 0ZM24 32.775C21.7267 32.775 19.5465 31.8663 17.9391 30.2488C16.3316 28.6313 15.4286 26.4375 15.4286 24.15C15.4286 21.8625 16.3316 19.6687 17.9391 18.0512C19.5465 16.4337 21.7267 15.525 24 15.525C26.2733 15.525 28.4535 16.4337 30.0609 18.0512C31.6684 19.6687 32.5714 21.8625 32.5714 24.15C32.5714 26.4375 31.6684 28.6313 30.0609 30.2488C28.4535 31.8663 26.2733 32.775 24 32.775Z"
      fill={props.act ? "#f27880" : "black"}
    />
  </svg>
);
export default Tempat;
Tempat.propTypes = {
  act: PropTypes.bool,
};

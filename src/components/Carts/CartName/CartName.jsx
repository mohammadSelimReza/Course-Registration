import PropTypes from "prop-types";
const CartName = ({ sn, name }) => {
  const { title } = name;

  return (
    <div>
      <p>
        {sn} {title}
      </p>
    </div>
  );
};
CartName.propTypes = {
  name: PropTypes.any,
  sn: PropTypes.number,
};
export default CartName;

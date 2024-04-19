import CartName from "./CartName/CartName";
import PropTypes from "prop-types";
const Carts = ({ price, credit, names, overCredit, error }) => {
  let sn = 1;
  return (
    <div>
      <div className="card rounded-xl bg-base-100 w-72 p-4 bg-base-100">
        <h3 className="text-lg font-bold text-sky-800">
          Credit Hour Remaining {20 - credit} hr
        </h3>
        <hr />
        <h3 className="text-lg font-bold">Course Name</h3>
        <p>
          {names.map((name) => (
            <CartName key={name.id} name={name} sn={sn++}></CartName>
          ))}
        </p>
        <hr />
        <p>Total Credit Hour : {credit}</p>
        <p>{overCredit}</p>
        <p>{error}</p>
        <hr />
        <h6>Total Price : {price} USD</h6>
      </div>
    </div>
  );
};
Carts.propTypes = {
  price: PropTypes.number.isRequired,
  credit: PropTypes.number.isRequired,
  overCredit: PropTypes.number.isRequired,
  names: PropTypes.array,
  error: PropTypes.string,
};
export default Carts;

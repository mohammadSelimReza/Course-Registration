import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
const CoursesData = ({ course, handleAddItem }) => {
  const { title, cover, description, price, course_credit } = course;
  return (
    <div>
      <div className="flex flex-col items-center w-72 pt-4 rounded-xl bg-base-100 shadow-xl mb-3">
        <figure>
          <img className="object-fill w-64 h-36" src={cover} alt={title} />
        </figure>
        <div className="card-body px-4">
          <h2 className="card-title text-xl text-medium h-14">{title}</h2>
          <p className="h-20">{description}</p>
          <div className="flex justify-evenly items-center">
            <FiDollarSign />
            <p>Price : {price} </p>
            <FiBookOpen />
            <p> Credit: {course_credit}hr</p>
          </div>

          <div className="card-actions justify-end block">
            <button
              onClick={() => handleAddItem(course)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoursesData.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default CoursesData;

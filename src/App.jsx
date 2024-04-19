import { useState } from "react";
import "./App.css";
import Carts from "./components/Carts/Carts";
import CoursesData from "./components/courses/CoursesData";
import { useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [overCredit, setOverCredit] = useState();
  const [names, setNames] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  // function
  const handleAddItem = (course) => {
    // clear error;
    setError();
    setOverCredit();
    // credit calculate :
    const newCredit = course.course_credit;
    const totalCredit = credit + newCredit;
    const isCourseAlreadyAdded = names.some((name) => name.id === course.id);
    if (totalCredit < 21 && !isCourseAlreadyAdded) {
      setCredit(totalCredit);
      // setName
      setCredit(totalCredit);
      setNames([...names, course]);

      // price calculate
      const newPrice = course.price;
      const totalPrice = price + newPrice;
      setPrice(totalPrice);
    } else if (isCourseAlreadyAdded)
      setError(<p className="text-red-500">Already Added</p>);
    else if (totalCredit > 20) {
      setOverCredit(
        <p className="text-red-500">You can not take more than 20 credits</p>
      );
    }
  };
  // return
  return (
    <>
      <header>
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Course Registration
        </h1>
      </header>
      <main className="md:flex md:flex-row-reverse px-20 my-10">
        <div className="md:w-1/4">
          <Carts
            price={price}
            credit={credit}
            names={names}
            overCredit={overCredit}
            error={error}
          ></Carts>
        </div>
        <div className="md:w-3/4 md:grid md:grid-cols-3 gap-4 ">
          {courses.map((course) => (
            <CoursesData
              key={course.id}
              course={course}
              handleAddItem={handleAddItem}
            ></CoursesData>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

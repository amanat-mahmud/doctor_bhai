import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  const {user} = useContext(AuthContext)
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary font-bold text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-primary font-bold">Price : $ {price}</p>

        <div className="card-actions justify-center">
          <label
            disabled={!user?.email || slots.length === 0 }
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => {
              setTreatment(option);
            }}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

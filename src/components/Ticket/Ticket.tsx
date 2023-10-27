import { useState } from "react";

export const Ticket = (props) => {
  const [packoptions, setPackoptions] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  function handleTicketForm(e) {
    e.preventDefault();
    props.toggle();
  }

  // const adult_tix_quantity = document.querySelectorAll(
  //   ".adult_quantity_tickets"
  // );

  // for (let i = 1; i <= adult_tix_quantity.length; i++) {
  //   let ele = parseInt(adult_tix_quantity[i]);
  //   let ticket_price = 20;
  //   let total_price = 0;

  //   if (ele === i) {
  //     total_price = i * ticket_price;
  //     return total_price;
  //   }
  // }

  return (
    <div className="popup fixed z-1 left-0 top-0 w-full h-full flex justify-center">
      <div className="popup-inner absolute bg-white mx-0 top-52 p-20 max-w-full rounded-sm shadow-lg">
        <button className="float-right" onClick={props.toggle}>
          X
        </button>
        <form onSubmit={handleTicketForm}>
          <label className="block mb-3">
            Selected
            <select
              className="ml-2 border-solid border-2 border-gray p-1 w-14 pr-2 text-gray-300"
              name="packoptions"
              value={packoptions}
              onChange={(e) => setPackoptions(e.target.value)}
            >
              <option value="">Family Pack</option>
              <option value="2">Corporate Pack</option>
              <option value="3">Couple Pack</option>
            </select>
          </label>
          <label className="block mb-3">
            Adults
            <select
              className="ml-2 border-solid border-2 border-gray p-1 w-14 pr-2 text-gray-300"
              name="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            >
              <option className="adult_quantity_tickets" value="1">
                1
              </option>
              <option className="adult_quantity_tickets" value="2">
                2
              </option>
              <option className="adult_quantity_tickets" value="3">
                3
              </option>
              <option className="adult_quantity_tickets" value="4">
                4
              </option>
              <option className="adult_quantity_tickets" value="5">
                5
              </option>
              <option className="adult_quantity_tickets" value="6">
                6
              </option>
            </select>
          </label>
          <label className="block mb-3">
            Children
            <select
              className="ml-2 border-solid border-2 border-gray p-1 w-14 pr-2 text-gray-300"
              name="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              <option className="child_quantity_tickets" value="1">
                1
              </option>
              <option className="child_quantity_tickets" value="2">
                2
              </option>
              <option className="child_quantity_tickets" value="3">
                3
              </option>
              <option className="child_quantity_tickets" value="4">
                4
              </option>
              <option className="child_quantity_tickets" value="5">
                5
              </option>
              <option className="child_quantity_tickets" value="6">
                6
              </option>
            </select>
          </label>
          <h2>Have a promo code? Enter down below!</h2>
          <input type="text" className="border-solid border-2 border-gray" />
          <br />
          <button
            type="submit"
            className="bg-yellow-500 p-3 rounded-md font-light mt-3"
          >
            Apply Code
          </button>
          <br />

          <h3> Total: $ </h3>
          <p id="totalPrice"></p>
          <button
            type="submit"
            className="bg-yellow-500 p-3 rounded-md font-light mt-3 btn1"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

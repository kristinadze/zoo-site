import { useEffect, useState } from "react";

interface TicketProps {
  toggle: () => void;
}

export const Ticket = (props: TicketProps) => {
  const unitTicketPricePerPackType = {
    familyPack: {
      price_for_adults: 20,
      price_for_children: 5,
    },
    corporatePack: {
      price_for_adults: 30,
      price_for_children: 15,
    },
    couplePack: {
      price_for_adults: 10,
      price_for_children: 2,
    },
  };

  // unitTicketPrice.corporatePack.price_for_children

  const [packoptions, setPackOptions] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleTicketForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.toggle();
  }

  useEffect(() => {
    setTotalPrice(calcPrice());
  }, [adults, children, packoptions]);

  function calcPrice(): number {
    let pack = null;

    if (packoptions == "familyPack")
      pack = unitTicketPricePerPackType.familyPack;
    else if (packoptions == "corporatePack")
      pack = unitTicketPricePerPackType.corporatePack;
    else if (packoptions == "couplePack")
      pack = unitTicketPricePerPackType.couplePack;

    if (pack == undefined) return 0;
    //throw new Error("Invalid pack selected. Cannot calculate price");

    const totalPrice =
      pack?.price_for_adults * adults + pack?.price_for_children * children;

    return totalPrice;
  }

  // for (let i = 1; i <= adult_tix_quantity.length; i++) {
  //   let ele = parseInt(adult_tix_quantity[i]);
  //   let ticket_price = 20;
  //   let total_price = 0;

  //   if (ele === i) {
  //     total_price = i * ticket_price;
  //     return total_price;
  //   }
  // }

  // 1. Declare all vars
  // 2. Func that takes in quantity and multiplies with appropriate price

  // what information do we need?
  // ticket type (pack)
  // number of adults
  // number of children
  // adults_quantity * price of ticket for pack X for ADULTS + children_quantity * price of ticket for pack X for children

  return (
    <div className="popup fixed z-1 left-0 top-0 w-full h-full flex justify-center">
      <div className="popup-inner absolute bg-white mx-0 top-52 p-20 max-w-full rounded-sm shadow-lg">
        <button className="float-right" onClick={props.toggle}>
          X
        </button>
        <form onSubmit={(e) => handleTicketForm(e)}>
          <label className="block mb-3">
            Selected
            <select
              className="ml-2 border-solid border-2 border-gray p-1 w-2/3 pr-2 text-gray-300"
              name="packoptions"
              value={packoptions}
              onChange={(e) => setPackOptions(e.target.value)}
            >
              <option value="familyPack">Family Pack</option>
              <option value="corporatePack">Corporate Pack</option>
              <option value="couplePack">Couple Pack</option>
            </select>
          </label>
          <label className="block mb-3">
            Adults
            <select
              className="ml-2 border-solid border-2 border-gray p-1 w-14 pr-2 text-gray-300"
              name="adults"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
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
              onChange={(e) => setChildren(Number(e.target.value))}
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

          <h3> Total: {totalPrice}$ </h3>
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

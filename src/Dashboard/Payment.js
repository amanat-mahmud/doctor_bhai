import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51M6PqYC7ChjMGzPDxhKymmYLy7a3ETzYI4sYS9zBr3ZvTQGQnjrrkdoj8iz0vhTdzMtWxPlfAFZA9WR2zrHnNAWR00DtBHQuL6"
  );
  console.log(stripePromise);
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3 className="text-3xl">Payment</h3>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={data}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

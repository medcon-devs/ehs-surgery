"use client";

import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

interface CheckoutPageProps {
  amount: number;
  clientSecret: string;
  onPaymentSuccess: (pi: any) => void;
}

const CheckoutPage = ({
  amount,
  clientSecret,
  onPaymentSuccess,
}: CheckoutPageProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      console.log("Payment Success:", paymentIntent);
      onPaymentSuccess(paymentIntent);
    }

    setLoading(false);
  };

  if (!stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        Loading payment form...
      </div>
    );
  }

  return (
  <div className="w-full px-4">
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md max-w-md mx-auto"
    >
      <PaymentElement />

      {errorMessage && (
        <div className="text-red-600 text-sm mt-3">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-black text-white mt-6
                   h-[68px] text-xl font-bold rounded-lg
                   hover:bg-gray-900 active:scale-[0.98] transition
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {!loading ? `Pay AED ${amount}` : "Processing..."}
      </button>
      <p className="text-xs text-gray-500 text-center mt-3">
        🔒 Secure payment powered by Stripe
      </p>
    </form>
  </div>
);

};

export default CheckoutPage;

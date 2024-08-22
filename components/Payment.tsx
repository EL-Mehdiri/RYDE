import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Alert } from "react-native";
import { fetchAPI } from "@/lib/fetch";
import { PaymentProps } from "@/types/type";

const Payment = ({ fullName, email, amount, rideTime }: PaymentProps) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);

  const confirmHandler = async (paymentMethod, _, intentCreationCallback) => {
    const { paymentIntent, customer } = fetchAPI("/(api)/(stripe)/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName || email.split("@")[0],
        email,
        amount,
        paymentMethod: paymentMethod.id,
      }),
    });

    if (clientSecret) {
      intentCreationCallback({ clientSecret });
    } else {
      intentCreationCallback({ error });
    }
  };
  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      intentConfiguration: {
        mode: {
          amount: 1099,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      // handle error
    }
  };

  const openPatmentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code ${error.code}`, error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={openPatmentSheet}
      />
    </>
  );
};

export default Payment;

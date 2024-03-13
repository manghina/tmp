import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useCallback, useEffect } from "react";
import { apiBaseUrl } from "@app/config";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { Linking } from "react-native";

export const useRequestConfirmPaymentScreen = () => {
  const { initPaymentSheet, presentPaymentSheet, handleURLCallback } =
    useStripe();
  const cookie = useSelector(selectors.getCookie);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${apiBaseUrl()}/payment-intents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${cookie?.name}=${cookie?.value}`,
      },
      body: JSON.stringify({
        professionalOfferId: "65e736cb55872f86077fe6ad",
        selectedSlotIndex: "65e736cb55872f86077fe6dd",
      }),
    });

    console.log(response);

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = useCallback(async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Sweep IT",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      returnURL: "sweepit://stripe-redirect",
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });

    if (error) {
      console.log("Error initializing PaymentSheet", error);
    } else {
      console.log("PaymentSheet initialized");
    }
  }, [initPaymentSheet]);

  const didTapCheckoutButton = useCallback(async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log("ERRORE");
      console.log(error);
      if (error.code === PaymentSheetError.Canceled) {
        // Customer canceled - you should probably do nothing.
      } else {
        // PaymentSheet encountered an unrecoverable error. You can display the error to the user, log it, etc.
      }
    } else {
      // Setup completed - show a confirmation screen.
    }
  }, [presentPaymentSheet]);

  const handleDeepLink = useCallback(
    async (url: string | null) => {
      console.log("handleDeepLink", url);
      if (url) {
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
          // This was a Stripe URL - you can return or add extra handling here as you see fit
        } else {
          // This was NOT a Stripe URL – handle as you normally would
        }
      }
    },
    [handleURLCallback],
  );

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl).then();
    };

    getUrlAsync().then();

    const deepLinkListener = Linking.addEventListener(
      "url",
      (event: { url: string }) => {
        handleDeepLink(event.url).then();
      },
    );

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);

  useEffect(() => {
    initializePaymentSheet().then();
  }, [initializePaymentSheet]);

  return { didTapCheckoutButton };
};

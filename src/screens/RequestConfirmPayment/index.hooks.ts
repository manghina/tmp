import {
  PaymentSheetError,
  usePaymentSheet,
  useStripe,
} from "@stripe/stripe-react-native";
import { useCallback, useEffect } from "react";
import { Linking } from "react-native";

export const useRequestConfirmPaymentScreen = () => {
  const { handleURLCallback, initPaymentSheet, presentPaymentSheet } =
    useStripe();

  const handleDeepLink = useCallback(
    async (url: string | null) => {
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

  const initializePaymentSheet = useCallback(async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Sweep",
      returnURL: "your-app://stripe-redirect",
      intentConfiguration: {
        mode: {
          currencyCode: "EUR",
          amount: 1000,
        },
        confirmHandler: (
          paymentMethod,
          shouldSavePaymentMethod,
          intentCreationCallback,
        ) => {},
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

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      await handleDeepLink(initialUrl);
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
  }, []);

  return { didTapCheckoutButton };
};

import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { apiBaseUrl } from "@app/config";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Linking } from "react-native";

export const useCheckoutButton = (
  professionalOfferId: string,
  slotId: string,
) => {
  const dispatch = useDispatch();

  const { initPaymentSheet, presentPaymentSheet, handleURLCallback } =
    useStripe();

  const cookie = useSelector(selectors.getCookie);

  const [isLoading, setIsLoading] = useState(false);

  const isReady = useMemo(
    () => professionalOfferId && slotId,
    [professionalOfferId, slotId],
  );

  const fetchPaymentSheetParams = useCallback(async () => {
    const response = await fetch(`${apiBaseUrl()}/payment-intents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${cookie?.name}=${cookie?.value}`,
      },
      body: JSON.stringify({
        professionalOfferId,
        selectedSlotIndex: slotId,
      }),
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  }, [apiBaseUrl, cookie, professionalOfferId, slotId]);

  const initializePaymentSheet = useCallback(async () => {
    try {
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
        dispatch(
          actions.setFeedback({
            type: "error",
            message: "Errore durante l'inizializzazione del pagamento",
          }),
        );
        console.log("Error initializing PaymentSheet", error);
      } else {
        console.log("PaymentSheet initialized");
      }
    } catch (e) {
      dispatch(
        actions.setFeedback({
          type: "error",
          message: "Errore durante l'inizializzazione del pagamento",
        }),
      );
    }
  }, [initPaymentSheet]);

  const onPress = useCallback(async () => {
    setIsLoading(true);

    await initializePaymentSheet();

    setIsLoading(false);

    const { error } = await presentPaymentSheet();

    if (error) {
      console.log("ERRORE");
      console.log(error);

      if (error.code === PaymentSheetError.Canceled) {
        // Customer canceled - you should probably do nothing.
      } else {
        dispatch(
          actions.setFeedback({
            type: "error",
            message:
              "Si è verificato un errore durante il pagamento, verifica i dati e riprova.",
          }),
        );
      }
    } else {
      dispatch(
        actions.setFeedback({
          type: "success",
          message: "Pagamento completato con successo",
        }),
      );
    }
  }, [dispatch, presentPaymentSheet]);

  // TODO: capire come e dove gestire il deep link
  // Qui dice che serve solo per iOS
  // https://docs.stripe.com/payments/accept-a-payment?platform=react-native&mobile-ui=payment-sheet&ui=payment-sheet#react-native-set-up-return-url
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

  return { isReady, isLoading, onPress };
};

import React, { memo } from "react";
import { useRequestProfessionalAcceptanceForm } from "./index.hooks";
import { styles } from "./styles";
import { Button, Text, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { FormTimePicker } from "@app/components/_form/FormTimePicker";
import { FormTextField } from "@app/components/_form/FormTextField";

type RequestProfessionalAcceptanceFormProps = {};

const formatPrice = (price: string | number): string =>
  parseFloat(`${price}`).toFixed(2).replace(".", ",");

export const RequestProfessionalAcceptanceForm = memo(
  ({}: RequestProfessionalAcceptanceFormProps) => {
    const { formData, slots, completedSlots, onConfirmButtonPressed } =
      useRequestProfessionalAcceptanceForm();

    return (
      <View style={styles.acceptedRequestContainer}>
        <View>
          <Text style={styles.acceptedRequestTitle}>Ottimo!</Text>
          <Text style={styles.acceptedRequestDescription}>
            Può proporre fino a 3 orari per la visita del paziente.
          </Text>
        </View>
        <FormProvider {...formData}>
          {slots.map((slot, index) => (
            <View key={index} style={styles.slotContainer}>
              <View style={styles.slotCountIndicator}>
                <Text style={styles.slotCountText}>
                  Disponibilità {index + 1} di 3
                </Text>
              </View>
              <View style={styles.inputsContainer}>
                <View style={styles.inputsRow}>
                  <View style={styles.inputFieldContainer}>
                    <FormDatePicker name={`slots.${index}.date`} label="Data" />
                  </View>
                  <View style={styles.inputFieldContainer}>
                    <FormTimePicker name={`slots.${index}.time`} label="Ora" />
                  </View>
                </View>
                <View style={styles.inputsRow}>
                  <View style={styles.inputFieldContainer}>
                    <FormTextField
                      name={`slots.${index}.fee`}
                      label="Onorario"
                      keyboardType="numbers-and-punctuation"
                      trailingAccessory={
                        <View style={styles.euroSymbolAccessoryContainer}>
                          <Text style={styles.euroSymbolAccessoryText}>€</Text>
                        </View>
                      }
                    />
                  </View>
                  <View style={styles.inputFieldContainer}>
                    <Text>TODO: Flags</Text>
                  </View>
                </View>
              </View>
              <View style={styles.priceRecapContainer}>
                <Text style={styles.priceRecap}>Totale al cliente:</Text>
                {Boolean(slot.fee) ? (
                  <>
                    <Text style={styles.priceRecap}>
                      {formatPrice(`${slot.fee!}`.replace(",", "."))}+20% =
                    </Text>
                    <Text style={styles.priceTotal}>
                      {formatPrice(
                        parseFloat(`${slot.fee!}`.replace(",", ".")) * 1.2,
                      )}
                      €
                    </Text>
                  </>
                ) : (
                  <Text style={styles.priceRecap}>TBD</Text>
                )}
              </View>
            </View>
          ))}
          <View style={styles.actionsContainer}>
            <Text style={styles.actionsDescription}>Azioni disponibili</Text>
            <Button
              disabled={completedSlots.length === 0}
              onPress={onConfirmButtonPressed}
            >
              <Text style={[styles.actionLabel]}>
                Conferma proposte
                {completedSlots.length > 0 && ` (${completedSlots.length})`}
              </Text>
            </Button>
            <Button style={styles.textButton}>
              <Text style={[styles.actionLabel, styles.danger]}>
                Rifiuta prestazione
              </Text>
            </Button>
          </View>
        </FormProvider>
      </View>
    );
  },
);

RequestProfessionalAcceptanceForm.displayName =
  "RequestProfessionalAcceptanceForm";

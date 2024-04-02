import * as yup from "yup";
import moment from "moment";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { YupShapeByInterface } from "@app/utils/yup";

enum ProfessionalOfferSlotFlag {
  OUTSIDE_WORKING_HOURS = "OUTSIDE_WORKING_HOURS",
  NIGHT_TIME = "NIGHT_TIME",
}

type RequestProfessionalAcceptanceFormData = {
  slots: Array<{
    date?: Date;
    time?: Date;
    fee?: number;
    flags?: Array<ProfessionalOfferSlotFlag>;
  }>;
};

const schema = yup
  .object()
  .shape<YupShapeByInterface<RequestProfessionalAcceptanceFormData>>({
    slots: yup
      .array()
      .of(
        yup.object().shape({
          // Validate date as string in the form "DD-MM-YYYY"
          date: yup.date().optional().nullable(),
          time: yup.date().optional().nullable(),
          // Must be a number in the form xx.xx (e.g. 12.50) or xx,xx (e.g. 12,50) or xx (e.g. 12)
          // And then it must be parsed as a number and converted to whole cents
          fee: yup
            .mixed()
            .test(
              "is-valid-fee",
              "L'onorario deve essere un numero valido",
              (value) => {
                if (
                  value === null ||
                  value === undefined ||
                  !["number", "string"].includes(typeof value)
                ) {
                  return false;
                }

                const feeRegex = /^\d+([,.]\d{1,2})?$/;
                const matchesRegex = feeRegex.test(`${value}`);

                if (!matchesRegex) return false;

                const fee = parseFloat(`${value}`.replace(",", "."));
                const feeInCents = fee * 100;

                return Number.isInteger(feeInCents);
              },
            ),
          flags: yup
            .array()
            .of(yup.string().oneOf(Object.values(ProfessionalOfferSlotFlag)))
            .optional()
            .nullable(),
        }),
      )
      .required(),
  });

export const useRequestProfessionalAcceptanceForm = () => {
  const formData = useForm<RequestProfessionalAcceptanceFormData>({
    defaultValues: {
      slots: [
        { date: undefined, time: undefined, fee: 0, flags: [] },
        { date: undefined, time: undefined, fee: 0, flags: [] },
        { date: undefined, time: undefined, fee: 0, flags: [] },
      ],
    },
    // @ts-ignore
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = formData;

  const submitDisabled = (isSubmitted && !isValid) || !isDirty;

  const slots = useWatch({ control, name: "slots" });

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
      }),
    [handleSubmit],
  );

  const completedSlots = useMemo(
    () => slots.filter((slot) => slot.date && slot.time && slot.fee),
    [slots],
  );

  useEffect(() => {
    setTimeout(() => {
      // triggerSubmit().then();
    }, 1000);
  }, []);

  return { formData, slots, completedSlots, submitDisabled, triggerSubmit };
};

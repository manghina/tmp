import * as yup from "yup";
import moment from "moment";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useMemo } from "react";
import { YupShapeByInterface } from "@app/utils/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

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
            )
            .transform((value) => {
              const fee = parseFloat(`${value}`.replace(",", "."));
              return fee * 100;
            }),
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
  const dispatch = useDispatch();

  const currentProfessionalOffer = useSelector(
    selectors.getCurrentProfessionalOffer,
  );

  const formData = useForm<RequestProfessionalAcceptanceFormData>({
    defaultValues: {
      slots: [
        { date: undefined, time: undefined, fee: undefined, flags: [] },
        { date: undefined, time: undefined, fee: undefined, flags: [] },
        { date: undefined, time: undefined, fee: undefined, flags: [] },
      ],
    },
    // @ts-ignore
    resolver: yupResolver(schema),
  });

  const { control } = formData;

  const slots = useWatch({ control, name: "slots" });

  const completedSlots = useMemo(
    () => slots.filter((slot) => slot.date && slot.time && slot.fee),
    [slots],
  );

  const onConfirmButtonPressed = useCallback(() => {
    if (!currentProfessionalOffer) {
      return;
    }

    const payloadData = completedSlots.map((slot) => {
      const dayString = moment(slot.date).format("DD/MM/YYYY");
      const timeString = moment(slot.time).format("HH:mm");

      const startDate = moment(
        `${dayString} ${timeString}`,
        "DD/MM/YYYY HH:mm",
      );
      const endDate = startDate.clone().add(1, "hour");

      return {
        price: slot.fee!,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
      };
    });

    dispatch(
      actions.patchProfessionalsMeProfessionalOffersByProfessionalOfferId.request(
        {
          professionalOfferId: currentProfessionalOffer._id,
          slots: payloadData,
        },
      ),
    );
  }, [dispatch, completedSlots, currentProfessionalOffer]);

  return { formData, slots, completedSlots, onConfirmButtonPressed };
};

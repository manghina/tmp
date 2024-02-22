import { useForm } from "react-hook-form";
import { Colors } from "react-native-ui-lib";

export const useFormSlotSelector = () => {
  const { setValue, watch } = useForm();
  const selectedAvailabilityIndex = watch("selectedAvailability");

  const formatDay = (date: Date) => {
    const days = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
    return days[date.getDay()];
  };

  /*const getTextColor = (index: number) => {
    return index === selectedAvailabilityIndex
      ? Colors.cardGray
      : Colors.defaultColor;
  };*/

  const isToday = (dateTime: Date) => {
    const today = new Date();
    return (
      dateTime.getDate() === today.getDate() &&
      dateTime.getMonth() === today.getMonth() &&
      dateTime.getFullYear() === today.getFullYear()
    );
  };

  const formatDate = (dateTime: Date) => {
    const day = formatDay(dateTime);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const formattedDate = dateTime.toLocaleDateString('it-IT', options).replace(/\//g, '.');
    return `${day} ${formattedDate}`;
  };

  const handleSelect = (index: number) => {
    setValue("selectedAvailability", index);
  };

  return {
    selectedAvailabilityIndex,
    isToday,
    formatDate,
    handleSelect,
  };
};

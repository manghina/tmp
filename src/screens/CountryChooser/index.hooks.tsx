import { Colors } from "react-native-ui-lib";
import { useMemo, useState } from "react";
import countries from "@assets/countriycodes.json";

type CountryData = {
  name: string;
  code: string;
  dial_code: string;
  flag: string;
};

export const useCountryChooser = () => {
  const countryData: CountryData[] = countries;
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null,
  );

  const isThisSelected = useMemo(() => {
    return (country: CountryData) => {
      return selectedCountry ? country.code === selectedCountry.code : false;
    };
  }, [selectedCountry]);

  const getColor = useMemo(() => {
    return (country: CountryData) => {
      return selectedCountry
        ? country.code === selectedCountry.code
          ? Colors.buttonGray
          : Colors.defaultColor
        : Colors.defaultColor;
    };
  }, [selectedCountry]);

  return {
    countryData,
    selectedCountry,
    isThisSelected,
    getColor,
    setSelectedCountry,
  };
};

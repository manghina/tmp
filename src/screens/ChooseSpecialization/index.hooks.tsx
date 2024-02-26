import { Colors } from "react-native-ui-lib";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const professions = [
  "Medico",
  "Infermiere",
  "Chirurgo",
  "Dentista",
  "Farmacista",
  "Ostetrica",
  "Fisioterapista",
  "Psicologo",
  "Dietista",
  "Radiologo",
  "Biologo",
  "Nutrizionista",
  "Optometrista",
  "Logopedista",
  "Podologo",
  "Terapista occupazionale",
  "Ortopedico",
  "Anestesista",
  "Cardiologo",
  "Neurologo",
];

type ChoseSpecializationRouteParams = {
  value: string;
  onGoBack: (value: string) => void;
};

export const useChooseSpecializationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [searchText, setSearchText] = useState<string>("");
  const [selectedProfession, setSelectedProfession] = useState<String | null>(
    null,
  );

  const onTextFieldChange = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchText(event.nativeEvent.text);
    },
    [setSearchText],
  );

  const onProfessionSelected = useCallback(
    (profession: string) => {
      (route.params as ChoseSpecializationRouteParams)?.onGoBack?.(profession);
      navigation.goBack();
    },
    [setSelectedProfession, route],
  );

  const filteredProfessions = useMemo(
    () =>
      professions
        .filter((profession) =>
          profession.toLowerCase().includes(searchText.toLowerCase()),
        )
        .map((profession) => ({
          id: profession,
          profession,
        })),
    [searchText],
  );

  const isThisSelected = useMemo(() => {
    return (profession: string) => {
      return selectedProfession ? profession === selectedProfession : false;
    };
  }, [selectedProfession]);

  const getColor = useMemo(() => {
    return (profession: string) => {
      return selectedProfession
        ? profession === selectedProfession
          ? Colors.buttonGray
          : Colors.defaultColor
        : Colors.defaultColor;
    };
  }, [selectedProfession]);

  useEffect(() => {
    // Get initial value from route params
    setSelectedProfession(
      (route.params as ChoseSpecializationRouteParams)?.value ?? null,
    );
  }, [route.params]);

  return {
    filteredProfessions,
    isThisSelected,
    getColor,
    onTextFieldChange,
    searchText,
    onProfessionSelected,
  };
};

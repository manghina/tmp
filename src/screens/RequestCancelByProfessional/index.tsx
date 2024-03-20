import { memo } from "react";
import { useRequestCancelByProfessional } from "./index.hooks";
import {
  Button,
  Text,
  View,
  RadioButton,
  RadioGroup,
} from "react-native-ui-lib";
import { ScrollView, TextInput } from "react-native";
import { styles } from "./styles";

type RequestCancelByProfessionalScreenProps = {};

export const RequestCancelByProfessionalScreen = memo(
  ({}: RequestCancelByProfessionalScreenProps) => {
    const {
      handleDeleteRequest,
      goBack,
      radioValues,
      setRadioValues,
      textValue,
      setTextValue,
    } = useRequestCancelByProfessional();

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Cancellazione</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>

          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraphTitle}>Motivazioni</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Urna urna sed dui mattis
              ac ornare adipiscing
            </Text>
            <RadioGroup style={styles.radioGroup}>
              <RadioButton
                containerStyle={[styles.radioBtn, styles.firstRadioBtn]}
                contentOnLeft
                label={"Opzione A"}
                labelStyle={styles.label}
                iconStyle={styles.icon}
                value={radioValues.option1}
                size={20}
              />
              <RadioButton
                containerStyle={[styles.radioBtn, styles.lastRadioBtn]}
                contentOnLeft
                label={"Opzione C"}
                labelStyle={styles.label}
                iconStyle={styles.icon}
                value={radioValues.option2}
                size={20}
              />
            </RadioGroup>
          </View>

          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraphTitle}>Title</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Urna urna sed dui mattis
              ac ornare adipiscing
            </Text>
            <TextInput
              style={[
                styles.textArea,
                textValue ? styles.textAreaDirty : styles.textAreaEmpty,
              ]}
              placeholder={"Scrivi qui..."}
              multiline
              numberOfLines={7}
              value={textValue}
              onChange={(ev) => {
                setTextValue(ev.nativeEvent.text);
              }}
            />
          </View>

          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraphTitle}>Disclaimer</Text>
            <Text style={styles.paragraph}>
              Tortor nunc tristique pretium cursus imperdiet eros tristique
              sagittis faucibus. Elit tincidunt nec adipiscing magnis neque
              turpis. Risus nulla nec purus at convallis diam. Vitae nulla
              aliquam vestibulum condimentum. Mauris dictum tincidunt placerat
              libero purus sed quis turpis viverra.
            </Text>
          </View>

          <View style={styles.footer}>
            <Text>Sei sicuro di voler procedere?</Text>
            <Button
              style={styles.button}
              onPress={handleDeleteRequest}
              label="Annulla prenotazione"
            />
            <Text style={styles.goBackLink} onPress={goBack}>
              Torna indietro
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  },
);

import { memo } from "react";
import { useRequestCancelByProfessional } from "./index.hooks";
import {
  Button,
  Text,
  View,
  RadioButton,
  RadioGroup,
  TouchableOpacity,
} from "react-native-ui-lib";
import { ImageSourcePropType, ScrollView, TextInput } from "react-native";
import { styles } from "./styles";
import AppRadioButton from "../../components/AppRadioButton";
type RequestCancelByProfessionalScreenProps = {};

const emptyIcon: ImageSourcePropType = require("../../components/SvgIcons/EmptyIcon");

export const RequestCancelByProfessionalScreen = memo(
  ({}: RequestCancelByProfessionalScreenProps) => {
    const {
      handleDeleteRequest,
      goBack,
      radioValues,
      textValue,
      setTextValue,
      handleRadioChange,
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

            <RadioGroup
              style={styles.radioGroup}
              onValueChange={(value) => handleRadioChange(value)}
            >
              {/* <RadioButton
                containerStyle={[
                  styles.radioBtn,
                  styles.firstRadioBtn,
                  radioValues.option1 && styles.selectedRadioBtn,
                ]}
                contentOnLeft
                label={"Option A"}
                labelStyle={styles.label}
                value={"option1"}
                size={20}
                selected={radioValues.option1}
                iconStyle={radioValues.option1 ? styles.icon : undefined}
                iconSource={emptyIcon}
                iconOnRight
              />
              <RadioButton
                containerStyle={[
                  styles.radioBtn,
                  styles.lastRadioBtn,
                  radioValues.option2 && styles.selectedRadioBtn,
                ]}
                contentOnLeft
                label={"Option C"}
                labelStyle={styles.label}
                value={"option2"}
                size={20}
                selected={radioValues.option2}
                iconStyle={radioValues.option2 ? styles.icon : undefined}
                iconSource={emptyIcon}
                iconOnRight
              /> */}
              <AppRadioButton
                selected={radioValues.option1}
                handlePress={() => {
                  handleRadioChange("option1");
                }}
                label="Option A"
                style={styles.firstRadioBtn}
              />
              <AppRadioButton
                selected={radioValues.option2}
                handlePress={() => handleRadioChange("option2")}
                label="Option C"
                style={styles.lastRadioBtn}
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
            <Text style={styles.footerText}>Sicuro di voler procedere?</Text>
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

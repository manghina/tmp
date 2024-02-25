"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorCard = void 0;
var react_1 = require("react");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var FormSlotSelector_1 = require("../_form/FormSlotSelector");
var styles_1 = require("./styles");
exports.DoctorCard = (0, react_1.memo)(function (_a) {
    var focused = _a.focused, profilePicture = _a.profilePicture, name = _a.name, specialty = _a.specialty, availability = _a.availability, information = _a.information, distance = _a.distance;
    return (<react_native_ui_lib_1.View width={325} padding-10 backgroundColor={react_native_ui_lib_1.Colors.whiteBackground} style={{ borderWidth: 2, borderRadius: 16, borderColor: focused ? "#388BFF" : "#091E4225", shadowColor: "#000", shadowOpacity: focused ? 0.12 : 0,
            elevation: focused ? 5 : 0 }}>
        <react_native_ui_lib_1.View row>
          <react_native_ui_lib_1.Image marginR-10 style={{ borderRadius: 50 }} width={48.6} height={48.6} source={{
            uri: profilePicture,
        }}/>
          <react_native_ui_lib_1.View>
            <react_native_ui_lib_1.Text style={styles_1.styles.professionalName}>Dott. {name}</react_native_ui_lib_1.Text>
            <react_native_ui_lib_1.Text link style={styles_1.styles.speciality}>
              Specialità: {specialty}
            </react_native_ui_lib_1.Text>
            <react_native_ui_lib_1.Text link style={styles_1.styles.distance}> a {distance} da te</react_native_ui_lib_1.Text>
          </react_native_ui_lib_1.View>
        </react_native_ui_lib_1.View>
        <react_native_ui_lib_1.Text marginV-10 style={styles_1.styles.sectionTitle}>Informativa</react_native_ui_lib_1.Text>
        <react_native_ui_lib_1.View width={"100%"} padding-20 backgroundColor={react_native_ui_lib_1.Colors.cardGray} style={{ borderRadius: 10.8 }}>
          <react_native_ui_lib_1.Text style={styles_1.styles.informativeContent}>{information}</react_native_ui_lib_1.Text>
          <react_native_ui_lib_1.Text link marginT-8 style={styles_1.styles.moreInformations}>
            Ulteriori dettagli
          </react_native_ui_lib_1.Text>
        </react_native_ui_lib_1.View>
        <react_native_ui_lib_1.Text marginT-10 marginB-10 style={styles_1.styles.sectionTitle}>
          Disponibilità e onorario
        </react_native_ui_lib_1.Text>
        <FormSlotSelector_1.FormSlotSelector availabilityList={availability}/>
      </react_native_ui_lib_1.View>);
});
exports.DoctorCard.displayName = "DoctorCard";

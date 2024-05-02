import React from "react";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { faqStyles } from "./styles";
import { useFaqScreen } from "./index.hooks";

export const FAQSUsercreen = () => {
  const { me, faqItems } = useFaqScreen();

  const renderMenu = () => (
    <>
      <View style={faqStyles.menuContainer}>
        {faqItems.map(( items ) => (
          <View key={items.title} style={faqStyles.menuCategory}>
            <Text style={faqStyles.menuCatergoryTitle}>{items.title}</Text>
                  <Text>{items.label}</Text>
          </View>
        ))}
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView style={faqStyles.safeAreaView}>
        <ScrollView style={faqStyles.scrollView}>
          {renderMenu()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

FAQSUsercreen.displayName = "FAQSUsercreen";
FAQSUsercreen.RouteName = "faqsUser" as const;

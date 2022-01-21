import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import ClimaImageChuva from "../../../src/assets/images/chuva.svg";
import ClimaImageSol from "../../../src/assets/images/sol.svg";
import ClimaImageTempestade from "../../../src/assets/images/tempestade.svg";
import ClimaImageNeve from "../../../src/assets/images/neve.svg";
import ClimaImageNuvens from "../../../src/assets/images/nuvens.svg";

import styles from "./styles";

import { View, Image, StatusBar, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Aplicação de redux na pagina
import { useSelector, useDispatch } from "react-redux";
// Reducers
import reducers from "../../store/reducers";

interface Params {
  itensGeral?: any;
}

const BoxClimaAtual = (params: Params) => {
  return (
    <>
      {params.itensGeral &&
        params.itensGeral.map((item: any, index: any) => (
          <View key={index} style={styles.container}>
            <View style={styles.BoxEsquerda}>
              <Text style={styles.texto}>{item.weekday} - {item.date}</Text>
              {item.condition === "rain" && (
                <ClimaImageChuva width={40} height={40} />
              )}
              {item.condition === "clear_day" && (
                <ClimaImageSol width={40} height={40} />
              )}
              {item.condition === "storm" && (
                <ClimaImageTempestade width={40} height={40} />
              )}
              {item.condition === "snow" && (
                <ClimaImageNeve width={40} height={40} />
              )}
              {item.condition === ("fog" || "cloud" || "cloudly_day" || "cloudly_night") && (
                <ClimaImageNuvens width={40} height={40} />
              )}
              <Text style={styles.texto}>{item.description}</Text>
            </View>
            <View>
              <Text>Temperatura</Text>
              <View style={styles.boxMaxMin}>
                <Icon name="arrow-up" size={18} color="#d83723" />
                <Text> Max - {item.max}°</Text>
              </View>
              <View style={styles.boxMaxMin}>
                <Icon name="arrow-down" size={18} color="#42a1d5" />
                <Text> Min - {item.min}°</Text>
              </View>
            </View>
          </View>
        ))}
    </>
  );
};

export default BoxClimaAtual;

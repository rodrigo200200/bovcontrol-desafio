import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import ClimaImageChuva from "../../../src/assets/images/chuva.svg";
import ClimaImageSol from "../../../src/assets/images/sol.svg";
import ClimaImageTempestade from "../../../src/assets/images/tempestade.svg";
import ClimaImageNeve from "../../../src/assets/images/neve.svg";
import ClimaImageNuvens from "../../../src/assets/images/nuvens.svg";
import styles from "./styles";

import { View, Image, StatusBar, Text } from "react-native";

// Aplicação de redux na pagina
import { useSelector, useDispatch } from "react-redux";
// Reducers
import reducers from "../../store/reducers";

interface Params {
  temperatura?: any;
  tempmax?: any;
  tempmin?: any;
  humidade?: any;
  condition?: any;
  cidade?: any;
  description?: any;
}

const BoxDia = (params: Params) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{params.cidade}</Text>
      <View style={styles.containerImagemAtual}>
        {params.condition === "rain" && (
          <ClimaImageChuva width={60} height={60} />
        )}
        {params.condition === "clear_day" && (
          <ClimaImageSol width={60} height={60} />
        )}
        {params.condition === "storm" && (
          <ClimaImageTempestade width={60} height={60} />
        )}
        {params.condition === "snow" && <ClimaImageNeve width={60} height={60} />}
        {params.condition ===
          ("fog" || "cloud" || "cloudly_day" || "cloudly_night") && (
          <ClimaImageNuvens width={60} height={60} />
        )}
        <Text style={styles.textodesc}>{params.description}</Text>
      </View>
      <View>
        <View style={styles.linha}>
          <Text style={styles.texto}>Temperatura Atual</Text>
          <Text style={styles.texto}>{params.temperatura}°C</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.texto}>Temperatura Máxima</Text>
          <Text style={styles.texto}>{params.tempmax}°C</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.texto}>Temperatura Mínima</Text>
          <Text style={styles.texto}>{params.tempmin}°C</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.texto}>Umidade</Text>
          <Text style={styles.texto}>{params.humidade}%</Text>
        </View>
      </View>
    </View>
  );
};

export default BoxDia;

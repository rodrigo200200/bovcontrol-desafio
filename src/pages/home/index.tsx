import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import BoxDia from "../../components/BoxDia";
import BoxClimaAtual from "../../components/BoxClimaAtual";

import { View, Image, StatusBar, Text, ScrollView } from "react-native";
import service from "../../service";
import { useNetInfo } from "@react-native-community/netinfo";

// Aplicação de redux na pagina
import { useSelector, useDispatch } from "react-redux";
// Reducers
import reducers from "../../store/reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();
  const global: any = useSelector<any>((state) => state.global); // Busca todos os dados do estado global

  const requestApi = async () => {

    let response = await service.wather.clima({
      key: 'key=3944221a',
      limit: 'array_limit=7'
    })
    console.log("TESTANDO RESPOSTA======>", response.data);

    await AsyncStorage.setItem("@App:Response", JSON.stringify(response.data));
    let nointernt: any = await AsyncStorage.getItem("@App:Response");


    dispatch(
      reducers.global.actionSetlistaDias(JSON.parse(nointernt))
    );

  };



  // useFocusEffect(
  //   useCallback(() => {

  //     // console.log(netInfo.isConnected)

  //     // console.log(`Testandoooooooo-------->`, SeteDias);
  //   }, [])
  // );

    useEffect(() => {     
      requestApi()
      console.log(global.listaDias)
    },[])


  return (
    <>
    {global.listaDias.city_name ? (
      <>
     
        <ScrollView>
      {/* <Text>{JSON.stringify(global.listaDias, null ,2)}</Text> */}
          <View style={styles.container}>
            {netInfo.isConnected === false && (
              <Text style={styles.mensagem}>
                Devido a falta de conexão com internet estamos exibindo os dados
                obtidos na data {global.listaDias.date} as{" "}
                {global.listaDias.time}
              </Text>
            )}

            <Text style={styles.titulo}>Previsao do Tempo</Text>
            <BoxClimaAtual
              cidade={global.listaDias.city_name}
              temperatura={global.listaDias.temp}
              tempmax={global.listaDias.forecast[0].max}
              tempmin={global.listaDias.forecast[0].min}
              humidade={global.listaDias.humidity}
              condition={global.listaDias.forecast[0].condition}
              description={global.listaDias.description}  
            />

            <Text style={styles.titulo}>Previsão para os próximos 7 dias</Text>
            <View style={styles.boxglobal}>
              {global.listaDias.forecast && (
                <BoxDia itensGeral={global.listaDias.forecast} />
              )}
            </View>
          </View>
        </ScrollView>
      </>
    ):<>
    
    
    </>}
    </>
  );
};

export default Home;

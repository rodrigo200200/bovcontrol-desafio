import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#54a8bc",
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 100,
  },
  boxSeteDias: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mensagem: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FF0000",
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left'
  },
  titulo: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
});

export default styles;

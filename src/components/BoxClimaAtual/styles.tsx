import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '80%',
        backgroundColor: '#67a8ae',
        padding: 10,
        borderRadius: 20,
        // width: '30%',
        // height: 50
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 1,
        borderColor:'#fff',
      },
      containerImagemAtual: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
      },
      titulo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF',
        fontWeight: '700',
        paddingBottom: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1
      },
      linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomColor: '#fff',
        borderBottomWidth: 1
      },
      texto: {
        fontSize: 15,
        color: '#FFF'
      },
      textodesc: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'bold'
      }
});

  export default styles;
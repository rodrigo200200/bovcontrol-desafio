import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#000',
        // width: '30%',
        // height: 50
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f2f2f2',
        width: width-40,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor:'#000',
      },
      BoxEsquerda: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto: {
        fontSize: 10,
        color: '#454545',
        fontWeight: '700',
        marginBottom: 10
      },
      boxMaxMin: {
        flexDirection: 'row'
      }
});

  export default styles;
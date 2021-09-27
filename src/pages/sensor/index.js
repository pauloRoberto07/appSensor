import React, {useState,useEffect} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TouchID from 'react-native-touch-id';




export default function App({navigation}) {

  const [supported, setSupported] = useState(null);
  const [nome, setNome] = useState('Acessar Mapa');

  useEffect(()=> {
    TouchID.isSupported()
    .then( sucesso =>{
      setSupported(true);
      console.log('Id habilitado');
    }).catch((error)=>{
      console.log("ERRO TOUCH: "+error);
      alert('Touch ID não suportado')
    })
  },[]);


  function handleLogin() {
    const configs = {
      title: 'Autenticação',
      color: '#add8e6',
      sensorErrorDescription: 'Touch ID Invalido',
    };
    TouchID.authenticate("Acessar o mapa", configs).then(success =>{
      navigation.navigate('Mapa');
    }).catch(error=>{
      console.log('Falha na autenticação: '+error)
    })
  }


  return(
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn} onPress={handleLogin}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Acessar o Mapa</Text>
      </TouchableHighlight>

      <Text style={{fontSize:40,}}> {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    borderRadius: 3,
    marginBottom: 15,
    padding: 15,
    backgroundColor:'#ffa07a'
  }
});


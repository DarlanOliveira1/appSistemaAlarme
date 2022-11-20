import { NavigationContainer,useNavigation }  from '@react-navigation/native'
import { createNativeStackNavigator }         from '@react-navigation/native-stack'
import React,{useState, useEffect}            from "react";
import Estilos                                from '../styles'

import {  View,
          KeyboardAvoidingView,
          Image, 
          TextInput, 
          TouchableOpacity,
          Text, 
          StyleSheet,
          Animated,
          Keyboard,
          LogBox} from "react-native";

          
function Home() {


  const [offset]                  = useState(new Animated.ValueXY({x:0  , y:95  } ));
  const [opacity]                 = useState(new Animated.Value(0));
  const [logo]                    = useState(new Animated.ValueXY({x:250, y:250}));
  const navigation                = useNavigation()

  const [getNome,setgetNome]      = useState("")
  const [getSenha,setgetSenha]    = useState("")

  useEffect(()=> {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y,{
        toValue:0,
        speed:4,
        bounciness:20,
        useNativeDriver: false
      }),
      Animated.timing(opacity,{
        toValue:1,
        duration:200,
        useNativeDriver: false
      })
    ]).start();


  },[]);

  function keyboardDidShow(){

    //animacao para reduzir a logo quando teclado aberto
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:150,
        duration:100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue:150,
        duration:100,
        useNativeDriver: false
      }),

    ]).start();

  }

  function keyboardDidHide(){

    //animacao para voltar logo ao tamanho normal quando teclado fechado
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:250,
        duration:100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y,{
        toValue:250,
        duration:100,
        useNativeDriver: false
      }),

    ]).start();
  }

  return(

    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Estilos.background}
    >

      <View style={Estilos.containerLogo} >
        <Animated.Image
          source={require('../assets/logo.png')}
          style={{ width: logo.x, height: logo.y }}
        />

      </View>

      <Animated.View 
        style={[
          Estilos.container,
                  {
                    opacity: opacity,
                    transform:[
                      {translateY:offset.y}
                    ]
                  }  
                ]
              }    
        >

        <TextInput
          style={Estilos.imput}
          placeholder="Login"
          outoCorrect={false}
          value = {getNome}
          onChangeText= {text=>setgetNome(text)}
        />
        <TextInput
          style={Estilos.imput}
          placeholder="Senha"
          secureTextEntry
          outoCorrect={false}
          value = {getSenha}
          onChangeText= {text=>setgetSenha(text)}
        />

        <TouchableOpacity 
          style={Estilos.btnSubmit}
          onPress={function () {
            if((getNome != 'admin') | (getNome != 'admin') ){
              alert("Usuario ou senha incorreto")
            }else{
              navigation.navigate('Alarme')
            }
          }
        }
        >
          
          <Text style={Estilos.btnSubmitText} >
            Acessar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Estilos.btnRegister}>
          <Text style={Estilos.registerText}>
            Criar conta gratuita
          </Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>


  );

}

export default Home
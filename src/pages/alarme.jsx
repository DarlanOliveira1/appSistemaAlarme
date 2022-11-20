import { useNavigation }                            from '@react-navigation/native'
import React, { useState }                          from 'react'
import {Button,
        Text,
        KeyboardAvoidingView,
        TouchableOpacity
        }                                           from 'react-native'
import { SafeAreaView }                             from 'react-native-safe-area-context'
import Estilos                                      from '../styles'
import axios                                        from 'axios'

function Alarme() {
  
  const nav = useNavigation()
  //requisicoes
  const [estado, setEstado]   = useState(1)
  const [estado1, setEstado1] = useState(1)
  const [estado2, setEstado2] = useState(1)
  const [estado3, setEstado3] = useState(1)
  const [estado4, setEstado4] = useState(1)
  const [estado5, setEstado5] = useState(1)
  const [estado6, setEstado6] = useState(1)

  const urlAlarme = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/alarme/data'
  const urlLap1   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada1/data'
  const urlLap2   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada2/data'
  const urlLap3   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada3/data'
  const urlLap4   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada4/data'
  const urlLap5   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada5/data'
  const urlLap6   = 'https://io.adafruit.com/api/v2/darlan_cartaxo/feeds/lampada6/data'
  const headers   = {
    'User-Agent': 'darlan_cartaxo',
    'X-AIO-KEY': 'aio_UGEW65YHS4L25OFksHZUVVgyYwja',
  }

//Ligar e desligar alarme
async function onOff() {
  try {
      const BODY = { datum : {value: estado}}
      const resp = await axios.post(urlAlarme, BODY, { headers: headers })
      setEstado(estado === 1 ? 2 : 1)
      if(estado === 1){
          console.log("Ligar Sistema Acionado")
          alert("Ligar Sistema Acionado")

      }else{

          console.log("Desligar Sistema Acionado")
          alert("Desligar Sistema Acionado")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar o alarme')
      Alert('Erro na requisicao para ligar o alarme')       
  }
}

//Ligar e desligar Lampada Quarto
async function onOffLamp1() {
  try {
      const BODY = { datum : {value: estado1}}
      const resp = await axios.post(urlLap1, BODY, { headers: headers })
      setEstado1(estado1 === 1 ? 2 : 1)
      if(estado1 === 1){
          console.log("Lampada Quarto Ligada")
          alert("Lampada Quarto Ligada")
      }else{
          console.log("Lampada Quarto Desligada")
          alert("Lampada Quarto Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada do Quarto')
      Alert('Erro na requisicao de ligar a lampada do Quarto')
  }
}

//Ligar e desligar Lampada Banheiro
async function onOffLamp2() {
  try {
      const BODY = { datum : {value: estado2}}
      const resp = await axios.post(urlLap2, BODY, { headers: headers })
      setEstado2(estado2 === 1 ? 2 : 1)

      if(estado2 === 1){
        console.log("Lampada Banheiro Ligada")
        alert("Lampada Banheiro Ligada")
      }else{
        console.log("Lampada Banheiro Desligada")
        alert("Lampada Banheiro Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada do Banheiro')
      Alert('Erro na requisicao de ligar a lampada do Banheiro')
  }
}

//Ligar e desligar Lampada Cozinha
async function onOffLamp3() {
  try {
      const BODY = { datum : {value: estado3}}
      const resp = await axios.post(urlLap3, BODY, { headers: headers })
      setEstado3(estado3 === 1 ? 2 : 1)

      if(estado3 === 1){
        console.log("Lampada Cozinha Ligada")
        alert("Lampada Cozinha Ligada")
      }else{
        console.log("Lampada Cozinha Desligada")
        alert("Lampada Cozinha Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada da Cozinha')
      Alert('Erro na requisicao de ligar a lampada da Cozinha')
  }
}

//Ligar e desligar Lampada Area de Servico
async function onOffLamp4() {
  try {
      const BODY = { datum : {value: estado4}}
      const resp = await axios.post(urlLap4, BODY, { headers: headers })
      setEstado4(estado4 === 1 ? 2 : 1)
      if(estado4 === 1){
        console.log("Lampada Area de Servico Ligada")
        alert("Lampada Area de Servico Ligada")
      }else{
        console.log("Lampada Area de Servico Desligada")
        alert("Lampada Area de Servico Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada da Area de Servico')
      Alert('Erro na requisicao de ligar a lampada da Area de Servico')
  }
}

//Ligar e desligar Lampada Sala De Estar
async function onOffLamp5() {
  try {
      const BODY = { datum : {value: estado5}}
      const resp = await axios.post(urlLap5, BODY, { headers: headers })
      setEstado5(estado5 === 1 ? 2 : 1)

      if(estado5 === 1){
        console.log("Lampada Sala De Estar Ligada")
        alert("Lampada Sala De Estar Ligada")
      }else{
        console.log("Lampada Sala De Estar Desligada")
        alert("Lampada Sala De Estar Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada da Sala De Estar')
      Alert('Erro na requisicao de ligar a lampada da Sala De Estar')
  }
}

//Ligar e desligar Lampada Garagem
async function onOffLamp6() {
  try {
      const BODY = { datum : {value: estado6}}
      const resp = await axios.post(urlLap6, BODY, { headers: headers })
      setEstado6(estado6 === 1 ? 2 : 1)
      if(estado6 === 1){
        console.log("Lampada Garagem Ligada")
        alert("Lampada Garagem Ligada")
      }else{
        console.log("Lampada Garagem Desligada")
        alert("Lampada Garagem Desligada")
      }

  } catch (error) {
      console.log('Erro na requisicao para ligar a lampada da Garagem')
      Alert('Erro na requisicao de ligar a lampada da Garagem')
  }
}

  return (
    <SafeAreaView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Estilos.background}
    >

      <TouchableOpacity 
        style={Estilos.botao2 }
        onPress={onOff}

      >
        <Text 
          style={Estilos.btnSubmitText}>
          Ligar Desligar Sistema
        </Text>

      </TouchableOpacity>


      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp1}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Quarto
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp2}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Banheiro
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp3}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Cozinha
        </Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp4}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Area De Servico
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp5}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Sala De Estar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={Estilos.botao1}
        onPress={onOffLamp6}
      >
        <Text style={Estilos.btnSubmitText} >
          Lampada Garagem
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}



export default Alarme


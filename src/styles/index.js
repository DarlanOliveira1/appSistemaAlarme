//componentizavao ou seja uma view stilizada

import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'

    },


    containerLogo:{
        flex:1,
        justifyContent: 'center',
      },
    
      container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom:70
      },
      imput:{
        backgroundColor:'#FFF',
        width: '90%',
        marginBottom:15, //lagura de uma coluna par
        color:'#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
      },
    
      btnSubmit:{
        backgroundColor:'#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
      },
      
      btnSubmitText:{
        color:'#FFF',
        fontSize: 18
      },
    
      btnRegister:{
        marginTop:10,
      },
      registerText:{
        color:'#FFF',
      },


      //tela Alame

      btnTitAlerm:{
        color:'#FFF',
        fontSize: 22,
        flex:1,
        marginTop:10,
        
      },
      
      //Botoes
      botao1:{
        backgroundColor:'#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding:10,
        marginBottom:10, //lagura de uma coluna par
        },

              //Botoes
      botao2:{
        backgroundColor:'#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding:10,
        marginBottom:45, //lagura de uma coluna par
        }


})


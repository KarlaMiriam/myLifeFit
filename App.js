import React , {Component }from'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert,ImageBackground} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: ''
    };

    this.entrar = this.entrar.bind(this);

  }

  
  pegaEmail(texto) {
    this.setState({ email: texto });
    if (texto === '') {
      alert('Digite seu e-mail!');
    }
  }
  
  pegaSenha(texto) {
    this.setState({ senha: texto });
    if (texto === '') {
      alert('Digite sua senha!');
    }
  }

  entrar() {
    const { email, senha } = this.state;
    if (email === '' && senha === '') {
      Alert.alert(
        'Campos Vazios',
        'Digite seu e-mail e senha!',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
  
    if (email === '') {
      Alert.alert(
        'Campo Vazio',
        'Digite seu e-mail!',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
  
    if (senha === '') {
      Alert.alert(
        'Campo Vazio',
        'Digite sua senha!',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
  }

  render() {
    let nomeApp = 'Cadastrar nova conta!';

    return (
      <View style={styles.area}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./assets/imagemFundoc.jpg')}
        />

        <View style={styles.viewCentral}></View>
        <Text style={styles.textoPrincipal}>
          BEM-VINDO AO MYFIT
        </Text>
        <View style={styles.login}>
        <Text style={styles.textSubtitulo}>
          Faça Login
        </Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Digite seu e-mail"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.pegaEmail(texto)}
        />
        <TextInput
          style={styles.inputSenha}
          placeholder="Digite sua senha"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.pegaSenha(texto)}
        />
        <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.entrar()}>
          <View>
            <Text style={styles.buttonTextEntrar} >
                ENTRAR
            </Text>
          </View>
        </TouchableOpacity> 
        <Text style={styles.textMensagemPadrao}>{nomeApp}</Text>
        <TouchableOpacity style={styles.buttonCadastrar}>
          <View>

            <Text style={styles.buttonTextCadastrar} >
              CADASTRE-SE
            </Text>
          </View>
        </TouchableOpacity>
        </View> 
        <Text style={styles.textMensagemPadrao}>{this.state.email}</Text>
        <Text style={styles.textMensagemPadrao}>{this.state.senha}</Text>
        <View style={styles.viewCentral}></View>
        <Text style={styles.textMensagemPadrao}></Text>
        
          {this.state.nome}
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 80
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    resizeMode: 'fixed', 
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  textoPrincipal: {
    justifyContent: 'center',
    fontFamily: 'cursive-font',
    fontSize: 40,
    color: '#FF00FF',
    marginVertical: 15,
    textAlign: 'center',
    marginTop: 140,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
     textShadowRadius: 10
    
  },
  textSubtitulo: {
    fontSize: 15,
    color: '#FFFFFF',
    alignItems: 'center',
    margin: 5,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonEntrar: {
    fontSize: 25,
    borderColor: '#FF00FF',
    borderRadius: 25,
    borderWidth: 2,
    width: '70%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonCadastrar: {
    fontSize: 25,
    borderColor: '#FF00FF',
    borderRadius: 25,
    borderWidth: 2,
    width: '50%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  buttonTextEntrar: {
   fontSize: 15,
   fontWeight: 'bold',
   color: '#DDA0DD',
   textAlign: 'center',
   justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextCadastrar: {
    fontSize: 15,
    fontWeight: 'Calibri',
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMensagemPadrao: {
    color: '#FFFFFF',
    fontSize: 15,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  viewCentral: {
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputEmail:{
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    height: 45,
    borderWidth: 1,
    borderColor:'#FFFFFF',
    margin: 10,
    fontsize: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSenha:{
    width: '90%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    height: 45,
    borderWidth: 1,
    borderColor:'#FFFFFF',
    margin: 10,
    fontsize: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  textBasic: {
    color: '#FFFFFF',
    fontSize: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  alertText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;

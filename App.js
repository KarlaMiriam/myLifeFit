import React , {Component }from'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert,ImageBackground,FlatList} from 'react-native';

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
        <Text style={styles.textoPrincipal}>
          CALORIAS DIÁRIAS
        </Text>
        <View style={styles.login}>
        <Text style={styles.textSubtitulo}>
          Calorias ativas
        </Text>
        <TouchableOpacity style={styles.buttonCaloriasAtivas} onPress={() => this.entrar()}>
              <Text style={styles.buttonTextCaloriasAtivas} >
                  Colocar calorias do relogio AQUI!
              </Text>
        </TouchableOpacity>
        <Text style={styles.textSubtitulo}>
          Total de Calorias
        </Text>
        <TouchableOpacity style={styles.buttonCaloriasTotais} onPress={() => this.entrar()}>
              <Text style={styles.buttonTextCaloriasTotais} >
                  Colocar calorias do relogio AQUI!
              </Text>
        </TouchableOpacity>
        <View>
        <TouchableOpacity style={styles.buttonEntrar} onPress={() => this.entrar()}>
              <Text style={styles.buttonTextEntrar} >
                  ANOTAR CALORIAS
              </Text>
        </TouchableOpacity>
          </View>
          </View>
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
 
 textoPrincipal: {
    justifyContent: 'center',
    fontFamily: 'cursive-font',
    fontSize: 40,
    color: '#FF00FF',
    marginVertical: 15,
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10
  },
  textSubtitulo: {
    fontSize: 20,
    color: '#FFFFFF',
    alignItems: 'center',
    margin: 5,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonCaloriasAtivas: {
    fontSize: 35,
    borderColor: '#FF00FF',
    borderRadius: 25,
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,  // Ajuste a margem superior conforme necessário
  },
  buttonCaloriasTotais: {
    fontSize: 35,
    borderColor: '#FF00FF',
    borderRadius: 25,
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,  // Ajuste a margem inferior conforme necessário
  },
  buttonTextCaloriasAtivas: {
   fontSize: 40,
   fontWeight: 'bold',
   color: '#FFFFFF',
   textAlign: 'center',
  },
  buttonTextCaloriasTotais: {
    fontSize: 40,
    fontWeight: 'Calibri',
    color: '#FFFFFF',
    textAlign: 'center',
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

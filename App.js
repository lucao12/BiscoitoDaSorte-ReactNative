import React , { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.arrayDeFrases = [
      'Acredite nos seus sonhos e vá em frente!',
      'A jornada é tão importante quanto o destino.',
      'Sua perseverança abrirá portas inimagináveis.',
      'Aprenda com os erros, cresça com os desafios.',
      'A felicidade está em cada pequeno momento.',
      'Seja a mudança que deseja ver no mundo.',
      'A gratidão transforma a vida em um presente.',
      'A coragem é a chave para alcançar grandes conquistas.',
      'Acredite no seu potencial ilimitado.',
      'A vida é um presente, desfrute-a ao máximo.',
      'A paciência é a chave para a paz interior.',
      'Amar é a verdadeira essência da vida.',
      'A cada queda, levante-se mais forte.',
      'As adversidades tornam você mais resiliente.',
      'Mude seus pensamentos, mude sua realidade.',
      'O sucesso começa com acreditar em si mesmo.',
      'Valorize quem você é, com todas as suas imperfeições.',
      'O amor próprio é o primeiro passo para amar os outros.',
      'Não há limites para o que você pode alcançar.',
      'A persistência leva à excelência.',
      'Aprenda a apreciar as pequenas alegrias da vida.',
      'O sorriso é a melhor arma para enfrentar desafios.',
      'Aprender é crescer, crescer é evoluir.',
      'Seja gentil, você nunca sabe o que o outro está enfrentando.',
      'Acredite que tudo acontece por um motivo.',
      'Abraçar a mudança é abraçar oportunidades.',
      'O respeito é a base de todas as relações.',
      'Viva o presente e deixe o passado para trás.',
      'Semeie o bem e colha felicidade.',
      'A verdadeira beleza vem de dentro.',
      'A vida é uma montanha-russa, aproveite o passeio.',
      'Nunca é tarde para recomeçar.',
      'Cada dia é uma nova chance de ser melhor.',
      'A humildade é o caminho para o aprendizado.',
      'A generosidade enriquece o coração.',
      'Não se preocupe com o que os outros pensam.',
      'Aprenda a perdoar, isso liberta a alma.',
      'O conhecimento é uma arma poderosa.',
      'Faça mais do que é esperado e surpreenda-se.',
      'A simplicidade é a chave para a felicidade.',
      'Aja com bondade e veja a magia acontecer.',
      'Seja grato pelas pequenas vitórias diárias.',
      'O tempo é o recurso mais valioso, use-o sabiamente.',
      'A verdadeira riqueza está nas experiências, não nos bens materiais.',
      'Cada dia é uma oportunidade de fazer a diferença.',
      'Acredite nas suas habilidades e conquiste o impossível.',
      'O amor é o idioma universal do coração.',
      'A vida é feita de altos e baixos, aproveite ambos.',
      'A empatia constrói pontes de compreensão.',
      'Seja o capitão da sua própria jornada.'
    ]
  }

  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.arrayDeFrases.length);

    this.setState({
      textoFrase: ' " ' + this.arrayDeFrases[numAleatorio] + ' " ',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render(){
    return (
      <View 
      style={styles.container}>
        
      <Image
        style={styles.img}
        source={this.state.img}/>

      <Text 
      style={styles.texto}>
        {this.state.textoFrase}
      </Text>

      <TouchableOpacity 
      style={styles.botao}
      onPress={this.quebraBiscoito}>
        <View 
        style={styles.btnArea}>
          <Text 
          style={styles.btnTexto}>
            Ler sorte
          </Text>
        </View>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  texto:{
    fontSize: 20,
    color: "#dd7b22",
    alignItems: 'center',
    fontStyle: 'italic',
    margin: 30
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#dd7b22"
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#dd7b22"
  }
});

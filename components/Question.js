import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { connect } from 'react-redux';
import { Text, CheckBox, Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import { fetchPost } from '../actions';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioButton: '',
      visibleModal: null,
    }
    this.selected = [];
    this.contador = 0;

  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Você acertou {this.contador} questões! Aguarde a correção do professor(a)</Text>
      {this._renderButton('Fechar', () => this.setState({ visibleModal: null }))}
    </View>
  );

  componentDidMount() {
    this.props.fetchPost(this.props.category); // precisamos passar da categoria
  }

  setSeleteds(x, questionTrue) {
    for (let i = 0; i < this.selected.length; i++) {
      if (x[9] == this.selected[i][9]) {
        this.selected[i] = x;
        //implementar a comparação por id, abaixo
        if (x[11] == questionTrue) {
          this.contador++
        }
        return false;
      }

    }
    this.selected.push(x)

  }

  render() {

    if (!this.props.categorySelected) {
      return <Text>Carregando . . .</Text>;
    }

    const questions = this.props.categorySelected.map((i, j) => {
      if (this.state.radioButton != '' && this.state.radioButton != this.selected.lastIndexOf(this.state.radioButton)) {
        this.setSeleteds(this.state.radioButton, i.questionTrue)
      }

      return (
        <TouchableOpacity key={j}>
          <Text >{i.teacherName}</Text>
          <Text >{i.title} {i.body}</Text>
          {console.log("Questão certa: " + i.questionTrue)}
          {console.log("Selecionadas: " + this.selected)}
          
          <View>
            <CheckBox title={'a) ' + i.items[0].a} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
              onPress={() => this.setState({ radioButton: 'question_' + [j] + '_a)' })} checked={this.state.radioButton === 'question_' + [j] + '_a)'} />
            <CheckBox title={'b) ' + i.items[0].b} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
              onPress={() => this.setState({ radioButton: 'question_' + [j] + '_b)' })} checked={this.state.radioButton === 'question_' + [j] + '_b)'} />
            <CheckBox title={'c) ' + i.items[0].c} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
              onPress={() => this.setState({ radioButton: 'question_' + [j] + '_c)' })} checked={this.state.radioButton === 'question_' + [j] + '_c)'} />
            <CheckBox title={'d) ' + i.items[0].d} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
              onPress={() => this.setState({ radioButton: 'question_' + [j] + '_d)' })} checked={this.state.radioButton === 'question_' + [j] + '_d)'} />
            <CheckBox title={'e) ' + i.items[0].e} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
              onPress={() => this.setState({ radioButton: 'question_' + [j] + '_e)' })} checked={this.state.radioButton === 'question_' + [j] + '_e)'} />
          </View>
        </TouchableOpacity>
      )
    });

    return (
      <ScrollView >
        {/*QUESTÕES*/}
        {questions}
        {/*QUESTÕES*/}
        {this._renderButton('Enviar', () => this.setState({ visibleModal: 1 }))}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bodyStyle: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

const mapStateToProps = (state) => {
  return { categorySelected: state.categories.selected };
};

export default connect(mapStateToProps, { fetchPost })(Question);

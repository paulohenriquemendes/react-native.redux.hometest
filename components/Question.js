import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, CheckBox, Button} from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { fetchPost } from '../actions';

class Question extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      radioButton : '',
      
    }
    this.selected = [];
  }
  
  componentDidMount() {
    this.props.fetchPost(this.props.category); // precisamos passar da categoria
  }

  setSeleteds(x){    
      for (let i = 0; i < this.selected.length; i++) {
        if (x[9] == this.selected[i][9]) {
          this.selected[i] = x;
          return false;
        }
        
    }
      
      this.selected.push(x)

  }

  render() {
   
    if (!this.props.categorySelected) {
      return <Text>Carregando . . .</Text>;
    }
    
    const questions = this.props.categorySelected.map((i, j)=>{
      this.setSeleteds(this.state.radioButton, j)
      return(
        <TouchableOpacity key={j}>
          <Text >{i.teacherName}</Text>
          <Text >{i.title} {i.body}</Text>
          <View>
          <CheckBox title={i.items[0].a} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ radioButton: 'question_'+[j]+'_a)'})} checked={this.state.radioButton === 'question_'+[j]+'_a)'} />
          <CheckBox title={i.items[0].b} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ radioButton: 'question_'+[j]+'_b)' })} checked={this.state.radioButton === 'question_'+[j]+'_b)'} />
          <CheckBox title={i.items[0].c} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ radioButton: 'question_'+[j]+'_c)'})} checked={this.state.radioButton === 'question_'+[j]+'_c)'} />
          <CheckBox title={i.items[0].d} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ radioButton: 'question_'+[j]+'_d)' })} checked={this.state.radioButton === 'question_'+[j]+'_d)'} />
          <CheckBox title={i.items[0].e} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ radioButton: 'question_'+[j]+'_e)'})} checked={this.state.radioButton === 'question_'+[j]+'_e)'} />
          </View>
          
          {/*
          <RadioForm 
          formHorizontal={true}
          animation={true}>

            <RadioButton labelHorizontal={true} key={i.items[0]._id}>

            <RadioButtonInput
                obj={i.items[0].a}
                index={i.items[0]._id}
                isSelected={this.state.correta === i.items[0].a }
                borderWidth={1}
                buttonInnerColor={'#e74c3c'}
                buttonOuterColor={this.state.coreta === i.items[0].a ? '#2196f3' : '#000'}
                buttonSize={20}
                onPress={()=>{
                  this.setState({sampleArray: (i.items[0].a)});
                  console.log(this.state.sampleArray)}}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 5}}
              />
              <RadioButtonLabel
                obj={i.items[0].a}
                index={i.items[0]._id}
                labelHorizontal={true}
                onPress={()=> this.setState({ correta: i.items[0].a})}
                labelStyle={{fontSize: 10, color: '#2ecc71'}}
                labelWrapStyle={{}}
              />  

              <RadioButtonInput
                obj={i.items[0].b}
                index={i.items[0]._id}
                isSelected={this.state.correta === i.items[0].b}
                borderWidth={1}
                buttonInnerColor={'#e74c3c'}
                buttonOuterColor={this.state.coreta === i.items[0].b ? '#2196f3' : '#000'}
                buttonSize={20}
                onPress={()=> this.setState({ correta: i.items[0].b})}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 5}}
              />
              <RadioButtonLabel
                obj={i.items[0].b}
                index={i.items[0]._id}
                labelHorizontal={true}
                onPress={()=> this.setState({ correta: i.items[0].b})}
                labelStyle={{fontSize: 10, color: '#2ecc71'}}
                labelWrapStyle={{}}
              />

              <RadioButtonInput
                obj={i.items[0].c}
                index={i.items[0]._id}
                isSelected={this.state.correta === i.items[0].c}
                borderWidth={1}
                buttonInnerColor={'#e74c3c'}
                buttonOuterColor={this.state.coreta === i.items[0].c? '#2196f3' : '#000'}
                buttonSize={20}
                onPress={()=> this.setState({ correta: i.items[0].c})}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 5}}
              />
              <RadioButtonLabel
                obj={i.items[0].c}
                index={i.items[0]._id}
                labelHorizontal={true}
                onPress={()=> this.setState({ correta: i.items[0].c})}
                labelStyle={{fontSize: 10, color: '#2ecc71'}}
                labelWrapStyle={{}}
              />

              <RadioButtonInput
                obj={i.items[0].d}
                index={i.items[0]._id}
                isSelected={this.state.correta === i.items[0].d}
                borderWidth={1}
                buttonInnerColor={'#e74c3c'}
                buttonOuterColor={this.state.coreta === i.items[0].d ? '#2196f3' : '#000'}
                buttonSize={20}
                onPress={()=> this.setState({ correta: i.items[0].d})}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 5}}
              />
              <RadioButtonLabel
                obj={i.items[0].d}
                index={i.items[0]._id}
                labelHorizontal={true}
                onPress={()=> this.setState({ correta: i.items[0].d})}
                labelStyle={{fontSize: 10, color: '#2ecc71'}}
                labelWrapStyle={{}}
              />

              <RadioButtonInput
                obj={i.items[0].e}
                index={i.items[0]._id}
                isSelected={this.state.correta === i.items[0].e}
                borderWidth={1}
                buttonInnerColor={'#e74c3c'}
                buttonOuterColor={this.state.coreta === i.items[0].e ? '#2196f3' : '#000'}
                buttonSize={20}
                onPress={()=> this.setState({ correta: i.items[0].e})}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 5}}
              />
              <RadioButtonLabel
                obj={i.items[0].e}
                index={i.items[0]._id}
                labelHorizontal={true}
                onPress={()=> this.setState({ correta: i.items[0].e})}
                labelStyle={{fontSize: 10, color: '#2ecc71'}}
                labelWrapStyle={{}}
              />

              </RadioButton>
          
        </RadioForm>


          
      
          
              */}
        </TouchableOpacity>
      )
      
    });
    
    return (
      <ScrollView>
        {questions}
        <Button onPress={()=>{console.log(this.selected)}}></Button>
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
  }
});

const mapStateToProps = (state) => {
  return { categorySelected: state.categories.selected };
};

export default connect(mapStateToProps, { fetchPost })(Question);

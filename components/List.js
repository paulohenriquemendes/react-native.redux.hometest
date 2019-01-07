import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

import { fetchPosts } from '../actions';

class List extends Component {
  // componentDidMount() {
    // chama action creator para pegar os dados da lista
    // this.props.fetchPosts();
  // }

  onQuestionPress(category) {
    
    Actions.question({category: category});
  }


  render() {

    return (
      <ScrollView>
          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('BIOLOGIA')}}
          raised icon={{name: 'code'}} title='BIOLOGIA'/>
          
          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('MATEMÁTICA')}}
          raised icon={{name: 'code'}} title='MATEMÁTICA'/>

          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('SOCIOLOGIA')}}
          raised icon={{name: 'code'}} title='SOCIOLOGIA'/>

          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('GEOGRAFIA')}}
          raised icon={{name: 'code'}} title='GEOGRAFIA'/>

          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('EDUC.FÍSICA')}}
          raised icon={{name: 'code'}} title='EDUC.FÍSICA'/>

          <Button style={{margin: 2}} onPress={()=>{this.onQuestionPress('TIC')}}
          raised icon={{name: 'code'}} title='TIC'/>
                
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories.all };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, CheckBox} from 'react-native-elements';

import { fetchPost } from '../actions';

class Question extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.category); // precisamos passar da categoria
  }

  render() {    

    if (!this.props.categorySelected) {
      return <Text>Carregando . . .</Text>;
    }
    
    const questions = this.props.categorySelected.map(i=>{
      return(
        <TouchableOpacity key={i._id}>
          <Text >{i.teacherName}</Text>
          <Text >{i.title} {i.body}</Text>
          <CheckBox title={i.items[0].a} checked={null} />
          <CheckBox title={i.items[0].b} checked={false} />
          <CheckBox title={i.items[0].c} checked={false} />
          <CheckBox title={i.items[0].d} checked={false} />
          <CheckBox title={i.items[0].e} checked={false} />

        </TouchableOpacity>
      )
      
    });
    
    return (
      <ScrollView>
        {questions}
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

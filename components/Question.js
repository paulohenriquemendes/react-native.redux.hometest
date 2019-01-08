import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, CheckBox} from 'react-native-elements';

import { fetchPost } from '../actions';

class Question extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      checked:false,
      checkedItemA : null,
      checkedItemB : null,
      checkedItemC : null,
      checkedItemD : null,
      checkedItemE : null
    }
  }



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
          <CheckBox title={i.items[0].a} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ checked: !this.state.checked })} checked={this.state.checked} />
          <CheckBox title={i.items[0].b} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ checked: !this.state.checked })} checked={this.state.checked} />
          <CheckBox title={i.items[0].c} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ checked: !this.state.checked })} checked={this.state.checked} />
          <CheckBox title={i.items[0].d} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ checked: !this.state.checked })} checked={this.state.checked} />
          <CheckBox title={i.items[0].e} uncheckedIcon='circle-o' checkedIcon='dot-circle-o'
           onPress={()=> this.setState({ checked: !this.state.checked })} checked={this.state.checked} />

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

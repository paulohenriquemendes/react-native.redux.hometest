import React, { Component } from 'react';
import {
  ScrollView,
  SectionList,
  StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { fetchPosts } from '../actions';

import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import GROUPED_ANIMATION_TYPES from '../grouped-animation-types.json';
const AnimatableSectionList = createAnimatableComponent(SectionList);

class List extends Component {
  state = {
    duration: 1000,
    toggledOn: false,
  };

  textRef = null;
  handleTextRef = ref => {
    this.textRef = ref;
  };

  handleDurationChange = duration => {
    this.setState({ duration: Math.round(duration) });
  };

  handleRowPressed = (componentRef, animationType) => {
    componentRef.setNativeProps({
      style: {
        zIndex: 1,
      },
    });
    componentRef.animate(animationType, this.state.duration).then(() => {
      componentRef.setNativeProps({
        style: {
          zIndex: 0,
        },
      });
    });
    if (this.textRef) {
      this.textRef[animationType](this.state.duration);
    }
  };

  onQuestionPress(category) {

    Actions.question({ category: category });
  }
  render() {
    return (
      <View animation="fadeIn" style={styles.container} useNativeDriver>

        <AnimatableSectionList
          animation="bounceInUp"
          contentInsetAdjustmentBehavior="automatic"
          duration={1100}
          delay={1400}
          keyExtractor={item => item}
          sections={GROUPED_ANIMATION_TYPES}
          removeClippedSubviews={false}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={() => (
            <ScrollView>

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#96D557", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('MATEMÁTICA') }}
                raised icon={{ name: 'equalizer' }} title='MATEMÁTICA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#D58357", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('GEOGRAFIA') }}
                raised icon={{ name: 'language' }} title='GEOGRAFIA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#D5577D", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('HISTÓRIA') }}
                raised icon={{ name: 'history' }} title='HISTÓRIA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#5762D5", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('FILOSOFIA') }}
                raised icon={{ name: 'wc' }} title='FILOSOFIA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#57D596", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('EDUC.FÍSICA') }}
                raised icon={{ name: 'done' }} title='EDUC.FÍSICA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#564747", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('SOCIOLOGIA') }}
                raised icon={{ name: 'group' }} title='SOCIOLOGIA' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#87D557", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('PORTUGUÊS') }}
                raised icon={{ name: 'face' }} title='PORTUGUÊS' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#C6C319", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('TIC') }}
                raised icon={{ name: 'computer' }} title='TIC' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#EF00EF", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('INGLÊS') }}
                raised icon={{ name: 'mood' }} title='INGLÊS' />

              <Button containerStyle={{ marginTop: 20 }} loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }} style={{ margin: 2 }} buttonStyle={{
                backgroundColor: "#0D23EF", borderColor: "transparent", borderWidth: 0, borderRadius: 5
              }} onPress={() => { this.onQuestionPress('ESPANHOL') }}
                raised icon={{ name: 'mood' }} title='ESPANHOL' />


            </ScrollView>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 120,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [
      {
        rotate: '8deg',
      },
      {
        translateY: -20,
      },
    ],
  },
  sectionHeader: {
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  return { categories: state.categories.all };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

import * as React from 'react';
import {
  StyleSheet, Button, Text, SafeAreaView, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { createNote } from './actions';

// write to database
function addNoteToTable(text, dispatch) {
  if (text !== '' && text !== null) {
    dispatch(createNote({ title: text }));
  }
}

function newNote(props) {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={() => props.switch(false)}>
          <Ionicons name="arrow-left" size={26} color="#2196F3" />
        </TouchableOpacity>
        <Text style={styles.myText}>New note:</Text>
      </View>
      <TextInput
        maxLength={20}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter note here"
      />
      <Button style={styles.myButton} title="Submit" onPress={() => { addNoteToTable(text, dispatch); onChangeText(''); props.switch(false); }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  myText: {
    marginLeft: 16,
    marginRight: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
  },
  addButton: {
    marginBottom: 20,
    marginTop: 15,
    marginLeft: 5,
  },
});

export default newNote;

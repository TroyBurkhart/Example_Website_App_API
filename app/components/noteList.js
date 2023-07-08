import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {
  ScrollView, StyleSheet, Alert, View, Text, TouchableOpacity, RefreshControl,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { fetchNotes, deleteNote } from './actions';
import NewNote from './newNote';

// convert date object to shortened mobile version
function handleDate(value) {
  const separatedData = value.split(' ');
  const date = `${separatedData[0]} ${separatedData[1]} ${separatedData[2]}`;
  return date;
}

// Main component
function NotesList() {
  // for storing refs to swipeables for closing
  const row = [];

  const dispatch = useDispatch();
  // states if needing to use pagination
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(100);

  // for flipping to new note page or back
  const [switchScreen, setSwitch] = React.useState(false);
  // redux update
  const notes = useSelector((store) => store.notes);
  React.useEffect(() => {
    dispatch(fetchNotes());
  }, []);
  const onRefresh = React.useCallback(() => {
    dispatch(fetchNotes());
  }, []);

  if (switchScreen) {
    return (
      <NewNote switch={setSwitch} />
    );
  } else {
    return (
      <View>
        <DataTable style={styles.dataTableStyle}>
          <DataTable.Header>
            <TouchableOpacity style={styles.addButton} onPress={() => { setSwitch(true); }}>
              <Ionicons name="plus" size={26} color="#2196F3" />
            </TouchableOpacity>
            <DataTable.Title>Note</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
          </DataTable.Header>
          <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} />}>
            {notes.slice(page * numberOfItemsPerPage, page * numberOfItemsPerPage + numberOfItemsPerPage).map((note, index) => (
              <Swipeable
                ref={(ref) => { row[index] = ref; return ref; }}
                id={note.id}
                style={note.style}
                rightButtons={([
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Delete', 'Are you sure you want to delete this entry?', [{
                        text: 'Cancel',
                        style: 'cancel',
                      },
                      { text: 'OK', onPress: () => { row[index].recenter(); dispatch(deleteNote(note.id)); } }]);
                    }}
                  ><Text style={styles.myDelete}>Delete</Text>
                  </TouchableOpacity>])}
              >
                <DataTable.Row>
                  <DataTable.Cell>{note.title}</DataTable.Cell>
                  <DataTable.Cell>{handleDate(note.date)}</DataTable.Cell>
                </DataTable.Row>
              </Swipeable>
            ))}
          </ScrollView>
        </DataTable>
      </View>
    );
  }
}

//  height is 50 per line in the table
const styles = StyleSheet.create({
  myDelete: {
    fontSize: 18,
    lineHeight: 50,
    letterSpacing: 0.25,
    backgroundColor: 'red',
    borderLeftWidth: 12,
  },
  addButton: {
    position: 'absolute',
    left: '90%',
    top: 11,
    zIndex: 3,
    elevation: 3,
  },
});

export default NotesList;

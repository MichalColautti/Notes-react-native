import AddNoteModal from '@/components/AddNoteModal';
import NoteList from '@/components/NoteList';
import noteService from '@/services/noteService';
import { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-web';

const NoteScreen = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchNotes();
    }, [])

    const fetchNotes = async () => {
        setLoading(true);
        const response = await noteService.getNotes();
        if(response.error) {
            setError(response.error);
            Alert.alert('Error',response.error);
        }
        else {
            setNotes(response.data);
            setError(null);
        }

        setLoading(false);
    }

    const addNote = async () => {
        if(newNote.trim() == '') {
            return;
        }

        const response = await noteService.addNote(newNote);
        if (response.error) {
            Alert.alert('Error', response.error);
        }
        else {
            setNotes([...notes, response.data]);
        }

        setNewNote('')
        setModalVisible(false)
    }

    return (
    <View style={styles.container}>
        { loading ? (
            <ActivityIndicator size='large' color='#007bff' />
        ) : (
            <>
                {error && <Text style={styles.errorText}>{error}</Text>}
                <NoteList notes={notes}/>
            </> 
        ) }

        <TouchableOpacity 
            style={styles.addButton}
            onPress={ () => setModalVisible(true) }
        >
            <Text style={styles.addButtonText}>+ Add Note</Text>
        </TouchableOpacity>

        <AddNoteModal 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
            newNote={newNote} 
            setNewNote={setNewNote} 
            addNote={addNote}
        />
    </View> );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 16,
    },
})

export default NoteScreen;
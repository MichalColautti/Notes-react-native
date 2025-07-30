import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = ({modalVisible,setModalVisible,newNote,setNewNote,addNote}) => {
    return (<View>
        <Modal
            visible={modalVisible}
            animationType='slide'
            transparent
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add a New Note</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter note...'
                        placeholderTextColor='#aaaaaa'
                        value={newNote}
                        onChangeText={setNewNote}
                    />
                    <View style={styles.modalButtonsRow}>
                        <TouchableOpacity 
                            style={styles.cancelButton}
                            onPress={ () => setModalVisible(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.saveNoteButton}
                            onPress={addNote}
                        >
                            <Text style={styles.saveNoteText}>Add note</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View> );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '70%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 16,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    modalButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#aaaaaa',
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#000000',
    },
    saveNoteButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        backgroundColor: '#007bff',
        flex: 1,
        alignItems: 'center',
    },
    saveNoteText: {
        fontSize: 16,
        color: '#ffffff'
    },
})

export default AddNoteModal;
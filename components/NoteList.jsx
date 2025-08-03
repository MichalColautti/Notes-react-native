import NoteItem from "@/components/NoteItem"
import { FlatList, View } from "react-native"

const NoteList = ({notes, onDelete}) => {
    return (<View>
        <FlatList
                data={notes}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => 
                    <NoteItem 
                        note={item}
                        onDelete={onDelete} 
                    />
                }
            />
    </View>)
}

export default NoteList
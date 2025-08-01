import NoteItem from "@/components/NoteItem"
import { FlatList, View } from "react-native"

const NoteList = ({notes}) => {
    return (<View>
        <FlatList
                data={notes}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => 
                    <NoteItem note={item}/>
                }
            />
    </View>)
}

export default NoteList
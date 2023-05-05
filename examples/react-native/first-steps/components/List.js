import { View, Text, FlatList, SectionList, StyleSheet } from "react-native"

const students = [
  { id: 1, name: 'Andrés', age: 28 },
  { id: 2, name: 'Nicolas', age: 29 },
  { id: 3, name: 'Sebastian', age: 30 },
  { id: 4, name: 'Oscar', age: 31 },
]

export const List = () => {
  return(
    <View>
      <Text>Esta es una lista</Text>
      <FlatList
        data={students}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const contacts = [
  {
    title: 'M',
    data: [
      { id: 1, name: 'Maria', age: 24 },
      { id: 2, name: 'Martin', age: 24 },
    ]
  },
  {
    title: 'J',
    data: [
      { id: 3, name: 'Juan', age: 24 },
    ]
  },
  {
    title: 'A',
    data: [
      { id: 4, name: 'Ana', age: 24 },
    ]
  },
]


export const SList = () => {
  return(
    <SectionList
      sections={contacts}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={style.sectionTitle}>{section.title}</Text>
      )}
    />
  )
}

const style = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'green'
  }
})
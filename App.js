import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ListItem from './components/ListIem';

export default function App() {
  const [listItem,updateList] = useState([]);
  const [element,writtenElement] = useState("");
  
  const checkThelist = ()=>{
    if(element ===''){
      Alert.alert("Please add a valid name")
    }
    else if (listItem.find(eachElement=>eachElement === element)){
      Alert.alert("Element already exists")
    }
    else {
      updateList(current=>[...current,element])
      writtenElement('')
    }
  }
  return (

    <View style={styles.container}>
      <Text style = {styles.headingText}>
        TO-DO-LIST
      </Text>
      <TextInput value={element} placeholder='Add work'
      onChangeText={writtenElement} style = {styles.input}/>
      <TouchableOpacity style = {styles.button} onPress={()=>{checkThelist()}}>
        
        <Text style = {styles.text}>
          Add
        </Text>
        </TouchableOpacity>
        {listItem.length? <FlatList
        data={listItem}
        keyExtractor = {item=>item}
        renderItem = {({item,index})=><ListItem index = {index} listItem={item} newList= {updateList} currentList={listItem} />}
        />:null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30,
  },
  input:{
    flexGrow:1,
    padding:5,
    elevation:2,
    borderRadius:20,
    marginTop:20,
    fontSize:30,
    height:50,
    width:300,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'pink'
  },
  button:{
    marginTop:10,
    height:30,
    width:80,
    backgroundColor:'#0088ff',
    borderRadius:20
  },
  headingText:{
    fontSize:60,
    fontWeight:'bold',
    color:'#04aa6d'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  }
});

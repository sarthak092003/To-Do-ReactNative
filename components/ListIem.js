import React from "react";
import { StyleSheet ,Text, TouchableOpacity, View} from "react-native";
const ListItem = ({index,listItem,newList,currentList})=>{
    const removeItem = ()=>{
        newList((current) =>current.filter((e)=>
            e!=currentList[index]

        ))
        
    }
    return(
        <View style = {styles.listStyle}>
        <View style = {styles.item}>
            <Text style = {styles.textStyle}>
            {listItem}
        </Text>
        </View>
        <TouchableOpacity style = {styles.removeButton}
        onPress = {
            ()=>{
                {removeItem()}
            }
        }>
        <View>
        <Text style = {[styles.textStyle]}>
        ⁻
        </Text>
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle :{
        marginTop:10,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:25
        
    },
    item:{
        backgroundColor:'pink',
        width:'70%',
        borderRadius:30,
        padding:10
    },
    removeButton:{
        backgroundColor:"red",
        width:'25%',
        borderRadius:30,
        padding:10
    }

})

export default ListItem;
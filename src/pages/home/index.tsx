import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.bar}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/menu.png')}/>
                <Image
                    style={styles.img}
                    source={require('../../../assets/user.png')}/>
            </View>
            <View>
                <Text style={styles.title}>Find the best coffee for you</Text>

                <View style={styles.containerSearch}>
                <AntDesign name="search1" style={{marginRight: 19, marginLeft: 18}} size={20} color="#52555A" />
                    <TextInput style={styles.input} placeholder="Find Your Coffee..."
                    placeholderTextColor={"#52555A"} />
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14",
        paddingLeft: 30,
        paddingRight: 30,
    },
    bar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        width: '100%',
        height: 40,
        paddingTop: 31,
        paddingBottom: 31,
    },
    img: {
        width: 30,
        height: 30,
    },
    containerSearch: {
        backgroundColor: "#141921",
        width: "100%",
        height: 45,
        borderRadius: 15,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 28
    },
    input: {
        color: "#52555A",
        textDecorationColor: "#52555A",
    },
    title: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 28,
        paddingTop: 31,
        paddingRight: 135,
        paddingBottom: 28
    },
})
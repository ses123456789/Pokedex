import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'

export default function (props) {
    const {stats}= props
      const barStyles = (num) => {
    let bgColorized;

    if (num <= 25) {
      bgColorized = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      bgColorized = "#F08700";
    } else if (num >= 50 && num < 75) {
      bgColorized = "#EFCA08";
    } else if (num >= 75) {
      bgColorized = "#6EEB83";
    }
    return {
      backgroundColor: bgColorized,
      width: `${num}%`,
    };
  };
  return (
    <View style={styles.content}>
      <Text style= {styles.title}>Base Stats</Text>
      {map(stats,(item, index) =>(
        <View key= {index} style= {styles.block}>
          <View style= {styles.blocktitle}>
              <Text style= {styles.statname}>  {capitalize(item.name)}</Text>
          </View>
          <View style= {styles.blockinfo}>
            <Text style= {styles.number} >{item.base}</Text>
            <View style= {styles.bgbar}>
                <View style= {[styles.bar, barStyles(item.base)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blocktitle: {
        width: "30%"
    },
    statname:{
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockinfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        width: "12%",
        fontSize: 12
    },
    bgbar: {
        backgroundColor: "dedede",
        width: "88%",
        borderRadius: 20,
        overflow: "hidden"
    },
    bar: {
        
        height: 5,
        borderRadius: 20,
    }
})
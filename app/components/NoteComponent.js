import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.noteWrapper}>
                <Text style={styles.noteText}> {this.props.val.date} </Text>
                <Text style={styles.noteText}> {this.props.val.note} </Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteRemove}>
                    <Text style={styles.noteRemoveText}>D</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noteWrapper: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    noteRemove: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2988b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteRemoveText: {
        color: 'white'
    }
})

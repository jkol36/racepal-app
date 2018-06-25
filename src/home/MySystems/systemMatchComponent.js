import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Theme} from '../../components'


export const SystemMatchComponent = props => {
	return (
		<View style={styles.matchText}>
	    <Text style={Theme.typography.large}> Matched: </Text> 
	    <Text style={Theme.typography.small}> 3 </Text>
	    <Text style={Theme.typography.regular}> Meetings, </Text>
	    <Text style={Theme.typography.small}> 8 </Text>
	    <Text style={Theme.typography.regular}> Races, </Text>
	    <Text style={Theme.typography.small}> 15 </Text>
	    <Text style={Theme.typography.regular}> Horses </Text>
	    <View style={styles.break}>
		    <Text style={[Theme.typography.regular, {fontWeight:'bold'}]}> Click horse name to view in form genius </Text>
		  </View>


	</View>
	)
}

const styles = StyleSheet.create({
	matchText: {
        flex:1,
        flexDirection: 'row',
        flexGrow:1,
        top:100,
        left: -50,
    },
    break: {
    	marginTop:20,
    	right:300,
    	width:400
    }

})
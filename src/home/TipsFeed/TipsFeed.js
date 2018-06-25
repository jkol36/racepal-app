import autobind from 'autobind-decorator'
import React from 'React'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements'
import { Header, Theme, SwipeCards } from '../../components'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import {firebaseRef} from '../../components/Firebase'


class TipHeader extends React.Component {
	constructor(props) {
		super(props)
	}
  componentWillMount() {
    console.log('tip header mounting')
    console.log('should have firebase', Firebase)
  }
	render(): React.Node {
		return (
			<View style={{marginTop:5}}>
			<Text> {this.props.title} </Text>
			<Text style={{alignItems:'left'}}> 
				 <Icon name='edit' size={20} containerStyle={{position: 'absolute', top: 0, left: 0}} />
      	 <Icon name='close' size={20} containerStyle={{position: 'absolute', top: 0, right: 0}} />
			</Text>
		 </View>
		)
	}
}
export default class TipsFeed extends React.Component {
	static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    },
    headerTintColor: '#fff',
    headerTitle: <Header title='TipsFeed' />,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily:'SFProText-Light'
    },
    headerLeft:null
  };
  constructor(props) {
  	super(props)
  	this.state = {
      tableHead: ['Win', 'Place', 'EW'],
      tableData: [
        ['$10'],
      ],
      trade: null
    }
  }

  @autobind
  placeTrade() {
  	console.log('called with', this.state.trade)
  }
	render(): React.Node {
		const state = this.state;
		return (
			<View> 
				<SwipeCards />
				{/*<View> 
					 <Button
         		title='Place Bet'
	         	style={styles.button}
	         	onPress={this.placeTrade}
	         	backgroundColor={'green'}
	        />
				</View>*/}
			</View>
		)
			
	}
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, marginBottom:160, backgroundColor: 'white' },
  head: { height: 40, backgroundColor: 'red' },
  text: { margin: 6, textAlign:'right', color:'black', backgroundColor:'black' },
  button: {width:120, marginLeft:115, top:250}
  
});



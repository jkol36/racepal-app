import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class PlaceTradeComponent extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		console.log('PlacetradeComponent mounting with', this.props)
	}

	render() {
		const TableHead = ['Win', 'Place', 'EW']
		const TableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
		return (
			<View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={TableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={TableData} textStyle={styles.text}/>
        </Table>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },
  btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' }
});
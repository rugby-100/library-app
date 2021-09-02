import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Transaction extends React.Component{
  constructor(){
    super()
    this.state={
      hasCameraPermissions: null,
      scanned:false,
      scannedData:'',
      buttonState:'normal'
    }
  
  }

  getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      /*status === "granted" is true when user has granted permission
       status === "granted" is false when user has not granted the 
       permission */
      hasCameraPermissions:status==='granted',

    })
  }

  handleBarCodeScanned=async({type,data})=>{
    this.setState({
      scanned:true,
      buttonState:'normal',
      scannedData:data
    })
  }

  render(){
    const hasCameraPermissions=this.state.hasCameraPermissions
    const scanned=this.state.scanned
    const buttonState=this.state.buttonState
    if(buttonState==='clicked'&&hasCameraPermissions){
      return(
        <BarCodeScanner
          onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )
    }
    else if(buttonState==='normal'){

    
    return (
      <View style={styles.container}>
        <View>
          <Image
          source={require('../assets/booklogo.jpg')}
          style={{width:200, height:200}}
          />
        </View>
      <View style={styles.scanBox}>
          <TextInput 
          style={styles.inputBox}
          placeholder='Book ID'/>
          <TouchableOpacity 
          style={styles.scanButton}
          onPress={this.getCameraPermissions}>
            <Text>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scanBox}>
          <TextInput 
          style={styles.inputBox}
          placeholder='Student ID'/>
          <TouchableOpacity 
          style={styles.scanButton}
          onPress={this.getCameraPermissions}>
            <Text>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scanBox}>
          <TouchableOpacity 
          style={styles.scanButton}
          onPress={this.getCameraPermissions}>
            <Text>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5dbe3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    borderWidth:2,
    borderColor:'gray',
    borderRightWidth:0,
    borderLeftWidth:2
  },
  scanBox: {
    flexDirection:'row',
    marginTop:10
  },
  scanButton: {
    paddingLeft:10, 
    justifyContent:'center', 
    backgroundColor:'#afb7c4',
    borderWidth:2,
    borderLeftWidth:0,
    borderColor:'gray'
  }
});

import { View, Text ,TouchhableOpacity, ScrollView , Image } from 
'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      {/* header */}
      <View style={{
       flexDirection:'row',
       justifyContent:'space-between',
       height: 60,
       alignItems:'center',
       backgroundColor:'red',
       marginHorizontal: 16,
       marginTop: 16,
       padding: 16,
       borderRadius: 40,
       
      }} >
        <Image resizeMode='contain' style={{height: 40, width: 150}} source={{uri:'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang-1024x252.png'}}/>
        <View style={{height: 40, width: 40,borderRadius:20,backgroundColor:'black'}}>
        </View> 
        </View>
        <View>
         <Text>Selamat datang di</Text>
         <Text style={{fontSize:32, color:'black', fontWeight:'bold'}}>Kantin mhs</Text>
        </View>

        {/*image/poto produk*/}
        <View style={{flexDirection:'row'}}>
        {/* 1 */}
        <View  style={{
          marginTop:32,
          borderWidth: 1,
          padding: 12,
          flex:1,
        }}>
        <View
          style={{
          height: 200,
          backgroundColor:'green',
          borderRadius:12,
          flexDirection:'row'
          }}> 
        </View>
        <Text>nasi lemak</Text>
        <Text>12.000</Text>
        </View>

          {/* 2 */}
        <View  style={{
          marginTop:32,
          borderWidth: 1,
          padding: 12,
          flex: 1,
        }}>
          <View style={{
            borderRadius:12,
            flexDirection:'row',
          height: 200,
          backgroundColor:'green',
        }}></View>
        <Text>nasi lemak</Text>
        <Text>12.000</Text>
      
        </View>
        </View>
        
        {/* <View style={{ 
              height:100,
              borderWidth: 1,
              backgroundColor:'black',
              borderRadius:12,
              marginTop:28,
              flexDirection:'row',
              marginHorizontal:16,
              height:150,
              borderWidth:1,

            }}>
            <Text style={{HorizomarginTop: 12, fontSize:16, marginntal:16}}>Nasi lemak</Text>
            <Text style={{HorizomarginTop: 4, fontSize:14, marginntal:16}}>12.000</Text></View> */}
    </View>
  )
}


export default App
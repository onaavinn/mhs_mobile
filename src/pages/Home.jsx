import { View, Text ,TouchhableOpacity, ScrollView , Image } from 
'react-native'
import React from 'react'

const Home = () => {
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
         <Text style={{fontSize:32, color:'black', fontWeight:'bold'}}>Kantin onaa</Text>
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
          <Image
          resizeMode="contain"
          style={{
            height:195,
            width:200,
            marginHorizontal: 16,
            borderRadius: 12,
          }}
          source={require('../assest/images/ramen.jpg')}
          />


        <View
          style={{
          height:8,
          
          borderRadius:12,
          flexDirection:'row'
          

          }}> 
        </View>
        <Text style={{color:'black'}}>Ramen</Text>
        <Text style={{color:'red'}}>27.000</Text>
        </View>
        
          {/* 2 */}
        <View  style={{
          marginTop:32,
          borderWidth: 1,
          padding: 12,
          flex: 1,
        }}>
            <Image
          resizeMode="contain"
          style={{
            height:195,
            width:200,
            marginHorizontal: 16,
            borderRadius: 12,
        }}
        source={require('../assest/images/ramen.jpg')}
        />

          <View style={{
            borderRadius:12,
            flexDirection:'row',
          height: 8,
         
        }}></View>
        <Text style={{color:'black'}}>Mie level</Text>
        <Text style={{color:'red'}}>12.000</Text>
      
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


export default Home
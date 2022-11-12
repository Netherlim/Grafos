import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {

  const image = require('./componentes/grafo.jpg');
function AddVerticie(){
alert('saulo gay')
}



  return (
    
    <View style={styles.container}>
       <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titleText}>Teoria dos Grafos</Text>
      </ImageBackground>
      <TouchableOpacity style={{...styles.botaoVerticie, marginTop:30,
}} onPress={()=>AddVerticie()}>
  <Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="add-outline" size={20} color={'white'} />
       <Text style={styles.textoBotao}>Adicionar verticie</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoVerticie}>
      <Ionicons style={{marginLeft:5, marginTop:8, marginRight:10}}  name="git-merge-outline" size={20} color={'white'} />
       <Text style={styles.textoBotao}>Inserir Aresta</Text> 
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign:'center',
    color:'black',
    fontSize:30,
    marginTop:20,
    fontWeight: "bold",
  },
  image: {
    width:'100%',
    height: 80,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    backgroundColor: '#494c4d',
   
  },
  botaoVerticie:{
    flexDirection:'row',
backgroundColor:'rgb(26, 200, 219)',
paddingBottom:10,
marginTop:10,
marginLeft:'10%',
marginRight:'10%',
borderRadius:10,
width:'80%',
height:40,
borderWidth:2,
borderColor:'white',
  },
  textoBotao:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10
  }
});

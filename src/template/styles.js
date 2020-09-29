const styles = {
    
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', //space-around
    
       
   },


   buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', //space-around
},

    h1: {
        color: 'red',
        textAlign: 'justify',

    } , 
    
    h2: {
      color: '#3B5699',
      fontWeight: 'bold',
      textAlign: 'justify',

  } , 

  h3: {
    color: '#3B5699',
   
    textAlign: 'justify',

  } , 

    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   },

   endText: {
        color: '#0d8898',
        alignSelf: 'flex-end',
        fontSize: 20,
   },

 
      inline: {
          flexDirection: 'row',
          marginTop: 30,
          borderColor: '#3B5699',
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
      },
     
      loginFooter: {
          marginTop: 100
        },
    
  
      textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
        }, 

          scroll: {
            backgroundColor: '#E1D7D8',
            padding: 30,
            flexDirection: 'column'
        },

      label: {
        color: '#0d8898',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 5,
        },

        alignRight: {
            alignSelf: 'flex-end'
        },
        
        
        inputView: {
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          marginTop:20
        },

        inputContainer: {
          borderWidth: 1,
          borderColor: '#3B5699',
          alignItems: 'stretch',
          backgroundColor: '#FFF',
          //height: 80,
          borderWidth: 2
        },

        inputStyle: {
          flex: 1,
          fontFamily: 'Verdana',
          fontSize: 20,
          paddingVertical: 10,
          
        },

        input: {
          borderColor: 'black',
          borderWidth: 1,
          height: 37,
          width: 250,
          backgroundColor: '#FFF',
        }
   


};
export default styles;
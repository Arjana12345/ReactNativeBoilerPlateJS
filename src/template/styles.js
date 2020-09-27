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
     
      footer: {
        marginTop: 100
      },
      labelContainer: {
        marginBottom: 20
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
        fontSize: 20
        },
        alignRight: {
            alignSelf: 'flex-end'
        },
        textInput: {
          height: 80,
          fontSize: 30,
          backgroundColor: '#FFF'
        },
   

        buttonBlueText: {
         
            fontSize: 20,
            color: '#3B5699'
           
        },

        buttonBigText: {

             
                fontSize: 20,
                fontWeight: 'bold'
             
        },




};
export default styles;
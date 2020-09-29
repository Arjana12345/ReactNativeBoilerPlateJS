
export function test(payload) {

    console.log(payload);
  
    return {
        
            type : 'TEST',
            fieldName: payload.fieldName,
            fieldValue : payload.fieldValue
        

    }
    
}
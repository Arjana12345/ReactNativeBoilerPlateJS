import axios from 'axios';


export function apiGetCall(type,url,payload)
{
      return function (dispatch) { 
        axios.get(url)
          .then((response) => dispatch({
            type: type,
            status: "SUCCESS",
            data: response.data
          })).catch((response) => dispatch({
            type: type,
            status: "FAILURE",
            error: response.error
          }))
      }

}

export function apiPostCall(type,url,payload)
{
     console.log(payload);
     return function (dispatch) { 
      axios.post(url, payload)
        .then((response) => dispatch({
          type: type,
          status: "SUCCESS",
          data: response.data
        })).catch((response) => dispatch({
          type: type,
          status: "FAILURE",
          error: response.error
        }))
    }

  
}




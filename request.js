

const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const sendRequest = function(method, url,data){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        //preparation of xhr
        xhr.open(method,url);
        // response type
        xhr.responseType = "json";
        //request header
        xhr.setRequestHeader('Content-Type',"application/json");
        //request is send
        xhr.send(data);
        //after getting data 
        xhr.onload = function(){
            error(xhr.status);
            resolve(xhr.response);
        }
        //error handling 
        xhr.onerror = function (){
            error();
        }
        const error = function(code){
            if(code && code >=400){
                reject('application error ');
            }else if(!code){
                reject('network error');
            }
            
        }
    });
    return promise;
    
    
}
const getData = function(){
    sendRequest('get','https://jsonplaceholder.typicode.com/todos/1')
           .then((responseData)=>{
               console.log(responseData);
           }).catch((err)=>{
               console.log(err);
           });

}

const sendData = function(){
     const bodyData = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
     sendRequest('POST','https://jsonplaceholder.typicode.com/posts',bodyData)
                 .then(responseData=>{
                     console.log(responseData);
                 });
}

getButton.addEventListener('click',getData);
sendButton.addEventListener('click',sendData);
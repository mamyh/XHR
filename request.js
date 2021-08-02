const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const sendRequest = function(method, url){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        //preparation of xhr
        xhr.open(method,url);
        // response type
        xhr.responseType = "json";
        //request is send
        xhr.send();
        //after getting data 
        xhr.onload = function(){
            resolve(xhr.response);
        }
    });
    return promise;
    
    
}
const getData = function(){
    sendRequest('get','https://jsonplaceholder.typicode.com/todos/1')
           .then((responseData)=>{
               console.log(responseData);
           });

}

const sendData = function(){
    
}

getButton.addEventListener('click',getData);
sendButton.addEventListener('click',sendData);
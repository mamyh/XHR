const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const sendRequest = function(method, url,data){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        //preparation of xhr
        xhr.open(method,url);
        // response type
        xhr.responseType = "json";
        //request is send
        xhr.send(data);
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
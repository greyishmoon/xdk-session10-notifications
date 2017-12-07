function createMessage(message, time){
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    //new Toast({content: 'Hello there!!!!', duration: 4000}); 	
    new Toast({content: message, duration: time}); 
}
function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
    $('#messageButton1').on('click', function() {
		createMessage('Hello there!!!', 4000);
	});
    
    $('#messageButton2').on('click', function() {
		createMessage('Did I show???', 2000);
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});
    
}
document.addEventListener("app.Ready", onAppReady, false) ;


function createMessage(message, time){
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    //new Toast({content: 'Hello there!!!!', duration: 4000}); 	
    new Toast({content: message, duration: time}); 
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Awesome!', 'Sucks']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}
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
    	'Are you feeling hungry?',  // message
        dialogDismissed,         // callback
        'Health check!!',            // title
        ["Starving!", "Nope - I\'m good."]                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        new Toast({content: "You're like a Diva when you're hungry!", duration: 3000});
        window.setTimeout(delayDialog,3000);
    } else if (buttonIndex==2) {
        new Toast({content: 'Awsome!!!', duration: 3000});
    }

}

function delayDialog() {
    
    new Toast({content: "Seriously - have a Snickers!", duration: 3000});
    
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
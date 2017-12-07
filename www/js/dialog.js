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
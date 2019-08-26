
var app = {
    register : function() {
        this.showSnackBar("Added Callback Lisnter");
        barcodeManager.addReadListner((data) => {
            alert(data);
        },
        (err) => {
            alert(err);
        });
    },

    pressTrigger: function() {
        this.showSnackBar("Scan Trigger Pressed")
        barcodeManager.pressTrigger((succes) => { 
            console.log(succes); 
        }, 
        (err) => {
            console.log(err);
        });
    },

    releaseTrigger: function() {
        this.showSnackBar("Scan Trigger Released")
        barcodeManager.releaseTrigger((succes) => {
            console.log(succes);
        }, 
        (err) => {
            console.log(err);
        });
    },

    showSnackBar : function(message) {
        let snackDiv = document.getElementById("snackbar");
        snackDiv.innerText = message;
        snackDiv.className = "show";
        setTimeout( () => {
           snackDiv.className = snackDiv.className.replace("show", ""); 
        }, 2000);
    }
    

};

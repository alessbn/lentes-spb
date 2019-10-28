    
    <script type="text/javascript">

        var x; //opción del menú seleccionada
        var v; //precio del producto
        var d; //descripción del producto
        var t = "Sigue intentando";

        function Select(x) {

            console.log(x);

            switch (x){

                case "Option 0":
                v = document.getElementById("Option 0").value;
                d = document.getElementById("Option 0").name;
                
                break;

                case "Option 1":
                v = document.getElementById("Option 1").value;
                d = document.getElementById("Option 1").name;
                
                break;

                case "Option 2":
                v = document.getElementById("Option 2").value;
                d = document.getElementById("Option 2").name;
                
                break;

                case "Option 3":
                v = document.getElementById("Option 3").value;
                d = document.getElementById("Option 3").name;

                break;

                case "Option 4":
                v = document.getElementById("Option 4").value;
                d = document.getElementById("Option 4").name;
                
                break;

                default:
                console.log(t);

            }

          }


           // Render the PayPal button into #paypal-button-container
        paypal.Buttons({


            // Set up the transaction
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        description: d,
                        amount: {
                            value: v
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
                    alert('Thank you. Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }

        }).render('#paypal-button-container');
     

        

    </script>

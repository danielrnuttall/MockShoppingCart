
    function changeColour(col)
    {
        document.getElementById("colourChangetxt").innerHTML = col;
    }

    
   function saveCartInfo()
   {

   }
   var cartQty = 0;
   function increaseQty()
   {
        cartQty++;
        document.getElementById("cartQtyTracker").innerHTML = cartQty;
   }

   
   function submitCartQty()
   {
    document.getElementById("cartNum").innerHTML = cartQty;
   }


   function decreaseQty()
   {
       if (cartQty <= 0)
       {
        document.getElementById("cartQtyTracker").innerHTML = 0;
       }
       else{

      cartQty--;
        
        document.getElementById("cartQtyTracker").innerHTML = cartQty;
    }
   }
    


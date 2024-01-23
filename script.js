var elementVar = document.getElementById("cartBadge");
//elementVar.setAttribute("value", add);

    var n = 0

function add (){
        console.log(n)
       return n+=1  
    }

    

    var items=[2,2]


      function listItems (items){
        for (var i =0;i<items.length;i++){
            $('#shcart').html(items[i])
           
        }
       
      }
     
      console.log(items,"hdhdh");

    
  var totalPrice=0
  function addPrice(n){
    return totalPrice+=n
  }

    $("#button1").on("click",function() {
         elementVar.setAttribute("value",add());
         items.push('Apple iphone 15')
         addPrice(999)
         console.log("items",items)
        
        localStorage.setItem("items",{})
       } );
       

       $("#button2").on("click",function() {
        elementVar.setAttribute("value",add());
        items.push('Apple iphone 15 Pro Max')
        addPrice(1199)
        console.log(totalPrice)
        listItems()
    
      } );
      $("#button3").on("click",function() {
        elementVar.setAttribute("value",add());
        addPrice(399)
        items.push('Apple Airpods 2 Gen')
        console.log(totalPrice)
        listItems()
    
      } );
      $("#button4").on("click",function() {
        elementVar.setAttribute("value",add());
        addPrice(249)
        items.push('Apple Watch SE')
        console.log(totalPrice)
        listItems()
    
      } );
      $("#button5").on("click",function() {
        elementVar.setAttribute("value",add());
        addPrice(1299)
        console.log(totalPrice)
        listItems()
    
      } );
      $("#button6").on("click",function() {
        elementVar.setAttribute("value",add());
        addPrice(1990)
        console.log(totalPrice)
        listItems()
    
      } );

      
     
      <script type="text/javascript">
         function refresh()
         {
            location.reload();
         }
           
      </script>
      <script>
         $("#cEmail").click(function(){
            $("#changeEmail").fadeIn();
            $("#changeNama").hide();
            $("#changeLogolink").hide();
            $("#changeGambar").hide();
            $("#changeLinkgroup").hide();
            $("#changeSender").hide();
         })
         $("#cNama").click(function(){
            $("#changeEmail").hide();
            $("#changeNama").fadeIn();
            $("#changeLogolink").hide();
            $("#changeGambar").hide();
            $("#changeLinkgroup").hide();
            $("#changeSender").hide();
         })
         $("#cLogolink").click(function(){
            $("#changeEmail").hide();
            $("#changeNama").hide();
            $("#changeLogolink").fadeIn();
            $("#changeGambar").hide();
            $("#changeLinkgroup").hide();
            $("#changeSender").hide();
         })
         $("#cGambar").click(function(){
            $("#changeEmail").hide();
            $("#changeNama").hide();
            $("#changeLogolink").hide();
            $("#changeGambar").fadeIn();
            $("#changeLinkgroup").hide();  
            $("#changeSender").hide(); 
         })
         $("#cLinkgroup").click(function(){
            $("#changeEmail").hide();
            $("#changeNama").hide();
            $("#changeLogolink").hide();
            $("#changeGambar").hide();
            $("#changeLinkgroup").fadeIn();
            $("#changeSender").hide();
         })
         $("#cSender").click(function(){
            $("#changeEmail").hide();
            $("#changeNama").hide();
            $("#changeLogolink").hide();
            $("#changeGambar").hide();
            $("#changeLinkgroup").hide();
            $("#changeSender").fadeIn();
         })  
      </script>
      <script>
         $("#btnEmail").click(function(){
            var ngEmail = $("#ngEmail").val();
            $.post("adonxd/data.php",{
                           email:ngEmail
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valEmail").val(ngEmail);
                    $("#currentResult").html(0);
                    }
                   })
         })
         
         $("#btnNama").click(function(){
            var ngNama = $("#ngNama").val();
            $.post("adonxd/data.php",{
                           nama:ngNama
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valNama").val(ngNama);
                    }
                   })
         })
         
         $("#btnLogolink").click(function(){
            var ngLogolink = $("#ngLogolink").val();
            $.post("adonxd/data.php",{
                           logolink:ngLogolink
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valLogolink").val(ngLogolink);
                    }
                   })
         })
         
         $("#btnGambar").click(function(){
            var ngGambar = $("#ngGambar").val();
            $.post("adonxd/data.php",{
                           gambar:ngGambar
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valGambar").val(ngGambar);
                    }
                   })
         })
         
         $("#btnLinkgroup").click(function(){
            var ngLinkgroup = $("#ngLinkgroup").val();
            $.post("adonxd/data.php",{
                           linkgroup:ngLinkgroup
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valLinkgroup").val(ngLinkgroup);                              }
                   })
         })
         
         $("#btnSender").click(function(){
            var ngSender = $("#ngSender").val();
            $.post("adonxd/data.php",{
                           sender:ngSender
                   },function(ngE){
                    if(ngE = "Sukses"){
                    $("#valSender").val(ngSender);                              }
                   })
         })
      </script>

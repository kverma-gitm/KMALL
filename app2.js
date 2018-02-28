 // main document ready function to check if dom is loaded fully or not

  $( document ).ready(function() {


    var myFacebookToken = localStorage.getItem("ft");;
    function getFacebookInfo(){        

        $.ajax('https://graph.facebook.com/me/?fields=name,email,id,picture,hometown,birthday,gender,feed,first_name&access_token='+myFacebookToken,{

                success : function(response){
                    
                        $("#feed0").text(response.feed.data[0].story);
                        $("#feed1").text(response.feed.data[1].story);
                        $("#feed2").text(response.feed.data[2].story);
                        $("#feed3").text(response.feed.data[3].story);
                        $("#feed4").text(response.feed.data[4].story);

                        $("#feed5").text(response.feed.data[0].created_time);
                        $("#feed6").text(response.feed.data[1].created_time);
                        $("#feed7").text(response.feed.data[2].created_time);
                        $("#feed8").text(response.feed.data[3].created_time);
                        $("#feed9").text(response.feed.data[4].created_time);
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });
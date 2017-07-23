 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {


    var myFacebookToken = 'EAACEdEose0cBAAhZCukqIWgKU1BZBQo2FEDawFtb5KK7MA7LjI5yiBQgY2SsPqDmLAmztPoJ1JfK8LDgXZBbv9ksKcvGYdnlsF9f8Kcfjaxqpv6blwyoQkRU1pwDZClhZBd5TbCffrBk3L4y0KiOxbUhiaLNMuohgDQRJC1cS9huN4sLlOCQcPDa5YBPo4w0ZD';
    localStorage.setItem("ft",myFacebookToken);
    function getFacebookInfo(){        

        $.ajax('https://graph.facebook.com/me/?fields=name,email,id,picture,hometown,birthday,gender,feed,first_name&access_token='+myFacebookToken,{

                success : function(response){
                    $("#myName").text(response.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myEmail").text(response.email);
                    $("#myHometown").text(response.hometown.name);
                    $("#gender").text(response.gender);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    var imageSrc = "https://graph.facebook.com/me/picture?access_token="+myFacebookToken;
                    var input = document.getElementById('pp');
                    input.src = imageSrc;
                        $("#feed0").text(response.feed.data[0]);
                        $("#feed1").text(response.feed.data[1].story);
                        $("#feed2").text(response.feed.data[2].story);
                        $("#feed3").text(response.feed.data[3].story);
                        $("#feed4").text(response.feed.data[4].story);
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });
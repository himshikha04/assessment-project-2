window.onload=function ()
{
    var xhr= new XMLHttpRequest();
    var url = "../women.json";
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status==200)
        {
            var users = JSON.parse(this.responseText);

            var output='';
                output+=//first container
                 '<div class="container">'+
                '<div class="box1">'+
                '<img src='+users[2].jump_suits[0].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[0].brand+
                '<br> '+ users[2].jump_suits[0].description+
                '<br> '+users[2].jump_suits[0].category+
                '<br> '+ users[2].jump_suits[0].price+
                '</p>'+'</div>'+
                '<div class="box2">'+
                '<img src='+users[2].jump_suits[1].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[1].brand+
                '<br> '+ users[2].jump_suits[1].description+
                '<br> '+users[2].jump_suits[1].category+
                '<br> '+ users[2].jump_suits[1].price+
                '</p>'+'</div>'+
                '<div class="box3">'+
                '<img src='+users[2].jump_suits[2].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[2].brand+
                '<br> '+ users[2].jump_suits[2].description+
                '<br> '+users[2].jump_suits[2].category+
                '<br> '+ users[2].jump_suits[2].price+
                '</p>'+'</div>'+
                '</div>'+
                //second container
                '<div class="container">'+
                '<div class="box4">'+
                '<img src='+users[2].jump_suits[3].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[3].brand+
                '<br> '+ users[2].jump_suits[3].description+
                '<br> '+users[2].jump_suits[3].category+
                '<br> '+ users[2].jump_suits[3].price+
                '</p>'+'</div>'+
                '<div class="box5">'+
                '<img src='+users[2].jump_suits[4].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[4].brand+
                '<br> '+ users[2].jump_suits[4].description+
                '<br> '+users[2].jump_suits[4].category+
                '<br> '+ users[2].jump_suits[4].price+
                '</p>'+'</div>'+
                '<div class="box6">'+
                '<img src='+users[2].jump_suits[5].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[2].jump_suits[5].brand+
                '<br>'+ users[2].jump_suits[5].description+
                '<br> '+users[2].jump_suits[5].category+
                '<br> '+ users[2].jump_suits[5].price+
                '</p>'+'</div>'+
                '</div>';  
            
            document.getElementById('container').innerHTML = output;
        }
    }
    xhr.send();
};
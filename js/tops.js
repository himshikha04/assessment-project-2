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
                '<img src='+users[4].tops[0].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[0].brand+
                '<br> '+ users[4].tops[0].description+
                '<br> '+users[4].tops[0].category+
                '<br> '+ users[4].tops[0].price+
                '</p>'+'</div>'+
                '<div class="box2">'+
                '<img src='+users[4].tops[1].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[1].brand+
                '<br> '+ users[4].tops[1].description+
                '<br> '+users[4].tops[1].category+
                '<br> '+ users[4].tops[1].price+
                '</p>'+'</div>'+
                '<div class="box3">'+
                '<img src='+users[4].tops[2].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[2].brand+
                '<br> '+ users[4].tops[2].description+
                '<br> '+users[4].tops[2].category+
                '<br> '+ users[4].tops[2].price+
                '</p>'+'</div>'+
                '</div>'+
                //second container
                '<div class="container">'+
                '<div class="box4">'+
                '<img src='+users[4].tops[3].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[3].brand+
                '<br> '+ users[4].tops[3].description+
                '<br> '+users[4].tops[3].category+
                '<br> '+ users[4].tops[3].price+
                '</p>'+'</div>'+
                '<div class="box5">'+
                '<img src='+users[4].tops[4].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[4].brand+
                '<br> '+ users[4].tops[4].description+
                '<br> '+users[4].tops[4].category+
                '<br> '+ users[4].tops[4].price+
                '</p>'+'</div>'+
                '<div class="box6">'+
                '<img src='+users[4].tops[5].image+' style= "width: 250px; height:300px;">'+
                '<p style="text-align: center; font-size: 20px; color: black; ">'+ users[4].tops[5].brand+
                '<br> '+ users[4].tops[5].description+
                '<br> '+users[4].tops[5].category+
                '<br> '+ users[4].tops[5].price+
                '</p>'+'</div>'+
                '</div>';  
            
            document.getElementById('container').innerHTML = output;
            
        }
    }
    xhr.send();
};
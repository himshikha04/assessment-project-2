function openNav()
{
    document.getElementById("mySidenav").style.width="250px"
}
function closeNav()
{
    document.getElementById("mySidenav").style.width="0";
}
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
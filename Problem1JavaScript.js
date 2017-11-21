
 var timerid = null;
function move()
{
    document.getElementById('robot').style.right =
        parseInt(document.getElementById('robot').style.right) + 1 + 'px';
}
window.onload=function()
{
    document.getElementById('robot').onclick=function(){

        if(timerid == null){
            timerid = setInterval("move()", 10);
            //timerid = setInterval("ve()", 10);
        }else{
            clearInterval(timerid);
            timerid = null;
        }
    }
    var button_Stop = document.getElementById('btnStop');

    button_Stop.onclick= reloadPage;

    function reloadPage(){
        //window.location.reload();
        CaptionChange();
        document.getElementById('robot').style.right =
            parseInt(document.getElementById('robot').style.right) + 1 + 'px';

    }
}

function  CaptionChange() {
    var CaptionChange=document.getElementById("btnStop");
    if (CaptionChange.value=="START")
//document.getElementById("btnStop").value="STOP";
    //document.getElementById("btnStop").value="STOP";
        CaptionChange.value='STOP'
    else
        CaptionChange.value="START"

};

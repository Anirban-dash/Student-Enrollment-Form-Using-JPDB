var token='90932417|-31949269994274047|90955712';
var dbname='SCHOOL-DB';
var relation="STUDENT-TABLE";
function disableAll() {
    $("#roll").focus();
    $("#name").prop("disabled", true);
    $("#cls").prop("disabled", true);
    $("#dob").prop("disabled", true);
    $("#doe").prop("disabled", true);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
}
disableAll();
function findRoll(ele){
    var roll=ele.value;
    var obj={
        Roll_No:roll
    };
    var jsnobj=JSON.stringify(obj);
    var request=createGET_BY_KEYRequest(token,dbname,relation,jsnobj);
    jQuery.ajaxSetup({async: false});
    var res=executeCommand(request,"/api/irl");
    jQuery.ajaxSetup({async: true});
    if(res.status=400){
        $("#name").prop("disabled", false);
        $("#name").focus();
        $("#cls").prop("disabled", false);
        $("#dob").prop("disabled", false);
        $("#doe").prop("disabled", false);
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
    }else{
        $("#roll").prop("disabled", true);
        var data = JSON.parse(res);
        $("#name").val(data.Full_name);
        $("#cls").val(data.Class);
        $("#dob").val(data.Birth_date);
    }
}
function saveData(){
    var roll=$("#roll").val();
    var name=$("#name").val()
    var cls=$("#cls").val()
    var dob=$("#dob").val()
    var doe=$("#doe").val()
}
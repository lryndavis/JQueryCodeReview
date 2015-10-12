$(document).ready(function() {
  $("form.blank-form").submit(function(event) {
    var favthing1Input = $("input#favthing1").val();
    var favthing2Input = $("input#favthing2").val();
    var favthing3Input = $("input#favthing3").val();
    var favthing4Input = $("input#favthing4").val();
    var favthing5Input = $("input#favthing5").val();


    $(".favthing1").text(favthing1Input);
    $(".favthing2").text(favthing2Input);
    $(".favthing3").text(favthing3Input);
    $(".favthing4").text(favthing4Input);
    $(".favthing5").text(favthing5Input);
    

    $("#your_list").show();

    event.preventDefault();
  });
});
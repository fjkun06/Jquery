$(function(){
    var file = $('#file');
    


   $('#btn').click(function(e){
       e.preventDefault();
         $('.kool').removeClass("state");
         $('#all').prepend(
         `<div class="state kool">
            <div class="container">
                <div class="one">
                    <img src="Capture.PNG" alt="Coco" class="pic">
                </div>
                <div class="txt">${$('#texto').val()}</div>
            </div>
        </div>
        `);

        file.change(function(x) {
            var image = document.querySelector('img');
           image.src = URL.createObjectURL(x.target.files[0]);
       });
   });
    

});
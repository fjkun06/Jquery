$(function(){
    var file = $('#file');
    var area = $('#ta');
    var rcv = $('#txt');
    var con = $('#container');
    var all = document.getElementById('all');
    
    
    let hml = `
    <div class="state" id="kool">
        <div id="container">
            <div id="one">
                <img src="" alt="Coco" id="pic">
            </div>
            <div id="txt"></div>
        </div>
    </div>
    `;
    $('#all').prepend(hml);

    //Previewing Image
    file.change(function(x) {
         var image = document.getElementById('pic');
        image.src = URL.createObjectURL(x.target.files[0]);
    });
   
    //Previewing Image
    $('textarea').keyup(function(x) {
        // `
        $('#txt').text(`${x.target.value}`);
        // `<p>${x.target.value}</p>`
         console.log(x.target.value);
         console.log(rcv.val())
    });

    
    $('#btn').click(function(){
        $('#kool').removeClass("state");
        //Printing text from text Area to box
        area.val("Enter your text here.");
    });
        
});
var i = 0; // Start point
var images = [];
var time = 2000;

// Image list
images[0] = '/IMG/about_us/img1.jpg';
images[1] = '/IMG/about_us/img2.jpg';
images[2] = '/IMG/about_us/img3.jpg';
images[3] = '/IMG/about_us/img4.jpg';
images[3] = '/IMG/about_us/img5.jpg';

// Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
i++;
    } else 
    {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;

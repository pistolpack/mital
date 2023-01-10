let WillSmith_img = [
"https://images.indianexpress.com/2022/03/pulse22.jpg",
"https://starsunfolded.com/wp-content/uploads/2022/03/Ashok-Kumar-Mittal.jpg",
"https://www.5dariyanews.com/Uploads/2022/05/02/en-news-19283530-7-large.jpg",
"https://www.thehighereducationreview.com/rank_list_images/z1r10Lovely%20Profesional%20University.jpg"
];


// edit the DOM, grab images and replace it with will Smith

const imgs = document.getElementsByTagName("img")

for(let i=0;i<imgs.length;i++){
  imgs[i].src = WillSmith_img[i%3];
}

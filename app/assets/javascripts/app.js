$('tr[data-link]').click(function(){
  window.location = this.dataset.link;
});

$(".vegas").vegas({
    slides: [
        { src: "photos/IMG_0781.jpg" },
        { src: "photos/IMG_0882.jpg" }

    ]
});

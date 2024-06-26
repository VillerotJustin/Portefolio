
$("#content").css("display: block;"); // assuming you have jquery
$("#javascriptrequired").css("display: none;"); // turn javascript message off

$(window).on('load',function(){
    gsap.to('#loader',1,{y:"-100%"});
    gsap.to('#loader',1,{opacity:0});
    gsap.to('#loader',0,{display:"none",delay:1});
    gsap.to('#header',0,{display:"block",delay:1})
    gsap.to('#navigation-content',0,{display:"none"});
    gsap.to('#SoulGarden',0,{display:"none"});
    gsap.to('#BUTProjects',0,{display:"none"});
    gsap.to('#BUTProject1',0,{display:"none"});
    gsap.to('#BUTProject2',0,{display:"none"});
    gsap.to('#BUTProject3',0,{display:"none"});
    gsap.to('#BUTProject4',0,{display:"none"});
    gsap.to('#BUTProject5',0,{display:"none"});
    gsap.to('#BUTProject6',0,{display:"none"});
    gsap.to('#BUTProject7',0,{display:"none"});
    gsap.to('#BUTProject8',0,{display:"none"});
    gsap.to('#BUTProject9',0,{display:"none"});
    gsap.to('#BUTProject10',0,{display:"none"});
    gsap.to('#BUTProject11',0,{display:"none"});
    gsap.to('#BUTProject12',0,{display:"none"});
    gsap.to('#BUTProject13',0,{display:"none"});
    gsap.to('#BUTProject14',0,{display:"none"});
    gsap.to('#BUTProject15',0,{display:"none"});
    gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#about',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })
    $('#about-link-home').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
      gsap.to('#header',0,{display:"none"});
      gsap.to('#blog',0,{display:"none"});
      gsap.to('#portfolio',0,{display:"none"});
      gsap.to('#BUTProject1',0,{display:"none"});
      gsap.to('#BUTProject2',0,{display:"none"});
      gsap.to('#BUTProject3',0,{display:"none"});
      gsap.to('#BUTProject4',0,{display:"none"});
      gsap.to('#BUTProject5',0,{display:"none"});
      gsap.to('#BUTProject6',0,{display:"none"});
      gsap.to('#BUTProject7',0,{display:"none"});
      gsap.to('#BUTProject8',0,{display:"none"});
      gsap.to('#BUTProject9',0,{display:"none"});
      gsap.to('#BUTProject10',0,{display:"none"});
      gsap.to('#BUTProject11',0,{display:"none"});
      gsap.to('#BUTProject12',0,{display:"none"});
      gsap.to('#BUTProject13',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#SoulGarden',0,{display:"none"});
      gsap.to('#BUTProjects',0,{display:"none"});
      gsap.to('#contact',0,{display:"none"});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#about',0,{display:"block",delay:.7});
      gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
    $('#contact-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#contact',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })
    $('#contact-link-home').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
      gsap.to('#header',0,{display:"none"});
      gsap.to('#about',0,{display:"none"});
      gsap.to('#blog',0,{display:"none"});
      gsap.to('#portfolio',0,{display:"none"});
      gsap.to('#BUTProject1',0,{display:"none"});
      gsap.to('#BUTProject2',0,{display:"none"});
      gsap.to('#BUTProject3',0,{display:"none"});
      gsap.to('#BUTProject4',0,{display:"none"});
      gsap.to('#BUTProject5',0,{display:"none"});
      gsap.to('#BUTProject6',0,{display:"none"});
      gsap.to('#BUTProject7',0,{display:"none"});
      gsap.to('#BUTProject8',0,{display:"none"});
      gsap.to('#BUTProject9',0,{display:"none"});
      gsap.to('#BUTProject10',0,{display:"none"});
      gsap.to('#BUTProject11',0,{display:"none"});
      gsap.to('#BUTProject12',0,{display:"none"});
      gsap.to('#BUTProject13',0,{display:"none"});
      gsap.to('#SoulGarden',0,{display:"none"});
      gsap.to('#BUTProjects',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#contact',0,{display:"block",delay:.7});
      gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
    $('#portfolio-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#portfolio',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })
    $('#portfolio-link-home').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
      gsap.to('#header',0,{display:"none"});
      gsap.to('#about',0,{display:"none"});
      gsap.to('#contact',0,{display:"none"});
      gsap.to('#blog',0,{display:"none"});
      gsap.to('#SoulGarden',0,{display:"none"});
      gsap.to('#BUTProjects',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#portfolio',0,{display:"block",delay:.7});
      gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
    $('#BUTProjects-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProjects',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })
    $('#SoulGarden-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#SoulGarden',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })
    $('#home-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#header',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })


    $('#BUTProject1-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject1',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject2-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject2',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject3-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject3',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject4-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject4',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject5-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject5',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject6-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject6',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject7-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject7',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject8-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject8',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject9-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject9',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject11-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject11',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject12-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject12',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject13-link').on('click',function(){
        gsap.to('#navigation-content',0,{display:"none",delay:.7});
        gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
        gsap.to('#header',0,{display:"none"});
        gsap.to('#about',0,{display:"none"});
        gsap.to('#contact',0,{display:"none"});
        gsap.to('#SoulGarden',0,{display:"none"});
        gsap.to('#BUTProjects',0,{display:"none"});
        gsap.to('#blog',0,{display:"none"});
        gsap.to('#portfolio',0,{display:"none"});
        gsap.to('#BUTProject1',0,{display:"none"});
        gsap.to('#BUTProject2',0,{display:"none"});
        gsap.to('#BUTProject3',0,{display:"none"});
        gsap.to('#BUTProject4',0,{display:"none"});
        gsap.to('#BUTProject5',0,{display:"none"});
        gsap.to('#BUTProject6',0,{display:"none"});
        gsap.to('#BUTProject7',0,{display:"none"});
        gsap.to('#BUTProject8',0,{display:"none"});
        gsap.to('#BUTProject9',0,{display:"none"});
        gsap.to('#BUTProject10',0,{display:"none"});
        gsap.to('#BUTProject11',0,{display:"none"});
        gsap.to('#BUTProject12',0,{display:"none"});
        gsap.to('#BUTProject13',0,{display:"none"});
        gsap.to('#BUTProject14',0,{display:"none"});
        gsap.to('#BUTProject15',0,{display:"none"});
        gsap.to('#breaker',0,{display:"block"});
        gsap.to('#breaker-two',0,{display:"block",delay:.1});
        gsap.to('#breaker',0,{display:"none",delay:2});
        gsap.to('#breaker-two',0,{display:"none",delay:2});
        gsap.to('#BUTProject13',0,{display:"block",delay:.7});
        gsap.to('#navigation-content',0,{display:'flex',delay:2});
    })

    $('#BUTProject14-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
      gsap.to('#header',0,{display:"none"});
      gsap.to('#about',0,{display:"none"});
      gsap.to('#contact',0,{display:"none"});
      gsap.to('#SoulGarden',0,{display:"none"});
      gsap.to('#BUTProjects',0,{display:"none"});
      gsap.to('#blog',0,{display:"none"});
      gsap.to('#portfolio',0,{display:"none"});
      gsap.to('#BUTProject1',0,{display:"none"});
      gsap.to('#BUTProject2',0,{display:"none"});
      gsap.to('#BUTProject3',0,{display:"none"});
      gsap.to('#BUTProject4',0,{display:"none"});
      gsap.to('#BUTProject5',0,{display:"none"});
      gsap.to('#BUTProject6',0,{display:"none"});
      gsap.to('#BUTProject7',0,{display:"none"});
      gsap.to('#BUTProject8',0,{display:"none"});
      gsap.to('#BUTProject9',0,{display:"none"});
      gsap.to('#BUTProject10',0,{display:"none"});
      gsap.to('#BUTProject11',0,{display:"none"});
      gsap.to('#BUTProject12',0,{display:"none"});
      gsap.to('#BUTProject13',0,{display:"none"});
      gsap.to('#BUTProject14',0,{display:"none"});
      gsap.to('#BUTProject15',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#BUTProject14',0,{display:"block",delay:.7});
      gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })

  $('#BUTProject15-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#SoulGarden',0,{display:"none"});
    gsap.to('#BUTProjects',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#BUTProject1',0,{display:"none"});
    gsap.to('#BUTProject2',0,{display:"none"});
    gsap.to('#BUTProject3',0,{display:"none"});
    gsap.to('#BUTProject4',0,{display:"none"});
    gsap.to('#BUTProject5',0,{display:"none"});
    gsap.to('#BUTProject6',0,{display:"none"});
    gsap.to('#BUTProject7',0,{display:"none"});
    gsap.to('#BUTProject8',0,{display:"none"});
    gsap.to('#BUTProject9',0,{display:"none"});
    gsap.to('#BUTProject10',0,{display:"none"});
    gsap.to('#BUTProject11',0,{display:"none"});
    gsap.to('#BUTProject12',0,{display:"none"});
    gsap.to('#BUTProject13',0,{display:"none"});
    gsap.to('#BUTProject14',0,{display:"none"});
    gsap.to('#BUTProject15',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#BUTProject15',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }


  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})
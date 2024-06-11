

function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `frames/frame_000.jpg
    frames/frame_001.jpg
    frames/frame_002.jpg
    frames/frame_003.jpg
    frames/frame_004.jpg
    frames/frame_005.jpg
    frames/frame_006.jpg
    frames/frame_007.jpg
    frames/frame_008.jpg
    frames/frame_009.jpg
    frames/frame_010.jpg
    frames/frame_011.jpg
    frames/frame_012.jpg
    frames/frame_013.jpg
    frames/frame_014.jpg
    frames/frame_015.jpg
    frames/frame_016.jpg
    frames/frame_017.jpg
    frames/frame_018.jpg
    frames/frame_019.jpg
    frames/frame_020.jpg
    frames/frame_021.jpg
    frames/frame_022.jpg
    frames/frame_023.jpg
    frames/frame_024.jpg
    frames/frame_025.jpg
    frames/frame_026.jpg
    frames/frame_027.jpg
    frames/frame_028.jpg
    frames/frame_029.jpg
    frames/frame_030.jpg
    frames/frame_031.jpg
    frames/frame_032.jpg
    frames/frame_033.jpg
    frames/frame_034.jpg
    frames/frame_035.jpg
    frames/frame_036.jpg
    frames/frame_037.jpg
    frames/frame_038.jpg
    frames/frame_039.jpg
    frames/frame_040.jpg
    frames/frame_041.jpg
    frames/frame_042.jpg
    frames/frame_043.jpg
    frames/frame_044.jpg
    frames/frame_045.jpg
    frames/frame_046.jpg
    frames/frame_047.jpg
    frames/frame_048.jpg
    frames/frame_049.jpg
    frames/frame_050.jpg
    frames/frame_051.jpg
    frames/frame_052.jpg
    frames/frame_053.jpg
    frames/frame_054.jpg
    frames/frame_055.jpg
    frames/frame_056.jpg
    frames/frame_057.jpg
    frames/frame_058.jpg
    frames/frame_059.jpg
    frames/frame_060.jpg
    frames/frame_061.jpg
    frames/frame_062.jpg
    frames/frame_063.jpg
    frames/frame_064.jpg
    frames/frame_065.jpg
    frames/frame_066.jpg
    frames/frame_067.jpg
    frames/frame_068.jpg
    frames/frame_069.jpg
    frames/frame_070.jpg
    frames/frame_071.jpg
    frames/frame_072.jpg
    frames/frame_073.jpg
    frames/frame_074.jpg
    frames/frame_075.jpg
    frames/frame_076.jpg
    frames/frame_077.jpg
    frames/frame_078.jpg
    frames/frame_079.jpg
    frames/frame_080.jpg
    frames/frame_081.jpg
    frames/frame_082.jpg
    frames/frame_083.jpg
    frames/frame_084.jpg
    frames/frame_085.jpg
    frames/frame_086.jpg
    frames/frame_087.jpg
    frames/frame_088.jpg
    frames/frame_089.jpg
    frames/frame_090.jpg
    frames/frame_091.jpg
    frames/frame_092.jpg
    frames/frame_093.jpg
    frames/frame_094.jpg
    frames/frame_095.jpg
    frames/frame_096.jpg
    frames/frame_097.jpg
    frames/frame_098.jpg
    frames/frame_099.jpg
    frames/frame_100.jpg
    frames/frame_101.jpg
    frames/frame_102.jpg
    frames/frame_103.jpg
    frames/frame_104.jpg
    frames/frame_105.jpg
    frames/frame_106.jpg
    frames/frame_107.jpg
    frames/frame_108.jpg
    frames/frame_109.jpg
    frames/frame_110.jpg
    frames/frame_111.jpg
    frames/frame_112.jpg
    frames/frame_113.jpg
    frames/frame_114.jpg
    frames/frame_115.jpg
    frames/frame_116.jpg
    frames/frame_117.jpg
    frames/frame_118.jpg
    frames/frame_119.jpg
    frames/frame_120.jpg
    frames/frame_121.jpg
    frames/frame_122.jpg
    frames/frame_123.jpg
    frames/frame_124.jpg
    frames/frame_125.jpg
    frames/frame_126.jpg
    frames/frame_127.jpg
    frames/frame_128.jpg
    frames/frame_129.jpg
    frames/frame_130.jpg
    frames/frame_131.jpg
    frames/frame_132.jpg
    frames/frame_133.jpg
    frames/frame_134.jpg
    frames/frame_135.jpg
    frames/frame_136.jpg
    frames/frame_137.jpg
    frames/frame_138.jpg
    frames/frame_139.jpg
    frames/frame_140.jpg
    frames/frame_141.jpg
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 142;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        markers:true,
        trigger:"#home",
        start:"5% 5%",
        end:"200% top",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"80% 80%",
        end:"100% 40%",
        markers:{
            startColor:"purple",
            endColor:"fuchsia",
        }
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }

  dom()
  
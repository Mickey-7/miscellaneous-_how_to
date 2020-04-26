$(document).ready(function(){
    $("#noFilterBtn").click(function(){
        Caman('#canvas', function(){
        // to render raw image    
        this.revert();
        this.render();
        console.log("noFilter");
        })
    })
})

$(document).ready(function(){
    $("#vintageBtn").click(function(){
        Caman('#canvas', function(){
        this.vintage();
        this.render();
        console.log("vintage");
        })
    })
})
//-------

$(document).ready(function(){
    $("#lomoBtn").click(function(){
        Caman('#canvas', function(){
        this.lomo();
        this.render();
        console.log("lomo");
        })
    })
})
//-------

$(document).ready(function(){
    $("#clarityBtn").click(function(){
        Caman('#canvas', function(){
        this.clarity();
        this.render();
        console.log("clarity");
        })
    })
})
//-------

$(document).ready(function(){
    $("#sinCityBtn").click(function(){
        Caman('#canvas', function(){
        this.sinCity();
        this.render();
        console.log("sinCity");
        })
    })
})
//-------

$(document).ready(function(){
    $("#sunriseBtn").click(function(){
        Caman('#canvas', function(){
        this.sunrise();
        this.render();
        console.log("sunrise");
        })
    })
})
//-------

$(document).ready(function(){
    $("#crossProcessBtn").click(function(){
        Caman('#canvas', function(){
        this.crossProcess();
        this.render();
        console.log("crossProcess");
        })
    })
})
//-------

$(document).ready(function(){
    $("#orangePeelBtn").click(function(){
        Caman('#canvas', function(){
        this.orangePeel();
        this.render();
        console.log("orangePeel");
        })
    })
})
//-------

$(document).ready(function(){
    $("#loveBtn").click(function(){
        Caman('#canvas', function(){
        this.love();
        this.render();
        console.log("love");
        })
    })
})
//-------

$(document).ready(function(){
    $("#grungyBtn").click(function(){
        Caman('#canvas', function(){
        this.grungy();
        this.render();
        console.log("grungy");
        })
    })
})
//-------

$(document).ready(function(){
    $("#jarquesBtn").click(function(){
        Caman('#canvas', function(){
        this.jarques();
        this.render();
        console.log("jarques");
        })
    })
})
//-------

$(document).ready(function(){
    $("#pinholeBtn").click(function(){
        Caman('#canvas', function(){
        this.pinhole();
        this.render();
        console.log("pinhole");
        })
    })
})
//-------

$(document).ready(function(){
    $("#oldBootBtn").click(function(){
        Caman('#canvas', function(){
        this.oldBoot();
        this.render();
        console.log("oldBoot");
        })
    })
})
//-------

$(document).ready(function(){
    $("#glowingSunBtn").click(function(){
        Caman('#canvas', function(){
        this.glowingSun();
        this.render();
        console.log("glowingSun");
        })
    })
})
//-------

$(document).ready(function(){
    $("#hazyDaysBtn").click(function(){
        Caman('#canvas', function(){
        this.hazyDays();
        this.render();
        console.log("hazyDays");
        })
    })
})
//-------

$(document).ready(function(){
    $("#herMajestyBtn").click(function(){
        Caman('#canvas', function(){
        this.herMajesty();
        this.render();
        console.log("herMajesty");
        })
    })
})
//-------

$(document).ready(function(){
    $("#nostalgiaBtn").click(function(){
        Caman('#canvas', function(){
        this.nostalgia();
        this.render();
        console.log("nostalgia");
        })
    })
})
//-------

$(document).ready(function(){
    $("#hemingwayBtn").click(function(){
        Caman('#canvas', function(){
        this.hemingway();
        this.render();
        console.log("hemingway");
        })
    })
})
//-------

$(document).ready(function(){
    $("#concentrateBtn").click(function(){
        Caman('#canvas', function(){
        this.concentrate();
        this.render();
        console.log("concentrate");
        })
    })
})



//reference : https://code.tutsplus.com/tutorials/creating-an-image-editor-using-camanjs-applying-basic-filters--cms-30251

$("#download-btn").on("click", function(e) {
    download(canvas,  "edited.jpg");
  });

function download(canvas, filename) {
    var e;
    var lnk = document.createElement("a");
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/jpeg",0.8);

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
            "click", true, true, window, 0, 0, 0, 0, 0,
            false, false, false, false, 0, null
        );

        lnk.dispatchEvent(e);

    } else if(lnk.fireEvent) {
        lnk.fireEvent("onClick");
    }
}


$('input[type=range]').change(applyFilters);

function applyFilters(){
    var hue = parseInt($('#hue').val());
    console.log(hue);
    var brightness = parseInt($('#brightness').val());
    console.log(brightness);
    var vibrance = parseInt($('#vibrance').val());
    console.log(vibrance);
    var clip = parseInt($('#clip').val());
    console.log(clip);
    var stackBlur = parseInt($('#stackBlur').val());
    console.log(stackBlur);
    var contrast = parseInt($('#contrast').val());
    console.log(contrast);
    var saturation = parseInt($('#saturation').val());
    console.log(saturation);
    var exposure = parseInt($('#exposure').val());
    console.log(exposure);
    var sepia = parseInt($('#sepia').val());
    console.log(sepia);
    var noise = parseInt($('#noise').val());
    console.log(noise);
    var sharpen = parseInt($('#sharpen').val());
    console.log(sharpen);

    Caman('#canvas', function(){
        this.revert(false);

        this.hue(hue)
            .brightness(brightness)
            .vibrance(vibrance)
            .clip(clip)
            .stackBlur(stackBlur)
            .contrast(contrast)
            .saturation(saturation)
            .exposure(exposure)
            .sepia(sepia)
            .noise(noise)
            .sharpen(sharpen)
         

            .render();
    })

}
console.log('init app')

var button = document.getElementById('angle')

button.addEventListener("click", function () {
    console.log('hiciste click')
    var scroll = window.scrollX
    console.log(scroll + 'scroll ')


    //// position 1 ////


    if (scroll === 0 || scroll < 800) {

        var i = 300
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'iii')
            if (i >= 1000) clearInterval(int)
        }, 30)

    }
    //// position 2 ////


    if (scroll === 900 || (scroll > 900 && scroll < 1800)) {

        console.log('lo logre')

        var i = 900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 2000) clearInterval(int)
        }, 30)

        var scroll = window.scrollX
        console.log(scroll + 'scroll tres')
    }

    //// position 3 ////


    if (scroll === 1900 || (scroll > 1900 && scroll < 2800)) {

        console.log('lo logre')

        var i = 1900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 2920) clearInterval(int)
        }, 30)

        var scroll = window.scrollX
        console.log(scroll + 'scrollllllll')
    }

    //// position 4 ////


    if (scroll === 2900 || (scroll > 2900 && scroll < 3900)) {

        console.log('lo logre')

        var i = 2900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 4000) clearInterval(int)
        }, 30)

        console.log(i + 'iiiiiii')
        var scroll = window.scrollX
        console.log(scroll + 'scrollllllll')
    }

    //// position 5 ////


    if (scroll === 3900 || (scroll > 3900 && scroll < 5000)) {

        console.log('lo logre')

        var i = 3900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 5100) clearInterval(int)
        }, 30)

        console.log(i + 'iiiiiii')
        var scroll = window.scrollX
        console.log(scroll + 'scrollllllll')
    }

    //// position 6 ////


    if (scroll === 5000 || (scroll > 5000 && scroll < 6000)) {

        console.log('lo logre')

        var i = 5000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 6100) clearInterval(int)
        }, 30)

        console.log(i + 'iiiiiii')
        var scroll = window.scrollX
        console.log(scroll + 'scrollllllll')
    }

    //// position 7 ////


    if (scroll === 6000 || (scroll > 6000 && scroll < 7500)) {

        console.log('lo logre')

        var i = 6000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            console.log(i + 'i del 900')
            if (i >= 7600) clearInterval(int)
        }, 30)

        console.log(i + 'iiiiiii')
        var scroll = window.scrollX
        console.log(scroll + 'scrollllllll')
    }


    //// position 8 y 9 ////


    if (scroll === 7500) {


        
     
            var i = 7501
           
                window.scrollTo(i, 0)

              /*   i += 100
                console.log(i + 'i del 900')
                if (i >= 8700) clearInterval(int) */
           

    
    }

    if (scroll === 7501 || (scroll > 7500 && scroll < 7600)) {


     
        var i = 7501
        var int = setInterval(function () {
            window.scrollTo(i, 0)

             i += 100
            console.log(i + 'i del 900')
            if (i >= 8700) clearInterval(int)
        }, 30)


}

})



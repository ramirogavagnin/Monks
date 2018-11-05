console.log('init app')

var rightButton = document.getElementById('angle-right')

var leftButton = document.getElementById('angle-left')




rightButton.addEventListener("click", function (event) {

    var scroll = window.scrollX

    //// position 0 to 1 ////



    if (scroll === 0 || scroll < 800) {
        var i = 300
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 1000) clearInterval(int)

        }, 30, addRemove())



        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('cero')
            var elementsToOpacity1 = document.getElementsByClassName('one')
            var counterAdd = document.getElementById('text-one')
            var angleLeftAdd = document.getElementById('angle-left')
            counterAdd.classList.add('li-text')
            angleLeftAdd.classList.remove('opacity0')
            angleLeftAdd.classList.add('opacity1')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }
    //// position 1 to 2 ////


    if (scroll === 900 || (scroll > 900 && scroll < 1800)) {

        var i = 900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 2000) clearInterval(int)
        }, 30, addRemove())


        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('one')
            var elementsToOpacity1 = document.getElementsByClassName('two')
            var counterRemove = document.getElementById('text-one')
             var counterAdd = document.getElementById('text-two')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
       
    }

    //// position 2 to 3 ////


    if (scroll === 1900 || (scroll > 1900 && scroll < 2800)) {

        var i = 1900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 2920) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('two')
            var elementsToOpacity1 = document.getElementsByClassName('three')
            var counterRemove = document.getElementById('text-two')
            var counterAdd = document.getElementById('text-three')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 3 to 4 ////


    if (scroll === 2900 || (scroll > 2900 && scroll < 3900)) {

        var i = 2900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 4000) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('three')
            var elementsToOpacity1 = document.getElementsByClassName('four')
            var counterRemove = document.getElementById('text-three')
            var counterAdd = document.getElementById('text-four')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 4 to 5 ////


    if (scroll === 3900 || (scroll > 3900 && scroll < 5000)) {

        var i = 3900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 5100) clearInterval(int)
        }, 30, addRemove())
        
        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('four')
            var elementsToOpacity1 = document.getElementsByClassName('five')
            var counterRemove = document.getElementById('text-four')
            var counterAdd = document.getElementById('text-five')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 5 to 6 ////


    if (scroll === 5000 || (scroll > 5000 && scroll < 6000)) {

        var i = 5000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 6100) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('five')
            var elementsToOpacity1 = document.getElementsByClassName('six')
            var counterRemove = document.getElementById('text-five')
            var counterAdd = document.getElementById('text-six')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 6 to 7 ////


    if (scroll === 6000 || (scroll > 6000 && scroll < 7500)) {

        var i = 6000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 7600) clearInterval(int)
        }, 30, addRemove())


        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('six')
            var elementsToOpacity1 = document.getElementsByClassName('seven')
            var counterRemove = document.getElementById('text-six')
            var counterAdd = document.getElementById('text-seven')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }


    //// position 7 to 8 ////


    if (scroll === 7500) {

        var i = 7501
        window.scrollTo(i, 0)
        addRemove()

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('seven')
            var elementsToOpacity1 = document.getElementsByClassName('eight')
            var counterRemove = document.getElementById('text-seven')
            var counterAdd = document.getElementById('text-eight')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 8 to 9 ////


    if (scroll === 7501 || (scroll > 7500 && scroll < 7600)) {

        var i = 7501
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i += 100
            if (i >= 8700) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('eight')
            var elementsToOpacity1 = document.getElementsByClassName('nine')
            var counterRemove = document.getElementById('text-eight')
            var counterAdd = document.getElementById('text-nine')
            var angleRightRemove = document.getElementById('angle-right')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')
            angleRightRemove.classList.remove('opacity1')
            angleRightRemove.classList.add('opacity0')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }

})



// ====================================================


/* LEFT ANGLE */


leftButton.addEventListener("click", function () {
    var scroll = window.scrollX
    

    //// position 1 to 0 ////


    if (scroll === 900 || (scroll > 300 && scroll < 800)) {

        var i = 900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= -100) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('one')
            var elementsToOpacity1 = document.getElementsByClassName('cero')
            var counter = document.getElementById('text-one')
            var angleLeftRemove = document.getElementById('angle-left')
            counter.classList.remove('li-text')
            angleLeftRemove.classList.remove('opacity1')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }

    //// position 2 to 1 ////


    if (scroll === 1900 || (scroll > 1200 && scroll < 1800)) {

        var i = 1900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 800) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('two')
            var elementsToOpacity1 = document.getElementsByClassName('one')
            var counterRemove = document.getElementById('text-two')
            var counterAdd = document.getElementById('text-one')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }

    //// position 3 to 2 ////


    if (scroll === 2900 || (scroll > 2300 && scroll < 2800)) {

        var i = 2900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 1800) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('three')
            var elementsToOpacity1 = document.getElementsByClassName('two')
            var counterRemove = document.getElementById('text-three')
            var counterAdd = document.getElementById('text-two')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 4 to 3 ////


    if (scroll === 3900 || (scroll > 3300 && scroll < 3800)) {

        var i = 3900
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 2800) clearInterval(int)
        }, 30, addRemove())
        
        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('four')
            var elementsToOpacity1 = document.getElementsByClassName('three')
            var counterRemove = document.getElementById('text-four')
            var counterAdd = document.getElementById('text-three')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }


    //// position 5 to 4 ////


    if (scroll === 5000 || (scroll > 4400 && scroll < 4900)) {

        var i = 5000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 3800) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('five')
            var elementsToOpacity1 = document.getElementsByClassName('four')
            var counterRemove = document.getElementById('text-five')
            var counterAdd = document.getElementById('text-four')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
      
    }

    //// position 6 to 5 ////


    if (scroll === 6000 || (scroll > 5400 && scroll < 5900)) {

        var i = 6000
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 4900) clearInterval(int)
        }, 30, addRemove())
    
        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('six')
            var elementsToOpacity1 = document.getElementsByClassName('five')
            var counterRemove = document.getElementById('text-six')
            var counterAdd = document.getElementById('text-five')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }


    //// position 7 to 6 ////


    if (scroll === 7500 || (scroll > 6900 && scroll < 7400)) {

        var i = 7500
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 5900) clearInterval(int)
        }, 30, addRemove())
        
        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('seven')
            var elementsToOpacity1 = document.getElementsByClassName('six')
            var counterRemove = document.getElementById('text-seven')
            var counterAdd = document.getElementById('text-six')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }

    }


    //// position 8 to 7 ////


    if (scroll === 7501) {
        var i = 7500
        window.scrollTo(i, 0)
        addRemove()
        
        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('eight')
            var elementsToOpacity1 = document.getElementsByClassName('seven')
            var counterRemove = document.getElementById('text-eight')
            var counterAdd = document.getElementById('text-seven')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
    }

    //// position 9 to 8 ////


    if (scroll === 8560 || (scroll > 7960 && scroll < 8450)) {

        var i = 8101
        var int = setInterval(function () {
            window.scrollTo(i, 0)
            i -= 100
            if (i <= 7500) clearInterval(int)
        }, 30, addRemove())

        function addRemove() {
            var elementsToOpacity0 = document.getElementsByClassName('nine')
            var elementsToOpacity1 = document.getElementsByClassName('eight')
            var counterAdd = document.getElementById('text-eight')
            var counterRemove = document.getElementById('text-nine')
            var angleRightAdd = document.getElementById('angle-right')
            counterAdd.classList.add('li-text')
            counterRemove.classList.remove('li-text')
            angleRightAdd.classList.remove('opacity0')
            angleRightAdd.classList.add('opacity1')
            

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.remove('opacity1')
            }

            for (var i = 0; i < elementsToOpacity0.length; i++) {
                elementsToOpacity0[i].classList.add('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.remove('opacity0')
            }

            for (var i = 0; i < elementsToOpacity1.length; i++) {
                elementsToOpacity1[i].classList.add('opacity1')
            }

        }
        
    }


})


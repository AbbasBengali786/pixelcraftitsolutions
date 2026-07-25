/*
====================================
Pixel Craft IT Solutions
Main JavaScript
====================================
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
        ================================
        Hero Terminal Typing Animation
        ================================
        */


        const typingElement =
            document.getElementById("typing");


        if (typingElement) {


            const messages = [

                "Building Websites...",

                "Developing AI Solutions...",

                "Creating Cloud Solutions...",

                "Automating Businesses...",

                "Delivering Enterprise Software..."

            ];



            let messageIndex = 0;

            let characterIndex = 0;

            let deleting = false;



            function typeEffect() {


                const currentMessage =
                    messages[messageIndex];



                if (!deleting) {


                    typingElement.textContent =
                        currentMessage.substring(
                            0,
                            characterIndex + 1
                        );


                    characterIndex++;



                    if(characterIndex === currentMessage.length){

                        deleting = true;

                        setTimeout(
                            typeEffect,
                            1800
                        );

                        return;

                    }


                }

                else {


                    typingElement.textContent =
                        currentMessage.substring(
                            0,
                            characterIndex - 1
                        );


                    characterIndex--;



                    if(characterIndex === 0){


                        deleting = false;


                        messageIndex =
                        (messageIndex + 1)
                        % messages.length;


                    }


                }



                const speed =
                deleting ? 40 : 90;



                setTimeout(
                    typeEffect,
                    speed
                );


            }



            typeEffect();


        }







        /*
        ================================
        Add animation when cards appear
        ================================
        */


        const cards =
        document.querySelectorAll(
            ".card-custom"
        );



        const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if(entry.isIntersecting){


                            entry.target.style.opacity = 1;

                            entry.target.style.transform =
                            "translateY(0)";


                        }


                    }
                );


            },
            {
                threshold:0.15
            }
        );



        cards.forEach(card => {


            card.style.opacity = 0;


            card.style.transform =
            "translateY(30px)";


            card.style.transition =
            "all .6s ease";


            observer.observe(card);


        });





    }
);


// =====================================
// Contact Form
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactFormCustom");

    if (!form) return;

    const success = document.getElementById("successMessage");

    form.addEventListener("submit", function () {

        setTimeout(function () {

            form.reset();

            success.classList.remove("d-none");

            success.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 1500);

    });

});
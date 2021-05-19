/*



	" Reimplement the wheel to either learn, or make it better. "

    http://www.haydex.com/
    https://www.youtube.com/watch?v=QOlTGA3RE8I
    
    Product Name: Btracker
	Description: Tracking Blog's data.
	Beneficiary: COSMOS
	
	Copyright © 1988 - 2021 HAYDEX, All Rights Reserved.
	
	
	
*/



document.addEventListener("DOMContentLoaded", function() {

    // General

    class General {

        constructor() {

            this.body = document.querySelector("body");
            this.sideBar = document.querySelector("div#sideBar");

            this.hiddenClass = "hidden";
            this.selectedClass = "selected";
            this.enabledClass = "enabled";

            this.initialize();

        }

        initialize() {

            this.sideBar.addEventListener("click", this.sideBarClickListener.bind(this));

        }

        sideBarClickListener(event) {

            if (event.target.parentNode.parentNode.classList.contains("sideBarOptionsList")) {

                if (event.target.parentNode.parentNode.classList.contains("multi")) {

                    event.target.parentNode.classList.toggle(this.selectedClass);

                } else {

                    var listItems = event.target.parentNode.parentNode.querySelectorAll("li");

                    for (var i = 0; i < listItems.length; i++) {

                        listItems[i].classList.remove(this.selectedClass);

                    }

                    event.target.parentNode.classList.add(this.selectedClass);

                }
                

            }

        }

    }

    // Initialization

    let general = new General();

});
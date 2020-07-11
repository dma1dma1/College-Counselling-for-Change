import counselordata from "./counselordata.js"

"use strict";

const appendCounselors = () => {
    const counselorList = document.getElementById('counselors');
    const template = document.getElementById('counselor-template');
    let i = 0;

    for (let counselor of counselordata.counselors) {
        let instance = document.importNode(template.content, true);
        let id = "counselor-" + i;

        /* Set Card Attributes */
        instance.querySelector(".card-img-top").src = counselor.imageLink;
        instance.querySelector(".card-title").innerHTML = counselor.name;
        instance.querySelector(".school").innerHTML = counselor.school;
        instance.querySelector(".major").innerHTML = counselor.major;

        /* Set Modal Links */
        instance.querySelector(".card").setAttribute("data-target", '#' + id);
        instance.querySelector(".modal").setAttribute("id", id);
        instance.querySelector(".modal").setAttribute("aria-labelledby", id);

        counselorList.appendChild(instance)
    }
}

//appendCounselors();
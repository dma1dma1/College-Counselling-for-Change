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
        for (let image of instance.querySelectorAll(".img-fluid")) {
            image.src = counselor.imageLink;
        }
        for (let title of instance.querySelectorAll(".name")) {
            title.innerHTML = counselor.name;
        }
        instance.querySelector(".major-school").innerHTML = counselor.major + " @ " + counselor.school;
        instance.querySelector(".bio").innerHTML = counselor.bio;
        let projectList = instance.querySelector(".project-list")
        for (let project of counselor.projects) {
            let item = document.createElement("li");
            item.innerHTML = project;
            projectList.appendChild(item);
        }

        /* Set Modal Links */
        instance.querySelector(".profile").setAttribute("data-target", '#' + id);
        instance.querySelector(".modal").setAttribute("id", id);
        instance.querySelector(".modal").setAttribute("aria-labelledby", id);

        counselorList.appendChild(instance);
        i++;
    }
}

appendCounselors();
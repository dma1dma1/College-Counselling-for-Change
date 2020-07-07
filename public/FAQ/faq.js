import faqdata from "./faqdata.js"

'use strict';

const appendFAQ = () => {
    const faqList = document.getElementById("faqs");
    const template = document.getElementById("faq-template");
    let i = 0;

    for (let faq of faqdata.faqs){
        let instance = document.importNode(template.content, true);
        const headingID = "heading-" + i;
        const collapseID = "collapse-" + i;

        /* Setting FAQ content */
        instance.querySelector('.question').innerHTML = faq.question;
        instance.querySelector('.answer').innerHTML = faq.answer;

        /* Setting necessary ids for collapse behavior */
        instance.querySelector('.card-header').id = headingID;

        instance.querySelector('.btn').setAttribute('data-target', '#' + collapseID);
        instance.querySelector('.btn').setAttribute('aria-controls', collapseID);
        
        instance.querySelector('.content-answer').id = collapseID;
        instance.querySelector('.content-answer').setAttribute('aria-labelledby', headingID);

        faqList.appendChild(instance);
        i++;
    }
}

appendFAQ();
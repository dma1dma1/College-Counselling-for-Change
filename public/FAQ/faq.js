import faqdata from "./faqdata.js"

'use strict';

const appendFAQ = () => {
    const faqList = document.getElementById("faqs");
    const template = document.getElementById("faq-template");

    for (let faq of faqdata.faqs){
        let instance = document.importNode(template.content, true);

        instance.querySelector('.question').innerHTML = faq.question;
        instance.querySelector('.answer').innerHTML = faq.answer;

        faqList.appendChild(instance);
    }
}

appendFAQ();
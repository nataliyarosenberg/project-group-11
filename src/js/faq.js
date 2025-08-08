import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
export function initAccordion() {
  document.addEventListener("DOMContentLoaded", () => {
    const accordion = new Accordion(".accordion", {
      duration: 300,
      showMultiple: false,
    });
    accordion.open(0);
  });
}
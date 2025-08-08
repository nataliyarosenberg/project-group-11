document.addEventListener("DOMContentLoaded", () => {
          const accordion = new Accordion(".accordion", {
            duration: 300,
            showMultiple: false, 
          });
          accordion.open(0);
        });
const accordionBtn = document.querySelectorAll('.accordion-headline');
const accordionCollapse = document.querySelectorAll('.accordion-collapse');
const accordionBody = document.querySelectorAll('.accordion-body');
const accordionItem = document.querySelectorAll('.accordion-item');

accordionBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (accordionItem[index].classList.contains('openned')) {
      accordionItem[index].classList.remove('openned');
      accordionCollapse[index].style.height = '0px';
    } else {
      accordionCollapse.forEach((item, index) => {
        item.style.height = '0px';
        accordionItem[index].classList.remove('openned');
      });

      accordionItem[index].classList.add('openned');
      const height = `${accordionBody[index].offsetHeight}px`;
      accordionCollapse[index].style.height = height;
    }
  });
});

//Extends native HTMLElement (primitive class that all HTML tags inherit from)
class RadioButton extends HTMLElement {
  constructor() {
    super();
  }

//Every custom element has a set of lifecycle callbacks. Gets run every time our element in insert into the DOM  
connectedCallback() {
  this.setAttribute('role', 'radio');
  this.setAttribute('tabindex', -1); //global attribute allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable
  this.setAttribute('aria-checked', false); //attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
  }
}

window.customElements.define('radio-button', RadioButton);
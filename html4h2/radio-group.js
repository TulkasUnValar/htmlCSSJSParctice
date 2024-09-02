//define values for keycodes
const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;

class RadioGroup extends HTMLElement {
  constructor() {
    super();
  }
  // 
  connectedCallback() {
    this.setAttribute('role', 'radiogroup'); // Setting role to radiogroup, screen reader, announces its control properly
    this.radios = Array.from(this.querySelectorAll('radio-button')); // Query selector to query all the radio button children 
  
  // Set up initial state. Select attribute is mapped to a selected property and when that changes we´ll change which item currently has the right tabindex
  if (this.hasAttribute('selected')) {
    let selected = this.getAttribute('selected');
    this._selected = selected;
    this.radios[selected].setAttribute('tabindex', 0);
    this.radios[selected].setAttribute('aria-checked', true);
  } else {
    this._selected = 0;
    this.radios[0].setAttribute('tabindex', 0);    
  }

  this.addEventListener('keydown', this.handleKeyDown.bind(this));
  this.addEventListener('click', this.handleKeyDown.bind(this));
  }

handleKeyDown(e) {
  switch(e.keyCode) {
    case VK_UP: 
    case VK_LEFT: {
      e.preventDefault(); // Preventing the default the default event behavior, when press up key don´t scroll the page

      // If 0 the length of our children is minus 1, because this is a 0 index array.
      if (this.selected === 0) {
        this.selected = this.radios.length - 1;
      } else {
        this.selected--;
      } // Otherwise decrement it, remove 1 value from the index.
      break;
    }   
    case VK_DOWN:
    case VK_RIGHT: {
      e.preventDefault(); // Preventing the default the default event behavior, when press up key don´t scroll the page

      // If 0 the length of our children is minus 1, because this is a 0 index array.
      if (this.selected === this.radios.length - 1) {
        this.selected = 0;
      } else {
        this.selected--;
      } // Otherwise decrement it, remove 1 value from the index.
      break;
    }
  }
}

handleClick(e) {

}

// Setters and Getters, functions that can be define in a class, dictated how the properties in the class work
set selected(idx) {
  // Checking the selected property. Calling our getter. Is already have selected property the getter could return some index, if could return 0 (maybe the first radio button selected), in that case, because 0 is a falsy value, we want to check that is the actually number 0, so we can use this inFinite method to see. 
  if (isFinite(this.selected)) {
    // Set the old button on tabindex -1
    let previousSelected = this.radios[this.selected]; // previously select. List of children that we have store in this.radio. 
    previousSelected.tabIndex = -1;
    previousSelected.removeAttribute('aria-checked', false);
  }

  let newSelected = this.radios[idx]; 
  newSelected.tabIndex = 0;
  newSelected.focus();
  newSelected.setAttribute('aria-checked', true);

  this.setAttribute('selected', idx);
  this._selected = idx;
} // Set: react to changes

get selected(idx) {
  return this._selected;
} // Get: When ask for the value, return the selected value

}

window.customElements.define('radio-group', RadioGroup);
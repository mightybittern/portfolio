import Choices from 'choices.js';

const selectElement = document.getElementById('my-select');
new Choices(selectElement, {
  placeholder: true,
  placeholderValue: 'Select your business type',
  searchEnabled: false,
  itemSelectText: '', // removes "Press to select"
});

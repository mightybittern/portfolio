import Choices from 'choices.js';

const selectElement = document.getElementById('my-select');
const choices = new Choices(selectElement, {
  placeholder: true,
  placeholderValue: 'Select your business type',
  searchEnabled: false,
  itemSelectText: '', // removes "Press to select"
});
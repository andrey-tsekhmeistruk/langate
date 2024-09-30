export class Select {
  constructor(selectContainerId) {
    this.selectContainer = document.getElementById(selectContainerId);
    this.selectBox = this.selectContainer.querySelector('.select-box');
    this.selectText = this.selectContainer.querySelector('.select-text');
    this.selectOptions = this.selectContainer.querySelector('.select-options');
  }

  initialize() {
    this.selectBox.addEventListener('click', () => {
      this.toggleSelect();
    });

    document.addEventListener('click', (e) => {
      if (!this.selectContainer.contains(e.target)) {
        this.closeSelect();
      }
    });

    this.selectOptions.querySelectorAll('li').forEach(option => {
      option.addEventListener('click', () => {
        this.updateSelectedOption(option);
        this.closeSelect();
      });
    });
  }

  toggleSelect() {
    this.selectContainer.classList.toggle('select-open');
  }

  closeSelect() {
    this.selectContainer.classList.remove('select-open');
  }

  updateSelectedOption(option) {
    this.selectText.textContent = option.textContent;
  }
}

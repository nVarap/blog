class NoteCardSet extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currCard = 0
      this.notecards = this.childNodes;
    }
  
    connectedCallback() {
      this.render();
      console.log(this.notecards);
      this.addEventListener('click', this.handleContainerClick.bind(this));
    }

  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .container {
            border: 1px solid #ccc;
            padding: 10px;
            cursor: pointer;
          }`
    }
  

  }
  
  customElements.define('notecard-set', NoteCardSet);
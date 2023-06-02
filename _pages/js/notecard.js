class Notecard extends HTMLElement {
    constructor(){
        super();
    };


    connectedCallback() {
        const front = this.getAttribute("front");
        const back = this.getAttribute("back");
        this.style.padding = "25px 25px 25px 25px"
        this.style.display = "show"
        this.style.textAlign = "center"
        this.style.maxWidth = "350px";
        

        var state = 1;

        const wrapper = document.createElement("div");

        const divider = document.createElement("div");
        divider.innerHTML= front;
        divider.style.textAlign = "center";
        divider.style.verticalAlign = "middle";
        divider.style.backgroundColor = "#808000";
        divider.style.width = "350px";
        divider.style.height = "250px";
        divider.style.border = "thick solid black";     
        divider.style.fontSize = "30px";

        divider.onclick = function(){
            if(state){
                divider.innerHTML = back;
            }
            else {
                divider.innerHTML = front;
            }
            state = !state;
        }

        wrapper.appendChild(divider);

        this.appendChild(wrapper);
        
        

    }
}

customElements.define('note-card', Notecard);
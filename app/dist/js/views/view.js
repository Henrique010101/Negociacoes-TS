export class View {
    constructor(seletorHtml, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletorHtml);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`Seletor ${seletorHtml} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script/, '');
        }
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map
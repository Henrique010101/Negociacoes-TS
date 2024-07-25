export abstract class View<T> {
    protected element: HTMLElement;
    private escapar = false;

    constructor(seletorHtml: string, escapar?: boolean) {
        const elemento = document.querySelector(seletorHtml);

        if (elemento) {
            this.element = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletorHtml} não existe no DOM.`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script/, '')
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;

}
export class View {
    protected element: HTMLElement;

    constructor(seletorHtml: string) {
        this.element = document.querySelector(seletorHtml)
    }
}
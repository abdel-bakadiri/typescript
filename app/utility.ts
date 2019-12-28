    // create a standalone function that return the value of input element in html when passing the id of element
     function getInputValue (idInputElement: string): string{
        const htmlInputElment: HTMLInputElement = <HTMLInputElement>document.getElementById(idInputElement);
        return htmlInputElment.value;
    }
    function logging(message: string): void{
        console.log(message);
    }
    export { getInputValue as getValueFromInHtml, logging};

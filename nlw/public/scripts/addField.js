document.querySelector("#add-time")
.addEventListener('click',cloneField)


function cloneField(){
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // copia o nó e todos os filhos

        const fields = newFieldContainer.querySelectorAll('input')

        fields[0].value = ""
        fields[1].value = ""

        fields.forEach(function(field){
            field.value = ""
        } );

        document.querySelector('#schedule-items').appendChild(newFieldContainer) // adiciona a cópia no html
}

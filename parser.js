let select = document.querySelector('.pcl');


let container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.style.background = '#fff';
container.style.border = '1px solid #ccc';
container.style.padding = '10px';
container.style.zIndex = 9999;
container.style.width = '300px';
container.style.fontFamily = 'sans-serif';
container.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';


let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Искать модель...';
input.style.width = '100%';
container.appendChild(input);


let results = document.createElement('div');
results.style.maxHeight = '200px';
results.style.overflowY = 'auto';
results.style.marginTop = '5px';
container.appendChild(results);


document.body.appendChild(container);


input.addEventListener('input', () => {
    let search = input.value.toLowerCase();
    results.innerHTML = '';
    if (!search) return;

    Array.from(select.options).forEach(option => {
        if (option.text.toLowerCase().includes(search)) {
            let div = document.createElement('div');
            div.textContent = option.text;
            div.style.padding = '3px';
            div.style.cursor = 'pointer';
            div.style.borderBottom = '1px solid #eee';
            
            div.addEventListener('click', () => {
                select.value = option.value;
                select.dispatchEvent(new Event('change'));
                input.value = option.text; 
                results.innerHTML = ''; 
            });

            results.appendChild(div);
        }
    });
});

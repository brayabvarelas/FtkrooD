document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Aquí agregamos el archivo cargado a la galería
            const gallery = document.getElementById('gallery');
            const newItem = document.createElement('div');
            newItem.classList.add('gallery-item');
            
            // Si el archivo es imagen
            if (file.type.startsWith('image')) {
                const img = document.createElement('img');
                img.src = e.target.result;
                newItem.appendChild(img);
            }
            // Si el archivo es video
            else if (file.type.startsWith('video')) {
                const video = document.createElement('video');
                video.controls = true;
                video.src = e.target.result;
                newItem.appendChild(video);
            }

            gallery.appendChild(newItem);
        };

        reader.readAsDataURL(file); // Leer el archivo como URL de datos
    }
});
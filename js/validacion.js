document.addEventListener('DOMContentLoaded', function() {
    const brand = document.getElementById('name');
    const model = document.getElementById('model');
    const maxUsagePerDay = document.getElementById('maxUsagePerDay');
    const validFrom = document.getElementById('validFrom');
    const email = document.getElementById('email');
    const passwd = document.getElementById('passwd');
    const vehicleTypeSUV = document.getElementById('vehicleTypeSUV');
    const vehicleTypeOffroad = document.getElementById('vehicleTypeOffroad');
    const vehicleTypeVan = document.getElementById('vehicleTypeVan');
    const receiveInfo = document.getElementById('receiveInfo');
    const submitBtn = document.getElementById('submitBtn');
    const vehicleTypeError = document.getElementById('vehicleTypeError');
    
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const marca = this.getAttribute('data-marca');
            
            const confirmed = confirm(`¿Está seguro de querer eliminar el coche ${marca}?`);

            if (confirmed) {
                console.log(`Borrar coche con ID ${id}`);
            }
        });
    });

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        let isValid = true;

        // Reiniciar clases de validación
        brand.classList.remove('is-invalid', 'is-valid');
        model.classList.remove('is-invalid', 'is-valid');
        maxUsagePerDay.classList.remove('is-invalid', 'is-valid');
        validFrom.classList.remove('is-invalid', 'is-valid');
        email.classList.remove('is-invalid', 'is-valid');
        passwd.classList.remove('is-invalid', 'is-valid');
        vehicleTypeSUV.classList.remove('is-invalid');
        vehicleTypeOffroad.classList.remove('is-invalid');
        vehicleTypeVan.classList.remove('is-invalid');
        receiveInfo.classList.remove('is-invalid');
        vehicleTypeError.classList.remove('is-invalid');

        // Validar marca
        const brandValue = brand.value;
        if (brandValue.trim() === '') {
            brand.classList.add('is-invalid');
            isValid = false;
        } else {
            brand.classList.add('is-valid');
        }

        // Validar modelo
        const modelValue = model.value.trim();
        if (modelValue.length < 3) {
            model.classList.add('is-invalid');
            isValid = false;
        } else {
            model.classList.add('is-valid');
        }

        // Validar tipo de vehículo solo si se ha hecho clic en Generate
        if (!event.submitter || event.submitter.id === 'submitBtn') {
            const vehicleTypes = [vehicleTypeSUV, vehicleTypeOffroad, vehicleTypeVan];
            let vehicleTypeChecked = false;
            vehicleTypes.forEach(type => {
                if (type.checked) {
                    vehicleTypeChecked = true;
                }
            });
            if (!vehicleTypeChecked) {
                vehicleTypeError.classList.add('is-invalid');
                isValid = false;
            }
        }

        // Validar email
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
        }

        // Validar contraseña
        const passwdValue = passwd.value.trim();
        const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwdRegex.test(passwdValue)) {
            passwd.classList.add('is-invalid');
            isValid = false;
        } else {
            passwd.classList.add('is-valid');
        }

        // Validar checkbox de recibir información
        if (!receiveInfo.checked) {
            receiveInfo.classList.add('is-invalid');
            isValid = false;
        }

    });
});
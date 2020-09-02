const inputs = document.querySelectorAll('.controls input')
const root = document.documentElement;

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    root.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

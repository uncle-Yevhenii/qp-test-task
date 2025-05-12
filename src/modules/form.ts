const formRoot = document.querySelector<HTMLFormElement>('#form-root')!;
const nameInput = formRoot.querySelector<HTMLInputElement>('input[name="name"]')!;
const emailInput = formRoot.querySelector<HTMLInputElement>('input[name="email"]')!;
const messageInput = formRoot.querySelector<HTMLTextAreaElement>('textarea[name="message"]')!;

const nameErrorLabel = formRoot.querySelector<HTMLLabelElement>('label[data-for="name"]')!;
const emailErrorLabel = formRoot.querySelector<HTMLLabelElement>('label[data-for="email"]')!;
const messageErrorLabel = formRoot.querySelector<HTMLLabelElement>('label[data-for="message"]')!;

export function initForm() {
    nameInput.addEventListener('input', () => {
        const error = validateName(nameInput.value);
        showError(nameInput, nameErrorLabel, error);
    });

    emailInput.addEventListener('input', () => {
        const error = validateEmail(emailInput.value);
        showError(emailInput, emailErrorLabel, error);
    });

    messageInput.addEventListener('input', () => {
        const error = validateMessage(messageInput.value);
        showError(messageInput, messageErrorLabel, error);
    });

    formRoot.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const messageError = validateMessage(message);

        showError(nameInput, nameErrorLabel, nameError);
        showError(emailInput, emailErrorLabel, emailError);
        showError(messageInput, messageErrorLabel, messageError);

        if (!nameError && !emailError && !messageError) {
            alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
            formRoot.reset();
            [nameInput, emailInput, messageInput].forEach((input) => {
                input.classList.remove('valid', 'invalid');
            });
            [nameErrorLabel, emailErrorLabel, messageErrorLabel].forEach((label) => {
                label.textContent = '';
                label.style.display = 'none';
            });
        }
    });
}

function validateName(name: string): string | null {
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    return null;
}

function validateMessage(message: string): string | null {
    if (message.trim().length < 6) return 'Message must be at least 6 characters';
    return null;
}

function validateEmail(email: string): string | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Incorrect email type';

    return null;
}

function showError(
    input: HTMLInputElement | HTMLTextAreaElement,
    errorLabel: HTMLLabelElement,
    message: string | null
): void {
    input.classList.remove('valid', 'invalid');
    errorLabel.textContent = '';
    errorLabel.style.display = 'none';

    if (message) {
        input.classList.add('invalid');
        errorLabel.textContent = message;
        errorLabel.style.display = 'block';
    }

    input.classList.add('valid');
}

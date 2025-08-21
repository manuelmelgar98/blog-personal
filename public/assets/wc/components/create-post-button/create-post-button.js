import { loadComponentAsset } from '../../utils/domUtils.js';
export class CreatePostButton extends HTMLElement {
    constructor() {
        super();
        this._initialized = false;
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        if (this._initialized)
            return;
        this._initialized = true;
        await loadComponentAsset('create-post-button/create-post-button', 'html', this._shadowRoot, '#create-post-button-template');
        await loadComponentAsset('create-post-button/create-post-button', 'css', this._shadowRoot);
        this._setupEventListeners();
    }
    _setupEventListeners() {
        const createPostBtn = this._shadowRoot.getElementById('createPostBtn');
        createPostBtn?.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('open-post-form'));
        });
    }
}
customElements.define('create-post-button', CreatePostButton);

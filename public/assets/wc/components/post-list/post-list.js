import { loadComponentAsset } from "../../utils/domUtils.js";

export class PostList extends HTMLElement {
    constructor() {
        super();
        this._initialized = false;
        this._posts = [];
        this._onPostsChanged = null;
        this._postsContainer = null;
        this._pendingPosts = null;
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set posts(value) {
        this._posts = Array.isArray(value) ? value : [];
        if (this._initialized) {
            this._renderPosts();
        } else {
            this._pendingPosts = this._posts;
        }
    }

    async connectedCallback() {
        if (this._initialized)
            return;
        this._initialized = true;
        await loadComponentAsset('post-list/post-list', 'html', this._shadowRoot, '#postListTemplate');
        await loadComponentAsset('post-list/post-list', 'css', this._shadowRoot);
        this._postsContainer = this._shadowRoot.getElementById('postsContainer');

        if (this._pendingPosts) {
            this._posts = this._pendingPosts;
            this._pendingPosts = null;
            this._renderPosts();
        }
        this._renderPosts();
        // this._setupEventListeners();
    }

    // async _loadPosts() {
    //     this._postsContainer.innerHTML = '';
    //     this._posts = await dataService.loadAllPosts();
    //     this._renderPosts();
    // }
    // _setupEventListeners() {
    //     document.addEventListener('posts-changed', (event) => {
    //         console.log('Posts changed event received:', event.detail);
    //         this._posts = event.detail.posts;
    //         this._renderPosts();
    //     });
    // }
    
    _renderPosts() {
        const postListContainer = this._shadowRoot.querySelector('.posts-container');
        if (!postListContainer)
            return;
        postListContainer.innerHTML = '';
        this._posts.forEach(post => {
            const postCard = document.createElement('post-card');
            postCard.setAttribute('post-data', JSON.stringify(post));
            postListContainer.appendChild(postCard);
        });
    }
}
customElements.define('post-list', PostList);

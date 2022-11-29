import { LitElement, html, css } from "lit";

export class MyCard extends LitElement {

    static properties = {
        productName: {},
        price: {},
        productImage: {},
        productDescription: {},
        liked: {},
    }

    constructor() {
        super();
        this.liked = false;
    }

    changeLikeColor(e) {
        const heart = e.target;
        this.liked = !this.liked;
        if(this.liked === true) {
            heart.style.color = 'red'
        }else{
            heart.style.color = '#2F4858';
        }
    }

    static styles = css`
    *{
        font-family: 'Rubik', sans-serif;
        box-sizing: border-box;
    }
    p {
        margin: 5px 0;
    }
    .container {
        width: 20rem;
        height: 25rem;
        border-radius: 25px;
        overflow: hidden;
        -webkit-box-shadow: 0px 0px 15px -5px rgba(51,101,138,0.4);
        -moz-box-shadow: 0px 0px 15px -5px rgba(51,101,138,0.4);
        box-shadow: 0px 0px 15px -5px rgba(51,101,138,0.4);
        transition: 1s;
    }
    .container:hover {
        transform: scale(1.03);
    }
    .row {
        width: 100%;
        height: 100%;
    }
    .first-section {
        width: 100%;
        height: 70%;
        position: relative;
        overflow: hidden;
    }
    .card-header {
        width: 100%;
        position: relative;
        padding: 1rem;
    }
    .optional-label {
        position: absolute;
        padding: 7px 10px;
        background-color: #F26219;
        color: #FFFFFF;
        border-radius: 10px;
    }
    .like-button {
        position: absolute;
        right: 1rem;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    .second-section {
        width: 100%;
        height: 26%;
        padding: .5rem 1rem;    
    }
    .heart-icon {
        font-size: 30px;
        color: #2F4858;
    }
    .product-name {
        font-weight: 500;
        font-size: 20px;
    }
    .product-description {
        color: #8F979B;
        margin-bottom: 1rem;
    }
    }
    `

    render() {
        const {productName, price, productImage, productDescription} = this;

        return html `
            <div class="container">
                <div class="row">
                    <div class="first-section">
                        <img class="image" src="${productImage}" alt="${productName}">
                        <div class="card-header">
                            <div class="optional-label">NEW</div>
                            <a @click="${this.changeLikeColor}" href="#" class="like-button">
                                <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="second-section">
                        <p class="product-name">${productName}</p>
                        <p class="product-description">${productDescription}</p>
                        <div>
                            <span><strong>$${price}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('my-card', MyCard);

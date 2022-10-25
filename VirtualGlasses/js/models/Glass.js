export class Glass {
    dataGlasses = [
        { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
        { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
        { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
        { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
        { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
        { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
        { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
    ];

    // dataGlasses = [];
    // async getDataGlass() {
    //     try {
    //         let result = await axios({
    //             url: '../../data/data.txt',
    //             method: 'GET',
    //             // responseType: 'text'
    //         })
    //         this.markDownData = result.data;
    //         console.log(result.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    renderGlass(selector) {
        let html = this.dataGlasses.reduce((content, prod) => {
            return content += `
            <img src="${prod.src}" class="col-4 vglasses__items" onclick="getGlassItem('${prod.id}')">
            `
        }, '');
        document.querySelector(selector).innerHTML = html;
    }
    getGlass(id) {
        let i = this.dataGlasses.find(prod => prod.id == id);
        let content = `
            <img src="${i.virtualImg}" id="glasses">
            `
        document.querySelector('#avatar').innerHTML = content;

    }
    getInfo(id) {
        let i = this.dataGlasses.find(prod => prod.id == id);
        let content = `
            <h5>${i.name} - ${i.brand} (${i.color})</h5>
            <span class="price">$${i.price} </span><span style="color:green">Stocking</span>
            <p>${i.description}</p>
            `
        document.querySelector('#glassesInfo').innerHTML = content;
        document.querySelector('#glassesInfo').style.display = "block";
    }
    removeGlass(boolean) {
        if (boolean) {
            document.querySelector('#glasses').style.display = "block";
        } else {
            document.querySelector('#glasses').style.display = "none";
        }
    }
}
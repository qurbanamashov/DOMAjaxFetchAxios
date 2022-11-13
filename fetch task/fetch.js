let div = document.getElementById("da");
fetch("https://api.tvmaze.com/shows").then(res => res.json())
    .then(element => element.forEach(element => {
        console.log(element);
        let card = document.createElement("div");
        card.className="col-3 mt-5";
        card.innerHTML =` <div class="card" style="width: 18rem;">
                            <img src="${element.image.original}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.type}</h5>
                                <p class="card-text">${element.name}</p>
                                <a href="${element.url}" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`;
        div.appendChild(card);
    }))
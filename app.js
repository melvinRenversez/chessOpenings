boxsContainer = document.getElementById('boxs');

Openings = ["london system"]

Openings.forEach(openings => {
    console.log(openings)

    child = `
            <div class="box">
                <a href="openings/${openings}/page.html">
                    <div class="top">
                        <h3>${openings}</h3>
                    </div>
                    <div class="bottom">
                        <img src="assets/svg/openings_1.svg">
                    </div>
                </a>
            </div>
    `

    boxsContainer.innerHTML += child;

});
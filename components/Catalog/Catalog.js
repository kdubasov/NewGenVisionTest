class Catalog{

    sortName(){
        COURSES.sort((a, b) => a.name > b.name ? 1 : -1)
        catalog.render()
        return COURSES
    }

    sortPrice(){
        COURSES.sort((a, b) => Number(a.prices[0]) >Number(b.prices[0]) ? 1 : -1)
        catalog.render()
        return COURSES
    }

    sortPriceOne(){
        COURSES = catalog.sortDefault().filter(item => +item.prices[0] <= 200 && +item.prices[1] <= 200)
        catalog.render()
        return COURSES
    }

    sortPriceSec(){
        COURSES = catalog.sortDefault().filter(item => +item.prices[0] >= 100 && +item.prices[0] <= 350 && +item.prices[1] <= 350 && +item.prices[1] >= 100)
        catalog.render()
        return COURSES
    }

    sortPriceThree(){
        COURSES = catalog.sortDefault().filter(item => +item.prices[0] >= 200)
        catalog.render()
        return COURSES
    }

    sortDefault(){
        COURSES = DEF_COURSES
        catalog.render()
        return COURSES
    }

    render(){
        let htmlCatalogCarts = ``;
        COURSES.map((elem)=>{
            htmlCatalogCarts += `
                <div class="card">
                    <div class="card-body">
                    
                        <h5 class="card-title">
                            Название курса: ${elem.name}
                        </h5>
                        
                        <p class="card-text">
                            Цена за курс: ${elem.prices[0] === null?elem.prices[0] = 0:elem.prices[0]} - ${elem.prices[1] === null?elem.prices[1] = ' и больше ':elem.prices[1]} рублей
                        </p>
                        
                    </div>
                </div>
            `;
        });

        const html = `
            <div class='flex-htnl-catalog'>
            <span>
                <button class="btn btn-primary" onclick="catalog.sortName()">Отсортировать по названию</button>
                <button class="btn btn-primary" onclick="catalog.sortPrice()">Отсортировать по цене курса</button>
                <button class="btn btn-success" onclick="catalog.sortPriceOne()">0-200р</button>
                <button class="btn btn-success" onclick="catalog.sortPriceSec()">100-350р</button>
                <button class="btn btn-success" onclick="catalog.sortPriceThree()">200р<</button>
                <button class="btn btn-dark" onclick="catalog.sortDefault()">Вернуть начальный каталог</button>
            </span>
                ${htmlCatalogCarts}
            </div>
        `;
        ROOT_CATALOG.innerHTML = html;
    }
}

const catalog = new Catalog();
catalog.render()
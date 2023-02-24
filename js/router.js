
export class Router {
    routes = {};

    add(routeName, page){
        console.log(`entrou no add routeName ${routeName} e page ${page}`);
        const route = this.routes[routeName] = page;
        console.log(`rota add ${route}`);

        fetch(route)
        .then(routerData => routerData.text())
        .then(html => document.querySelector('.App').innerHTML = html);
    }
}
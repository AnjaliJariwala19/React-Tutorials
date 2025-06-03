function anjaliRender (reactElement, container){
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const container = document.getElementById('container')
const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target: '_blank'
    },
    children : 'Visit GOOGLE'
}


anjaliRender (reactElement, container)
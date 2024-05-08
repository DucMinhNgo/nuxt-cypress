export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        // This will be an object representation of the html template.
        // console.log(html)
        // html.head.push(`<meta name="description" content="My custom description" />`)
        // html.head.push('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
    })
    // You can also intercept the response here.
    // nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})

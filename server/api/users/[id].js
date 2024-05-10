export default defineEventHandler(async (event) => {
    const data  = await import('~/mock/data/address.json');
    const {id} = event.context.params;
    console.log({id});
    return {
        addressData: data.default,
    };
})
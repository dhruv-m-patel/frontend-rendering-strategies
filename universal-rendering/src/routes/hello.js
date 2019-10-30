export default async function hello(router) {
  router.get('/', async (req, res, next) => {
    console.log('On hello page');
    next();
  });
}

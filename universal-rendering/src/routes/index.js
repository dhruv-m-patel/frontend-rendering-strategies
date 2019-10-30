export default async function index(router) {
  router.get('/', async (req, res, next) => {
    console.log('On index page');
    next();
  });
}

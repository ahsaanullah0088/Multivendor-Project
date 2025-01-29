router.post('/create-user', catchAsyncErrors(async (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);

}));



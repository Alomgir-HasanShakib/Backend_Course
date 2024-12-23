const asyncHandler = (requestHandler) => {
   (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
   };
};

export { asyncHandler };


// ========================================== this is another way to write async hanlder =========================================
// const asyncHandler = (requestHandler) => async (req, res, next) => {
//    try {
//       await requestHandler(req, res, next);
//    } catch (error) {
//       res.status(error.code || 500).json({
//          success: false,
//          message: error.message,
//       });
//    }
// };

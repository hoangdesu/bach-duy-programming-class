// avoid try-catch in every route handler

const catchAsync = fn => {
    return (...params) => {
        fn(...params).catch(err => console.error('>> ERROR:', err));
    }
};

module.exports = catchAsync;

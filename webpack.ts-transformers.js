const {createTransformer} = require('typescript-plugin-styled-components');
const styledComponentsTransformer = createTransformer();
const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });
module.exports = getCustomTransformers;
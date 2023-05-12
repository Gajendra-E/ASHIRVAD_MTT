"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async allproducts(ctx) {
    console.log("=================welcome========================")
    const BACKEND = `http://${process.env.HOST}:${process.env.PORT}`;
    const FRONTEND = `http://localhost:3000`;
    // const populate = ["id", "name"];
    const entities = await strapi.services.product.find();
    console.log("==============entities================================="+JSON.stringify(entities))
    const finalEntity = entities.map((entity) => {
      const obj = sanitizeEntity(entity, { model: strapi.models.product });
      console.log("--obj------"+JSON.stringify(obj)+"----------------------")
      obj.brochure = obj.brochure.map((item) => {
        const backUrl = `${BACKEND}${item?.pdf?.url}`;
        const toRet = {
          caption: item.caption,
          url: item.pdf ? `${FRONTEND}?pdf=${encodeURIComponent(backUrl)}` : "",
        };
        return toRet;
      });
      obj.useCases = obj.useCases.map((item) => {
        const backUrl = `${BACKEND}${item?.pdf?.url}`;
        const toRet = {
          caption: item.caption,
          url: item.pdf ? `${FRONTEND}?pdf=${encodeURIComponent(backUrl)}` : "",
        };
        return toRet;
      });
      obj.gallery = obj?.gallery?.map((item) => {
        const toRet = {
          caption: item.caption,
          media: item.media ? `${BACKEND}${item?.media?.url}` : "",
        };
        return toRet;
      });
      obj.videos = obj?.videos?.map((item) => {
        const toRet = {
          caption: item.caption,
          media: item.media ? `${BACKEND}${item?.media?.url}` : "",
        };
        return toRet;
      });
      return obj;
    });

    return finalEntity;
  },

 
  async find(ctx) {
    console.log("------------------------gjgfgjfgfggsfg-------------------")
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }
    // Calling the default core action
    const { data, meta } = await super.find(ctx);
    // some more custom logic
    meta.date = Date.now()
    return { data, meta };
  },

    // Method 3: Replacing a core action
    async findOne(ctx) {
      const { id } = ctx.params;
      console.log("---------------------------------------"+id)
      const { query } = ctx;
      const entity = await strapi.service('api::restaurant.restaurant').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    }
};

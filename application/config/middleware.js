module.exports = ({ env }) => {
  return {
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 900 * 1024 * 1024,
        },
      },
    },
  };
};

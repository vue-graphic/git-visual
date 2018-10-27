const behanceKey = process.env.BEHANCE_KEY || 'beta';

module.exports = function() {
  return `
    window.BEHANCE_KEY =  "${behanceKey}"
    `;
};

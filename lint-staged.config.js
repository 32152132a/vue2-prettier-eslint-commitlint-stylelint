module.exports = {
  '*.{js,vue}': [
    'vue-cli-service lint ./src --fix',
    'prettier --write ./src',
    'git add'
  ]
}

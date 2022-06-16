module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'br', // 针对bug号提交
        'init', // 创建项目
        'build', // 构建项目
        'chore', // 构建过程活辅助工具变动
        'docs', // 文档
        'feat', // 新功能
        'fix', // 修补bug
        'refactor', // 重构
        'revert', // 还原
        'style', //  格式, 不影响代码运行
        'test' // 测试
      ]
    ]
  }
}

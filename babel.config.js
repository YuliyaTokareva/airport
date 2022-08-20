module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 1%', useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};

// module.exports = {
//   presets: [
//     ['@babel/preset-env', { targets: '> 1%', useBuiltIns: 'usage', corejs: 3 }],
//     '@babel/preset-react'
//   ],
//   plugins: ['@babel/plugin-proposal-class-properties']
// };

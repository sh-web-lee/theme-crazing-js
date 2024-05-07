// var expect = require('expect.js');
var { useTheme } = require('../src/index.js');

const { setTheme } = useTheme();

// // js 测试源文件
// var base = require('../src/index.js');
// const { setTheme } = useTheme();

// describe('单元测试', function () {
//   this.timeout(1000);

//   describe('功能1', function () {
//     it('相等', function () {
//       expect(base.name).to.equal('base');
//     });
//   });

//   describe('功能2', function () {
//     it('不相等', function () {
//       expect(base.name).not.to.equal(1);
//     });
//   });
// });
var btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  setTheme(e);
});

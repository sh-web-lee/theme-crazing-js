// import yan2, { yan, B } from './test.js';

// console.log(yan);
// console.log(yan2, B);
// console.log([].includes('yeah!'));
// var a = 1 + 1;
// var b = a;
// console.log(a);
// console.log(b);

// export const name = 'base';
const viewTransitionStyle = [
  [
    '::view-transition-old(root)',
    ['animation', 'none'],
    ['mix-blend-mode', 'normal'],
    ['z-index', 1],
  ],
  [
    '::view-transition-new(root)',
    ['animation', 'none'],
    ['mix-blend-mode', 'normal'],
    ['z-index', 2147483646],
  ],
  ['.dark::view-transition-new(root)', ['z-index', 1]],
  ['.dark::view-transition-old(root)', ['z-index', 2147483646]],
];

function addStylesheetRules(decls) {
  var style = document.createElement('style');
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!window.createPopup) {
    /* For Safari */
    style.appendChild(document.createTextNode(''));
  }
  var s = document.styleSheets[document.styleSheets.length - 1];
  for (var i = 0, dl = decls.length; i < dl; i++) {
    var j = 1,
      decl = decls[i],
      selector = decl[0],
      rulesStr = '';
    if (Object.prototype.toString.call(decl[1][0]) === '[object Array]') {
      decl = decl[1];
      j = 0;
    }
    for (var rl = decl.length; j < rl; j++) {
      var rule = decl[j];
      rulesStr +=
        rule[0] + ':' + rule[1] + (rule[2] ? ' !important' : '') + ';\n';
    }

    if (s.insertRule) {
      s.insertRule(selector + '{' + rulesStr + '}', s.cssRules.length);
    } else {
      /* IE */
      s.addRule(selector, rulesStr, -1);
    }
  }
}

addStylesheetRules(viewTransitionStyle);

export function useTheme() {
  let isDarkMode = false;
  function setTheme(e) {
    const transition = document.startViewTransition(function () {
      document.documentElement.classList.toggle('dark');
      isDarkMode = document.documentElement.classList.contains('dark');
    });

    const x = e.clientX;
    const y = e.clientY;
    const distance = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${distance}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDarkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDarkMode
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      );
    });
  }

  return {
    isDarkMode,
    setTheme,
  };
}

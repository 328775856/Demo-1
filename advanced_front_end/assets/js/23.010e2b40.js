(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{194:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"use-strict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-strict","aria-hidden":"true"}},[s._v("#")]),s._v(" Use Strict")]),s._v(" "),a("p",[s._v('严格模式"是一种在JavaScript代码运行时自动实行更严格解析和错误处理的方法。这种模式使得Javascript在更严格的条件下运行。最好只在函数内使用严格模式.')]),s._v(" "),a("h2",{attrs:{id:"设立-严格模式-的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设立-严格模式-的优点","aria-hidden":"true"}},[s._v("#")]),s._v(' 设立"严格模式"的优点')]),s._v(" "),a("ol",[a("li",[a("p",[s._v("消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;")])]),s._v(" "),a("li",[a("p",[s._v("消除代码运行的一些不安全之处，保证代码运行的安全；")])]),s._v(" "),a("li",[a("p",[s._v("提高编译器效率，增加运行速度；")])]),s._v(" "),a("li",[a("p",[s._v("为未来新版本的Javascript做好铺垫。")])])]),s._v(" "),a("p",[s._v("注：经过测试 IE6,7,8,9 均不支持严格模式。")]),s._v(" "),a("h2",{attrs:{id:"设立-严格模式-的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设立-严格模式-的缺点","aria-hidden":"true"}},[s._v("#")]),s._v(' 设立"严格模式"的缺点')]),s._v(" "),a("p",[s._v("现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。")]),s._v(" "),a("h2",{attrs:{id:"严格模式详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式详情","aria-hidden":"true"}},[s._v("#")]),s._v(" 严格模式详情")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 变量必须先声明，再使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能对变量执行delete操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象的属性名不能重复")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("禁用eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数的arguments参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("later")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do stuff...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" later"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n禁用"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能修改arguments")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能在函数内定义arguments变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不能使用arugment.caller和argument.callee。因此如果你要引用匿名函数，需要对匿名函数命名。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("使调试更加容易。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。")])]),s._v(" "),a("li",[a("p",[s._v("变量在赋值之前必须声明,防止意外的全局变量。如果没有严格模式，将值分配给一个未声明的变量会自动创建该名称的全局变量。这是JavaScript中最常见的错误之一。在严格模式下，这样做的话会抛出错误。")])]),s._v(" "),a("li",[a("p",[s._v("取消this值的强制转换。如果没有严格模式，引用null或未定义的值到 this 值会自动强制到全局变量。在严格模式下，引用 null或未定义的 this 值会抛出错误。严格模式下，this不会指向window")])]),s._v(" "),a("li",[a("p",[s._v("不允许重复的属性名称或参数值。当检测到对象中重复命名的属性，例如：")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或检测到函数中重复命名的参数时,例如：")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("严格模式会抛出错误，因此捕捉几乎可以肯定是代码中的bug可以避免浪费大量的跟踪时间。")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[s._v("使 eval() 更安全。在严格模式和非严格模式下， eval() 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 eval() 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。")])]),s._v(" "),a("li",[a("p",[s._v("在 delete 使用无效时抛出错误。 delete 操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。")])]),s._v(" "),a("li",[a("p",[s._v("严格模式去除了with语句")])]),s._v(" "),a("li",[a("p",[s._v("不能修改arguments ，不能在函数内定义arguments变量  ，不能使用arugment.caller和argument.callee。因此如果你要引用匿名函数，需要对匿名函数命名。")])])])])}],!1,null,null,null);t.default=e.exports}}]);
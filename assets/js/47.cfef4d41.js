(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{372:function(t,a,s){"use strict";s.r(a);var n=s(25),p=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css样式表的继承性和层叠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css样式表的继承性和层叠性"}},[t._v("#")]),t._v(" CSS样式表的继承性和层叠性")]),t._v(" "),a("h2",{attrs:{id:"本文重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文重点"}},[t._v("#")]),t._v(" 本文重点")]),t._v(" "),a("ul",[a("li",[t._v("CSS的继承性")]),t._v(" "),a("li",[t._v("CSS的层叠性\n"),a("ul",[a("li",[t._v("计算权重")]),t._v(" "),a("li",[t._v("权重问题大总结")]),t._v(" "),a("li",[t._v("CSS样式表的冲突的总结")])])]),t._v(" "),a("li",[t._v("权重问题深入\n"),a("ul",[a("li",[t._v("同一个标签，携带了多个类名")]),t._v(" "),a("li",[t._v("!important标记")])])])]),t._v(" "),a("h2",{attrs:{id:"css的继承性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css的继承性"}},[t._v("#")]),t._v(" CSS的继承性")]),t._v(" "),a("p",[t._v("我们来看下面这样的代码，来引入继承性：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170724_2359.png",alt:""}})]),t._v(" "),a("p",[t._v("上方代码中，我们给div标签增加红色属性，却发现，div里的每一个子标签"),a("code",[t._v("<p>")]),t._v("也增加了红色属性。于是我们得到这样的结论：")]),t._v(" "),a("blockquote",[a("p",[t._v("有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是"),a("strong",[t._v("继承性。")])])]),t._v(" "),a("p",[t._v("继承性是从自己开始，直到最小的元素。")]),t._v(" "),a("p",[t._v("但是呢，如果再给上方的代码加一条属性：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170725_2122.jpg",alt:""}})]),t._v(" "),a("p",[t._v("上图中，我们给div加了一个border，但是发现只有div具备了border属性，而p标签却没有border属性。于是我们可以得出结论：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("关于文字样式的属性，都具有继承性。这些属性包括：color、 text-开头的、line-开头的、font-开头的。")])]),t._v(" "),a("li",[a("p",[t._v("关于盒子、定位、布局的属性，都不能继承。")])])]),t._v(" "),a("p",[t._v("以后当我们谈到css有哪些特性的时候，我们要首先想到继承性。而且，要知道哪些属性具有继承性、哪些属性没有继承性。")]),t._v(" "),a("h2",{attrs:{id:"css的层叠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css的层叠性"}},[t._v("#")]),t._v(" CSS的层叠性")]),t._v(" "),a("p",[t._v("很多公司如果要笔试，那么一定会考层叠性。")]),t._v(" "),a("h3",{attrs:{id:"层叠性-计算权重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠性-计算权重"}},[t._v("#")]),t._v(" 层叠性：计算权重")]),t._v(" "),a("p",[a("strong",[t._v("层叠性：就是css处理冲突的能力。")]),t._v(" 所有的权重计算，没有任何兼容问题！")]),t._v(" "),a("p",[t._v("CSS像艺术家一样优雅，像工程师一样严谨。")]),t._v(" "),a("p",[t._v("我们来看一个例子，就知道什么叫层叠性了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170725_2132.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，三种选择器同时给P标签增加颜色的属性，但是，文字最终显示的是蓝色，这个时候，就出现了层叠性的情况。")]),t._v(" "),a("p",[t._v("当多个选择器，选择上了某个元素的时候，要按照如下顺序统计权重：")]),t._v(" "),a("ul",[a("li",[t._v("id 选择器")]),t._v(" "),a("li",[t._v("类选择器、属性选择器、伪类选择器")]),t._v(" "),a("li",[t._v("标签选择器、伪元素选择器")])]),t._v(" "),a("p",[t._v("因为对于相同方式的样式表，其选择器排序的优先级为：ID选择器 > 类选择器 > 标签选择器")]),t._v(" "),a("p",[t._v("针对上面这句话，我们接下来举一些复杂一点的例子。")]),t._v(" "),a("h3",{attrs:{id:"层叠性举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠性举例"}},[t._v("#")]),t._v(" 层叠性举例")]),t._v(" "),a("h4",{attrs:{id:"举例1-计算权重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例1-计算权重"}},[t._v("#")]),t._v(" 举例1：计算权重")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170725_2138.png",alt:""}})]),t._v(" "),a("p",[t._v("如上图所示，统计各个选择器的数量，优先级高的胜出。文字的颜色为红色。")]),t._v(" "),a("p",[t._v("PS：不进位，实际上能进位（奇淫知识点：255个标签，等于1个类名）但是没有实战意义！")]),t._v(" "),a("h4",{attrs:{id:"举例2-权重相同时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例2-权重相同时"}},[t._v("#")]),t._v(" 举例2：权重相同时")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170725_2250.png",alt:""}})]),t._v(" "),a("p",[t._v("上图可以看到，第一个样式和第二个样式的权重相同。但第二个样式的书写顺序靠后，因此以第二个样式为准（就近原则）。")]),t._v(" "),a("h4",{attrs:{id:"举例3-具有实战性的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例3-具有实战性的例子"}},[t._v("#")]),t._v(" 举例3：具有实战性的例子")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170726_2221.png",alt:""}})]),t._v(" "),a("p",[t._v("现在我要让一个列表实现上面的这种样式：第一个li为红色，剩下的li全部为蓝色。")]),t._v(" "),a("p",[t._v("如果写成下面这种代码是无法实现的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170726_2225.png",alt:""}})]),t._v(" "),a("p",[t._v("无法实现的原因很简单，计算一下三个选择器的权重就清楚了，显然第二个样式被第一个样式表覆盖了。")]),t._v(" "),a("p",[t._v("正确的做法是：（"),a("strong",[t._v("非常重要")]),t._v("）")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170726_2229.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，第二个样式比第一个样式的权重要大。因此在实战中可以实现这种效果："),a("strong",[t._v("所有人当中，让某一个人为红，让其他所有人为蓝。")])]),t._v(" "),a("p",[t._v("这种方式好用是好用，但用好很难。")]),t._v(" "),a("p",[t._v("就拿上方代码来举例，为了达到这种效果，即为了防止权重不够，比较稳妥的做法是："),a("strong",[t._v("把第二个样式表照着第一个样式表来写，在此基础上，给第二个样式表再加一个权重。")])]),t._v(" "),a("p",[t._v("上面这个例子很具有实战性。")]),t._v(" "),a("h4",{attrs:{id:"举例4-继承性造成的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例4-继承性造成的影响"}},[t._v("#")]),t._v(" 举例4：继承性造成的影响")]),t._v(" "),a("p",[t._v("这里需要声明一点：")]),t._v(" "),a("blockquote",[a("p",[t._v("如果不能直接选中某个元素，通过继承性影响的话，那么权重是0。")])]),t._v(" "),a("p",[t._v("为了验证上面这句话，我们来看看下面这样的例子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0843.png",alt:""}})]),t._v(" "),a("p",[t._v("另外："),a("strong",[t._v("如果大家的权重相同，那么就采用就近原则：谁描述的近，听谁的")]),t._v("。举例如下：(box3 描述得最近，所以采用 box3 的属性)")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20190122_1530.png",alt:""}})]),t._v(" "),a("p",[t._v("上方代码的文字版如下：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("猜猜我是什么颜色"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("h3",{attrs:{id:"层叠性-权重计算的问题大总结-非常重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠性-权重计算的问题大总结-非常重要"}},[t._v("#")]),t._v(" 层叠性：权重计算的问题大总结（非常重要）")]),t._v(" "),a("p",[t._v("层叠性。层叠性是一种能力，就是处理冲突的能力。当不同选择器，对一个标签的同一个样式，有不同的值，听谁的？这就是冲突。css有着严格的处理冲突的机制。")]),t._v(" "),a("p",[t._v("通过列举上面几个例子，我们对权重问题做一个总结。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_2050.png",alt:""}})]),t._v(" "),a("p",[t._v("上面这个图非常重要，我们针对这个图做一个文字描述：")]),t._v(" "),a("ul",[a("li",[t._v("选择上了，数权重，(id的数量，类的数量，标签的数量)。如果权重一样，谁写在后面听谁的。")]),t._v(" "),a("li",[t._v("没有选择上，通过继承影响的，就近原则，谁描述的近听谁的。如果描述的一样近，比如选择器权重，如果权重再一样重，谁写在后面听谁的。")])]),t._v(" "),a("h3",{attrs:{id:"css样式表的冲突的总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css样式表的冲突的总结"}},[t._v("#")]),t._v(" CSS样式表的冲突的总结")]),t._v(" "),a("ul",[a("li",[t._v("1、对于相同的选择器（比如同样都是类选择器），其样式表排序：行级样式 > 内嵌样式表 > 外部样式表（就近原则）")]),t._v(" "),a("li",[t._v("2、对于相同类型的样式表（比如同样都是内部样式表），其选择器排序：ID选择器 > 类选择器 > 标签选择器")]),t._v(" "),a("li",[t._v("3、外部样式表的ID选择器  > 内嵌样式表的标签选择器")])]),t._v(" "),a("blockquote",[a("p",[t._v("总结：就近原则。ID选择器优先级最大。")])]),t._v(" "),a("p",[t._v("举例：如果都是内嵌样式表，优先级的顺序如下：（ID 选择器 > 类选择器 > 标签选择器）")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/2015-10-03-css-14.png",alt:""}})]),t._v(" "),a("p",[t._v("另外还有两个冲突的情况：")]),t._v(" "),a("ul",[a("li",[t._v("1、对同一个标签，如果用到的都是内嵌样式表，且权重一致，那它的优先级："),a("strong",[t._v("定义")]),t._v("的CSS样式表中，谁最近，就用谁。")]),t._v(" "),a("li",[t._v("2、对于同一个标签，如果用到的都是外部样式表，且权重一致，那它的优先级：html文件中，引用样式表的位置越近，就用谁。")])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/2015-10-03-css-16.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"题目演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目演示"}},[t._v("#")]),t._v(" 题目演示")]),t._v(" "),a("p",[t._v("CSS的层叠性讲完了，我们来做几个题目吧。")]),t._v(" "),a("h4",{attrs:{id:"题目1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目1"}},[t._v("#")]),t._v(" 题目1")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0851.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"题目2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目2"}},[t._v("#")]),t._v(" 题目2")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0853.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"题目3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目3"}},[t._v("#")]),t._v(" 题目3")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0855.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"题目4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目4"}},[t._v("#")]),t._v(" 题目4")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0857.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"权重问题深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权重问题深入"}},[t._v("#")]),t._v(" 权重问题深入")]),t._v(" "),a("h3",{attrs:{id:"同一个标签-携带了多个类名-有冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一个标签-携带了多个类名-有冲突"}},[t._v("#")]),t._v(" 同一个标签，携带了多个类名，有冲突")]),t._v(" "),a("p",[t._v("这里需要补充两种冲突的情况：")]),t._v(" "),a("ul",[a("li",[t._v("1、对同一个标签，如果用到了了多个相同的内嵌样式表，它的优先级："),a("strong",[t._v("定义")]),t._v("的样式表中，谁最近，就用谁。")]),t._v(" "),a("li",[t._v("2、对于同一个标签，如果引用了多个相同的外部样式表，它的优先级：html文件中，引用样式表的位置越近，就用谁。")])]),t._v(" "),a("p",[t._v("例如：（就近原则）")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_2021.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，"),a("strong",[t._v("文字显示的颜色均为红色")]),t._v("。因为这和在标签中的挂类名的书序无关，只和css的顺序有关。")]),t._v(" "),a("h3",{attrs:{id:"important标记-优先级最高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important标记-优先级最高"}},[t._v("#")]),t._v(" !important标记：优先级最高")]),t._v(" "),a("p",[t._v("来看个很简单的例子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_2029.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，显然id选择器的权重最大，所以文字的颜色是红色。")]),t._v(" "),a("p",[t._v("如果我们想让文字的颜色显示为绿色，只需要给标签选择器的加一个"),a("code",[t._v("!important")]),t._v("标记，此时其权重为无穷大。如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_2035_2.png",alt:""}})]),t._v(" "),a("p",[t._v("important是英语里面的“重要的”的意思。我们可以通过如下语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("k:v !important;\n")])])]),a("p",[t._v("来给一个属性提高权重。这个属性的权重就是"),a("strong",[t._v("无穷大")]),t._v("。")]),t._v(" "),a("p",[t._v("注意，一定要注意语法的正确性。")]),t._v(" "),a("p",[t._v("正确的语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("font-size:60px !important;\n")])])]),a("p",[t._v("错误的语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("font-size:60px; !important;    不能把!important写在外面\nfont-size:60px important;      不能忘记感叹号\n")])])]),a("p",[a("code",[t._v("!important")]),t._v("标记需要强调如下3点：")]),t._v(" "),a("p",[a("strong",[t._v("（1）!important提升的是一个属性，而不是一个选择器")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    只写了这一个"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),t._v("，所以只有字体颜色属性提升了权重\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       这条属性没有写"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),t._v("，所以没有提升权重\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#para1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所以，综合来看，字体颜色是red（听important的）；字号是50px（听id的）。")]),t._v(" "),a("p",[a("strong",[t._v("（2）!important无法提升继承的权重，该是0还是0")])]),t._v(" "),a("p",[t._v("比如HTML结构：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("哈哈哈哈哈哈哈哈"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("有CSS样式：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("由于div是通过继承性来影响文字颜色的，所以!important无法提升它的权重，权重依然是0。")]),t._v(" "),a("p",[t._v("干不过p标签，因为p标签是实实在在选中了，所以字是蓝色的（以p为准）。")]),t._v(" "),a("p",[a("strong",[t._v("(3)!important不影响就近原则")])]),t._v(" "),a("p",[t._v("如果大家都是继承来的，按理说应该按照“就近原则”，那么important能否影响就近原则呢？\n答案是：不影响。远的，永远是远的。不能给远的写一个important，干掉近的。")]),t._v(" "),a("p",[t._v("为了验证这个问题，我们可以搞两层具有继承性的标签，然后给外层标签加一个!important，最终看看就近原则有没有被打破。举例如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_2046.png",alt:""}})]),t._v(" "),a("p",[t._v("PS：做网站的时候，!important 尽量不要用。否则会让css写的很乱。")]),t._v(" "),a("h2",{attrs:{id:"知识回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识回顾"}},[t._v("#")]),t._v(" 知识回顾")]),t._v(" "),a("blockquote",[a("p",[t._v("我们把以上内容和上一篇文章做一个简单的知识回顾。")])]),t._v(" "),a("h3",{attrs:{id:"css属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css属性"}},[t._v("#")]),t._v(" CSS属性")]),t._v(" "),a("blockquote",[a("p",[t._v("css属性，面试的时候会有笔试，笔试没有智能提示的。")])]),t._v(" "),a("p",[t._v("加粗，倾斜，下划线：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("font-weight:bold;\nfont-style:italic;\ntext-decoration:underline;\n")])])]),a("p",[t._v("背景颜色、前景色：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("background-color:red;\ncolor:red;\n")])])]),a("h3",{attrs:{id:"class和id的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class和id的区别"}},[t._v("#")]),t._v(" class和id的区别")]),t._v(" "),a("p",[t._v("class用于css的，id用于js的。")]),t._v(" "),a("p",[t._v("1）class页面上可以重复。id页面上唯一，不能重复。\n2）一个标签可以有多个class，用空格隔开。但是id只能有id。")]),t._v(" "),a("h3",{attrs:{id:"各种选择器-浏览器兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种选择器-浏览器兼容性"}},[t._v("#")]),t._v(" 各种选择器(浏览器兼容性)")]),t._v(" "),a("p",[t._v("IE6层面兼容的选择器： 标签选择器、id选择器、类选择器、后代、交集选择器、并集选择器、通配符。如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p\n#box\n.spec\ndiv p\ndiv.spec\ndiv,p\n*\n")])])]),a("p",[t._v("IE7能够兼容的：儿子选择器、下一个兄弟选择器。如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("div>p\nh3+p\n")])])]),a("p",[t._v("IE8能够兼容的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ul li:first-child\nul li:last-child\n")])])]),a("h3",{attrs:{id:"css两个性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css两个性质"}},[t._v("#")]),t._v(" css两个性质")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("继承性：好的事儿。继承从上到下，哪些能？哪些不能？")])]),t._v(" "),a("li",[a("p",[t._v("层叠性：冲突，多个选择器描述了同一个属性，听谁的？")])])]),t._v(" "),a("p",[t._v("再看几个题目：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0900.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0901.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0902.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20170727_0903.png",alt:""}})])])}),[],!1,null,null,null);a.default=p.exports}}]);
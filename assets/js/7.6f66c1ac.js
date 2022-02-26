(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{365:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hello-world-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-collection"}},[t._v("#")]),t._v(" Hello World Collection")]),t._v(" "),a("h2",{attrs:{id:"a68"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a68"}},[t._v("#")]),t._v(" A68")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-a extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('( # Hello World # print(("Hello World!",newline)))\n')])])]),a("h2",{attrs:{id:"arnoldc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arnoldc"}},[t._v("#")]),t._v(" ArnoldC")]),t._v(" "),a("p",[t._v("Download: "),a("a",{attrs:{href:"http://lhartikk.github.io/ArnoldC",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://lhartikk.github.io/ArnoldC"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("java -jar ArnoldC.jar hello.arnoldc")])]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("java hello")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-arnoldc extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('IT\'S SHOWTIME\nTALK TO THE HAND "hello world"\nYOU HAVE BEEN TERMINATED\n')])])]),a("h2",{attrs:{id:"asembler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asembler"}},[t._v("#")]),t._v(" Asembler")]),t._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("## Hello Word in Assemlber for the MIPS Architecture\n\n.globl main\n\nmain:   jal hwbody              #call Hello World Procedure\n       trap 10                 #exit\n\nhwbody: addi $30, $30,-4        #we need to preserve\n       sw $4, 0($30)           #existing values in register 4\n\n       addi $4,$0,72           # H\n       trap 101\n       addi $4,$0,101          # e\n       trap 101\n       addi $4,$0,108          # l\n       trap 101\n       trap 101                # l\n       addi $4,$0,111          # o\n       trap 101\n       addi $4,$0,32           # <space>\n       trap 101\n       addi $4,$0,87           # W\n       trap 101\n       addi $4,$0,111          # o\n       trap 101\n       addi $4,$0,114          # r\n       trap 101\n       addi $4,$0,108          # l\n       trap 101\n       addi $4,$0,100          # d\n       trap 101\n       addi $4,$0,33           # !\n       trap 101\n       addi $4,$0,10           # \\n\n       trap 101\n\ndone:   lw $4, 0($30)           #restore values\n       addi $30, $30, 4        #in register 4\n       jr $31                  #return to the main\n")])])]),a("h2",{attrs:{id:"asembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asembly"}},[t._v("#")]),t._v(" Asembly")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-asm extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('org 100h\n\n\nlea dx, hello_string ; Put address of string in dx\nmov ah, 9 ; Move 9h to ah register\nint 21h ; Call the 21h interupt to print to the screen  \n\nmov ax, 4C00H ; See above\nint 21h ; Call interupt\n\nret  \n\nhello_string dw "Hello World!$" ; Define the string to print\n')])])]),a("h2",{attrs:{id:"batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch"}},[t._v("#")]),t._v(" Batch")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("hello_world.bat")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-bat extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@echo off\necho Hello World!\n")])])]),a("h2",{attrs:{id:"befunge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#befunge"}},[t._v("#")]),t._v(" Befunge")]),t._v(" "),a("p",[t._v("http://www.quirkster.com/iano/js/befunge.html")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-befunge extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"!dlroW olleH" > v\n                 ,\n                 :\n               ^ _ @\n')])])]),a("h2",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" C")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("gcc hello_world.c -o hello_world")])]),t._v(" "),a("p",[t._v("Run (Linux): "),a("code",[t._v("./hello_world")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"c-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-2"}},[t._v("#")]),t._v(" C#")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"c-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-3"}},[t._v("#")]),t._v(" C++")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("g++ hello_world.cpp -o hello_world")])]),t._v(" "),a("p",[t._v("Run (Linux): "),a("code",[t._v("./hello_world")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"coffee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coffee"}},[t._v("#")]),t._v(" Coffee")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-coffee extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-coffee"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n")])])]),a("h2",{attrs:{id:"dart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[t._v("#")]),t._v(" Dart")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("dart hello_word.dart")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #1) Install Dart - https://www.dartlang.org/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #2) Run - dart hello_world.dart")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"elixir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elixir"}},[t._v("#")]),t._v(" Elixir")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-ex extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 1) Install Elixir - https://elixir-lang.org/\n# 2) Run - elixir hello_world.ex\n\nIO.puts "Hello World"\n')])])]),a("h2",{attrs:{id:"f"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f"}},[t._v("#")]),t._v(" F")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-f extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('       program hello\n          print *, "Hello World!"\n       end program hello\n')])])]),a("h2",{attrs:{id:"fish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fish"}},[t._v("#")]),t._v(" Fish")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("fish hello_word.fish")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-fish extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#! /usr/bin/fish\n\n# To install the fish shell for your target platform, please refer to https://fishshell.com/\necho 'Hello World!'")])])]),a("h2",{attrs:{id:"go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go"}},[t._v("#")]),t._v(" Go")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"haskell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haskell"}},[t._v("#")]),t._v(" Haskell")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("ghc -dynamic helloworld.hs")])]),t._v(" "),a("p",[t._v("Run (Linux): "),a("code",[t._v("./helloworld")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("putStrLn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n")])])]),a("h2",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello World!\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("javac HelloWorld.java")])]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("java HelloWorld")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" Javascript")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("h2",{attrs:{id:"julia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#julia"}},[t._v("#")]),t._v(" Julia")]),t._v(" "),a("p",[t._v("Compile and Run: "),a("code",[t._v("julia HelloWorld.jl")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-jl extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('println("Hello World!")')])])]),a("h2",{attrs:{id:"kotlin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[t._v("#")]),t._v(" Kotlin")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("kotlinc HelloWorld.kt -include-runtime -d HelloWorld.jar")])]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("java -jar HelloWorld.jar")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-kt extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-kt"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("h2",{attrs:{id:"lolcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lolcode"}},[t._v("#")]),t._v(" Lolcode")]),t._v(" "),a("p",[t._v("Run: lci hello_world.lolcode")]),t._v(" "),a("p",[t._v("http://lolcode.org/")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-lolcode extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-lolcode"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v("\n  CAN HAS STDIO?\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VISIBLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KTHXBYE")]),t._v("\n")])])]),a("h2",{attrs:{id:"lisp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lisp"}},[t._v("#")]),t._v(" Lisp")]),t._v(" "),a("p",[t._v("Install clisp | "),a("code",[t._v("sudo apt-get install clisp")])]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("clisp hello_world.lisp")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-lisp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-lisp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token heading comment title"}},[t._v(";;;; install clisp | sudo apt-get install clisp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token heading comment title"}},[t._v(";;; run by typing: clisp hello_world.lisp")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token car"}},[t._v("write-line")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" Matlab")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-m extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("disp('Hello World');\n")])])]),a("h2",{attrs:{id:"nim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nim"}},[t._v("#")]),t._v(" NIM")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-nim extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n")])])]),a("h2",{attrs:{id:"ook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ook"}},[t._v("#")]),t._v(" Ook")]),t._v(" "),a("p",[t._v("https://www.splitbrain.org/services/ook")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-ook extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.\nOok! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?\nOok! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.\nOok. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\nOok? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\nOok! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!\nOok! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook.\n")])])]),a("h2",{attrs:{id:"pascal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pascal"}},[t._v("#")]),t._v(" Pascal")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-pas extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("program hello_world;\n\nBEGIN\nwriteln('Hello World!');\nEND.\n")])])]),a("h2",{attrs:{id:"perl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perl"}},[t._v("#")]),t._v(" Perl")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("perl hello_world.pl")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-pl extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/usr/bin/perl\n\nprint "Hello World!\\n";\n')])])]),a("h2",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" Php")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("php hello_world.php")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Hello World!\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"powershell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[t._v("#")]),t._v(" Powershell")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, World!"')]),t._v("\n")])])]),a("h2",{attrs:{id:"processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processing"}},[t._v("#")]),t._v(" Processing")]),t._v(" "),a("p",[t._v("Compile and Run : processing-java --run --sketch="),a("code",[t._v("pwd")]),t._v("/HelloWorld --output="),a("code",[t._v("pwd")]),t._v("/HelloWorld/output")]),t._v(" "),a("h2",{attrs:{id:"python-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-2"}},[t._v("#")]),t._v(" Python 2")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("python2 hello_world_2.py")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n")])])]),a("h2",{attrs:{id:"python-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-3"}},[t._v("#")]),t._v(" Python 3")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("python3 hello_world_3-6.py")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r"}},[t._v("#")]),t._v(" R")]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("R Hello-World.r")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhello\n")])])]),a("h2",{attrs:{id:"rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[t._v("#")]),t._v(" Rust")]),t._v(" "),a("p",[t._v("Compile: "),a("code",[t._v("rustc hello_world.rs")])]),t._v(" "),a("p",[t._v("Run: "),a("code",[t._v("./hello_world.rs")])]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-rs extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-rs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("h2",{attrs:{id:"scala"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scala"}},[t._v("#")]),t._v(" Scala")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" HelloWorld "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"shell-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-script"}},[t._v("#")]),t._v(" Shell Script")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),t._v("\n")])])]),a("h2",{attrs:{id:"swift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"visual-basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-basic"}},[t._v("#")]),t._v(" Visual Basic")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),a("div",{staticClass:"language-vbs extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('WScript.Echo "Hello World!"\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
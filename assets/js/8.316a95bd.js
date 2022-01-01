(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"koleksi-hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koleksi-hello-world"}},[a._v("#")]),a._v(' Koleksi "Hello World"')]),a._v(" "),s("h2",{attrs:{id:"a68"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a68"}},[a._v("#")]),a._v(" A68")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-a extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('( # Hello World # print(("Hello World!",newline)))\n')])])]),s("h2",{attrs:{id:"arnoldc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arnoldc"}},[a._v("#")]),a._v(" ArnoldC")]),a._v(" "),s("p",[a._v("Unduh: "),s("a",{attrs:{href:"http://lhartikk.github.io/ArnoldC",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://lhartikk.github.io/ArnoldC"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("java -jar ArnoldC.jar hello.arnoldc")])]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("java hello")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-arnoldc extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('IT\'S SHOWTIME\nTALK TO THE HAND "hello world"\nYOU HAVE BEEN TERMINATED\n')])])]),s("h2",{attrs:{id:"asembler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asembler"}},[a._v("#")]),a._v(" Asembler")]),a._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("## Hello Word in Assemlber for the MIPS Architecture\n\n.globl main\n\nmain:   jal hwbody              #call Hello World Procedure\n       trap 10                 #exit\n\nhwbody: addi $30, $30,-4        #we need to preserve\n       sw $4, 0($30)           #existing values in register 4\n\n       addi $4,$0,72           # H\n       trap 101\n       addi $4,$0,101          # e\n       trap 101\n       addi $4,$0,108          # l\n       trap 101\n       trap 101                # l\n       addi $4,$0,111          # o\n       trap 101\n       addi $4,$0,32           # <space>\n       trap 101\n       addi $4,$0,87           # W\n       trap 101\n       addi $4,$0,111          # o\n       trap 101\n       addi $4,$0,114          # r\n       trap 101\n       addi $4,$0,108          # l\n       trap 101\n       addi $4,$0,100          # d\n       trap 101\n       addi $4,$0,33           # !\n       trap 101\n       addi $4,$0,10           # \\n\n       trap 101\n\ndone:   lw $4, 0($30)           #restore values\n       addi $30, $30, 4        #in register 4\n       jr $31                  #return to the main\n")])])]),s("h2",{attrs:{id:"asembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asembly"}},[a._v("#")]),a._v(" Asembly")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-asm extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('org 100h\n\n\nlea dx, hello_string ; Put address of string in dx\nmov ah, 9 ; Move 9h to ah register\nint 21h ; Call the 21h interupt to print to the screen  \n\nmov ax, 4C00H ; See above\nint 21h ; Call interupt\n\nret  \n\nhello_string dw "Hello World!$" ; Define the string to print\n')])])]),s("h2",{attrs:{id:"batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batch"}},[a._v("#")]),a._v(" Batch")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("hello_world.bat")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-bat extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@echo off\necho Hello World!\n")])])]),s("h2",{attrs:{id:"befunge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#befunge"}},[a._v("#")]),a._v(" Befunge")]),a._v(" "),s("p",[a._v("http://www.quirkster.com/iano/js/befunge.html")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-befunge extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('"!dlroW olleH" > v\n                 ,\n                 :\n               ^ _ @\n')])])]),s("h2",{attrs:{id:"c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[a._v("#")]),a._v(" C")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("gcc hello_world.c -o hello_world")])]),a._v(" "),s("p",[a._v("Jalankan (Linux): "),s("code",[a._v("./hello_world")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-c extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<stdio.h>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"c-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-2"}},[a._v("#")]),a._v(" C#")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"c-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-3"}},[a._v("#")]),a._v(" C++")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("g++ hello_world.cpp -o hello_world")])]),a._v(" "),s("p",[a._v("Jalankan (Linux): "),s("code",[a._v("./hello_world")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("using")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"coffee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coffee"}},[a._v("#")]),a._v(" Coffee")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-coffee extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-coffee"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v("\n")])])]),s("h2",{attrs:{id:"dart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[a._v("#")]),a._v(" Dart")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("dart hello_word.dart")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// #1) Install Dart - https://www.dartlang.org/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// #2) Run - dart hello_world.dart")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"elixir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elixir"}},[a._v("#")]),a._v(" Elixir")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-ex extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# 1) Install Elixir - https://elixir-lang.org/\n# 2) Run - elixir hello_world.ex\n\nIO.puts "Hello World"\n')])])]),s("h2",{attrs:{id:"f"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#f"}},[a._v("#")]),a._v(" F")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-f extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('       program hello\n          print *, "Hello World!"\n       end program hello\n')])])]),s("h2",{attrs:{id:"fish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fish"}},[a._v("#")]),a._v(" Fish")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("fish hello_word.fish")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-fish extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")])]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#! /usr/bin/fish\n\n# To install the fish shell for your target platform, please refer to https://fishshell.com/\necho 'Hello World!'")])])]),s("h2",{attrs:{id:"go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go"}},[a._v("#")]),a._v(" Go")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"haskell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haskell"}},[a._v("#")]),a._v(" Haskell")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("ghc -dynamic helloworld.hs")])]),a._v(" "),s("p",[a._v("Jalankan (Linux): "),s("code",[a._v("./helloworld")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("main")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("putStrLn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v("\n")])])]),s("h2",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[a._v("#")]),a._v(" HTML")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\nHello World!\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" Java")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("javac HelloWorld.java")])]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("java HelloWorld")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[a._v("#")]),a._v(" Javascript")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])]),s("h2",{attrs:{id:"julia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#julia"}},[a._v("#")]),a._v(" Julia")]),a._v(" "),s("p",[a._v("Compile and Jalankan: "),s("code",[a._v("julia HelloWorld.jl")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-jl extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")])]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('println("Hello World!")')])])]),s("h2",{attrs:{id:"kotlin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[a._v("#")]),a._v(" Kotlin")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("kotlinc HelloWorld.kt -include-Jalankantime -d HelloWorld.jar")])]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("java -jar HelloWorld.jar")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-kt extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kt"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fun")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Array"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])]),s("h2",{attrs:{id:"lolkode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lolkode"}},[a._v("#")]),a._v(" LolKode")]),a._v(" "),s("p",[a._v("Jalankan: lci hello_world.lolcode")]),a._v(" "),s("p",[a._v("http://lolcode.org/")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-lolcode extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-lolcode"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("HAI")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2")]),a._v("\n  CAN HAS STDIO?\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VISIBLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KTHXBYE")]),a._v("\n")])])]),s("h2",{attrs:{id:"lisp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lisp"}},[a._v("#")]),a._v(" Lisp")]),a._v(" "),s("p",[a._v("Install clisp | "),s("code",[a._v("sudo apt-get install clisp")])]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("clisp hello_world.lisp")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-lisp extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-lisp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token heading comment title"}},[a._v(";;;; install clisp | sudo apt-get install clisp")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token heading comment title"}},[a._v(";;; run by typing: clisp hello_world.lisp")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token car"}},[a._v("write-line")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"matlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[a._v("#")]),a._v(" Matlab")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-m extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("disp('Hello World');\n")])])]),s("h2",{attrs:{id:"nim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nim"}},[a._v("#")]),a._v(" NIM")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-nim extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-nim"}},[s("code",[a._v("echo "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v("\n")])])]),s("h2",{attrs:{id:"ook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ook"}},[a._v("#")]),a._v(" Ook")]),a._v(" "),s("p",[a._v("https://www.splitbrain.org/services/ook")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-ook extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.\nOok! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?\nOok! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.\nOok. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.\nOok. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\nOok? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.\nOok! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.\nOok! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!\nOok! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook.\n")])])]),s("h2",{attrs:{id:"pascal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pascal"}},[a._v("#")]),a._v(" Pascal")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-pas extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("program hello_world;\n\nBEGIN\nwriteln('Hello World!');\nEND.\n")])])]),s("h2",{attrs:{id:"perl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#perl"}},[a._v("#")]),a._v(" Perl")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("perl hello_world.pl")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-pl extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('#!/usr/bin/perl\n\nprint "Hello World!\\n";\n')])])]),s("h2",{attrs:{id:"php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[a._v("#")]),a._v(" Php")]),a._v(" "),s("p",[a._v("Jalankan "),s("code",[a._v("php hello_world.php")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"Hello World!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])]),s("h2",{attrs:{id:"powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[a._v("#")]),a._v(" Powershell")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Write-Host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World!"')]),a._v("\n")])])]),s("h2",{attrs:{id:"processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing"}},[a._v("#")]),a._v(" Processing")]),a._v(" "),s("p",[a._v("Compile and Jalankan : processing-java --Jalankan --sketch="),s("code",[a._v("pwd")]),a._v("/HelloWorld --output="),s("code",[a._v("pwd")]),a._v("/HelloWorld/output")]),a._v(" "),s("h2",{attrs:{id:"python-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-2"}},[a._v("#")]),a._v(" Python 2")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("python2 hello_world_2.py")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),a._v("\n")])])]),s("h2",{attrs:{id:"python-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-3"}},[a._v("#")]),a._v(" Python 3")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("python3 hello_world_3-6.py")])]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r"}},[a._v("#")]),a._v(" R")]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("R Hello-World.r")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-r extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[a._v("hello"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\nprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nhello\n")])])]),s("h2",{attrs:{id:"rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[a._v("#")]),a._v(" Rust")]),a._v(" "),s("p",[a._v("Compile: "),s("code",[a._v("rustc hello_world.rs")])]),a._v(" "),s("p",[a._v("Jalankan: "),s("code",[a._v("./hello_world.rs")])]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-rs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-rs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])]),s("h2",{attrs:{id:"scala"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scala"}},[a._v("#")]),a._v(" Scala")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" HelloWorld "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Unit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"shell-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-script"}},[a._v("#")]),a._v(" Shell Script")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello World!'")]),a._v("\n")])])]),s("h2",{attrs:{id:"swift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[a._v("#")]),a._v(" Swift")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, world!"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"visual-basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-basic"}},[a._v("#")]),a._v(" Visual Basic")]),a._v(" "),s("p",[a._v("Kode:")]),a._v(" "),s("div",{staticClass:"language-vbs extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('WScript.Echo "Hello World!"\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
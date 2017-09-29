org 100h

; add your code here

hello_string dw "Hello World!$" ; Define the string

lea dx, hello_string
mov ah, 9
int 21h  

mov ax, 4C00H
int 21h

ret

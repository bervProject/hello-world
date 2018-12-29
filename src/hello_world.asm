org 100h


lea dx, hello_string ; Put address of string in dx
mov ah, 9 ; Move 9h to ah register
int 21h ; Call the 21h interupt to print to the screen  

mov ax, 4C00H ; See above
int 21h ; Call interupt

ret  

hello_string dw "Hello World!$" ; Define the string to print

from division import division
from multiplicacion import multiplicacion
from restas import resta
from sumas import suma
from modulo import modulo
from cuadrados import cuadrado

print("___Iniciando aplicacion___")

continuar = True

while(continuar):
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicacion")
    print("4. Division")
    print("5. ¿son pares o impares?")
    print("6. cuadrado de los numeros")
    opcion = int(input("que operacion deseas realizar?"))


    try:
        if(opcion!= 7):
            num1 = int(input("Ingrese el primer numero: "))
            num2 = int(input("Ingrese el segundo numero: "))
    except ValueError:
        print("error, ingrese solo numeros")
        continue

    match opcion:
        case 1: resultado = suma (num1, num2)
        case 2: resultado = resta (num1, num2)
        case 3: resultado = multiplicacion (num1, num2)
        case 4: resultado = division (num1, num2)
        case 5: resultado = modulo (num1, num2)
        case 6: resultado = cuadrado (num1, num2)
        case 6: continuar = False

    if(opcion != 7):
        print(f"El resultado de la operacion es: {resultado}")

    input("Desea continuar realizando operaciones? (Presione Enter para continuar)")
    respuesta = int(input("Ingrese su respuesta: "))
    if(respuesta == 2):
        continuar = False


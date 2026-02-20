def modulo (a,b):
    if(a % 2 == 0 and b % 2 == 0):
        return "Ambos números son pares"
    elif(a % 2 != 0 and b % 2 != 0):
        return "Ambos números son impares"
    elif(a % 2 == 0 and b % 2 != 0):
        return "El primer número es par y el segundo es impar"
    else: return "El primer número es impar y el segundo es par"
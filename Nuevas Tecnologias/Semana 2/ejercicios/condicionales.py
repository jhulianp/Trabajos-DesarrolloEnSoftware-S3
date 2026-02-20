edad = int(input("¿cual es tu edad? "))
if edad >= 18:
    print("Puedes entrar a la discoteca")
elif edad < 18 and edad > 17:
    print("Puedes entrar pero necesito $$$") 
else:
    print("No puedes entrar a la discoteca")

while edad > 18:
    print("puedes entrar a la discoteca")

for e in range(5):
    print(f"voy en la iteracion: {e+1}")